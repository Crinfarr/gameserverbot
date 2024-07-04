import { Database, open as dbOpen } from 'sqlite';
import sqlite3 from 'sqlite3';
import { PERMISSIONS } from './info';
import { v5 } from 'uuid';
import { namespace } from './env';

export default class database {
    static instantiated = false;
    static db:Database<sqlite3.Database, sqlite3.Statement>;
    static async instantiate() {
        if (this.instantiated) throw new Error('Cannot instantiate database: DB already initialized.');
        console.log("Creating internal db");
        this.db = await dbOpen({
            driver: sqlite3.Database,
            filename: 'serverdb.db'
        });
        console.log("running database declarations");
        await this.db.exec(/*sql*/`
            PRAGMA foreign_keys = ON;
    
            CREATE TABLE IF NOT EXISTS DOTokenMap (
                userid TEXT NOT NULL,
                token TEXT NOT NULL
            );
            CREATE TABLE IF NOT EXISTS PERMISSIONS (
                ID text not null primary key,
                NAME text not null unique,
                DESC text not null
            );
            CREATE TABLE IF NOT EXISTS Servers (
                ID text not null primary key,
                Ownerid text not null,
                DigitalOceanID text not null unique
            );
            CREATE TABLE IF NOT EXISTS PermMap (
                userid TEXT NOT NULL,
                FOREIGN KEY (permission) REFERENCES PERMISSIONS(ID),
                FOREIGN KEY (serverid) REFERENCES Servers(ID)
            );
            `);
        for (let [permname, { SHORTNAME, DESC }] of PERMISSIONS) {
            try {
                await this.db.exec(/*sql*/`
                        INSERT INTO PERMISSIONS (ID, NAME, DESC) VALUES (
                            "${v5(permname, namespace)}",
                            "${SHORTNAME}",
                            "${DESC}"
                        )
                        `);
            }
            catch (_) {
                console.debug(_);
                console.warn(`${permname} could not be inserted, skipping...`);
                continue;
            }
        }
        this.instantiated = true;
    }
}
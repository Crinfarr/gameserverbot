import {v4} from 'uuid';
import fs from 'fs';

const env: { "bot-token": string, namespace: string } = JSON.parse(fs.readFileSync('../env.json').toString());
if (env.namespace == '' || env.namespace == "Your Namespace UUID here" || env.namespace == undefined) {
    //autogenerate namespace uuid if none exists
    env.namespace = v4();
    fs.rmSync('../env.json');
    fs.writeFileSync('../env.json', JSON.stringify(env, null, 4));
}
export const token = env['bot-token'];
export const namespace = env.namespace;
export default env
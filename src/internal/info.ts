

export const PERMISSIONS: Map<string, { SHORTNAME: string, DESC: string }> = new Map<string, { SHORTNAME: string, DESC: string }>([
    ["PERM_STARTSERVER", {
        SHORTNAME: "Start Server",
        DESC: "Gives a user permissions to start a server, including from a snapshot"
    }],
    ["PERM_STOPSERVER", {
        SHORTNAME: "Stop Server",
        DESC: "Gives a user permissions to stop a server."
    }],
    ["PERM_CREATESERVER", {
        SHORTNAME: "Create Server",
        DESC: "Gives a user permissions to create a new server. This includes creating new droplets."
    }],
    ["PERM_DESTROYSERVER", {
        SHORTNAME:"Kill Server",
        DESC: "Gives a user permissions to kill a server immediately, bypassing the droplet shutdown parameters."
    }],
    ["PERM_RCON", {
        SHORTNAME: "Remote Console",
        DESC: "Gives a user the ability to run commands as the server. Depending on the game, this may also allow them to shut it down."
    }],
    ["PERM_METAPERMS", {
        SHORTNAME: "Manage Permissions",
        DESC: "Gives a user the ability to grant any permission they have, not including this one."
    }]
]);
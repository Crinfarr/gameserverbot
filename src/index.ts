import { ChatInputCommandInteraction, Client, Collection } from 'discord.js';
import env from './internal/env';
import database from './internal/database';

(async () => {
    await database.instantiate();
    const bot = new Client({
        intents: [
            'DirectMessageReactions',
            'DirectMessageTyping',
            'DirectMessages',
            'GuildMembers',
            'GuildMessageReactions',
            'GuildMessageTyping',
            'GuildMessages',
            'Guilds',
            'MessageContent',
        ]
    });

    bot.on('ready', (_) => {
        console.info(`Logged in as ${bot.user?.username}`);
    });

    bot.on('interactionCreate', (i) => {
        if (!i.isChatInputCommand()) return;
        const commandInteraction: ChatInputCommandInteraction = i;
        switch (commandInteraction.commandName) {

            default:
                console.warn(`Unknown commandName: ${commandInteraction.commandName}`);
                break;
        }
    });

    bot.login(env["bot-token"]);
})();
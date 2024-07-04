import { AutocompleteInteraction, SlashCommandBuilder } from "discord.js";
import database from "../internal/database";

export const cmd = new SlashCommandBuilder();
cmd.setName('Start Server')
cmd.setDescription('Starts a server.');
cmd.addStringOption((opt) => {
    
    return opt;
})
export const autocomplete = async (interaction:AutocompleteInteraction) => {
    const focusedOption = interaction.options.getFocused(true);
    
    await database.db.get(/*sql*/`
        `);
        //TODO Get info about what servers this user can start.
        //TODO may need to add a table for human readable server info
        //TODO and by may i mean will
}
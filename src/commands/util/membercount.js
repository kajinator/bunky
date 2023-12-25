const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('membercount')
        .setDescription('Returns the current amount of users in the server'),
    async execute(client, interaction) {
        // interaction.guild is the object representing the Guild in which the command was run
        await interaction.reply(
            `${interaction.guild.name} currently has: **${interaction.guild.memberCount} members.**`
        );
    },
};

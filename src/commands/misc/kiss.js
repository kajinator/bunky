const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kiss')
        .setDescription('Kiss a user')
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('Select a user to kiss')
                .setRequired(true)
        ),

    async execute(client, interaction) {
        const target = interaction.options.getUser('user');

        await interaction.reply({
            content: `${interaction.user.toString()} *kisses* ${target.toString()} :kiss:`,
            ephemral: false,
        });
    },
};

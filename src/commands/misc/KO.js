const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('worldstar')
        .setDescription('KO')
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('Select a user knock out')
                .setRequired(true)
        ),

    async execute(client, interaction) {
        const target = interaction.options.getUser('user');

        await interaction.reply({
            content: `${interaction.user.toString()} *knocks out* ${target.toString()} :boom:`,
            ephemral: false,
        });
    },
};

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hug')
        .setDescription('Hug a user')
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('Select a user to hug')
                .setRequired(true)
        ),

    async execute(client, interaction) {
        const target = interaction.options.getUser('user');

        await interaction.reply({
            content: `${interaction.user.toString()} *hugs* ${target.toString()} :heart:`,
            ephemral: false
        });
    }
};

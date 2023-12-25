const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kill')
        .setDescription('Kill a user')
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('Select a user to kill')
                .setRequired(true)
        ),

    async execute(client, interaction) {
        const target = interaction.options.getUser('user');

        await interaction.reply({
            content: `${interaction.user.toString()} *kills* ${target.toString()} :knife:`,
            ephemral: false,
        });
    },
};

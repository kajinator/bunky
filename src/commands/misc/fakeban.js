const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fakeban')
        .setDescription('Fake bans a user')
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('Select a user to fake ban')
                .setRequired(true)
        ),

    async execute(client, interaction) {
        const target = interaction.options.getUser('user');

        await interaction.reply({
            content: `${interaction.user.toString()} *bans* ${target.toString()} :hammer:`,
            ephemral: false,
        });
    },
};

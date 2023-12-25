const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Returns the API and bot latency.'),

    async execute(client, interaction) {
        const sent = await interaction.reply({
            content: 'Pinging...',
            fetchReply: true
        });
        interaction.editReply(
            `Roundtrip :dizzy: **${
                sent.createdTimestamp - interaction.createdTimestamp
            }ms.** Bot :ping_pong: **${client.ws.ping}ms.**`
        );
    }
};

const {
    SlashCommandBuilder,
    EmbedBuilder,
    ButtonBuilder,
    ButtonStyle,
    ActionRowBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Returns a users current avatar')
        .addUserOption((option) =>
            option
                .setName('user')
                .setDescription('Select a users avatar to display')
                .setRequired(true)
        ),

    async execute(client, interaction) {
        const target = interaction.options.getUser('user');
        const avatarURL = target.displayAvatarURL({ size: 256 });

        const embed = new EmbedBuilder()
            .setColor('5865f2')
            .setTitle(`${target.tag}'s Avatar`)
            .setImage(`${avatarURL}`);

        const button = new ButtonBuilder()
            .setLabel('Open in Browser')
            .setStyle(ButtonStyle.Link)
            .setURL(`${target.avatarURL({ size: 256 })}`);

        const row = new ActionRowBuilder().addComponents(button);

        await interaction.reply({
            embeds: [embed],
            components: [row]
        });
    }
};

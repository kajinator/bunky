const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans a user from the server')
        .addUserOption((option) =>
            option
                .setName('target')
                .setDescription('Select a target to ban')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName('reason')
                .setDescription('Specified reason for the ban')
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),

    async execute(client, interaction) {
        const target = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason');
        interaction.guild.members.ban(target);
        return interaction.reply({
            content: `${interaction.user.toString()} has banned ${target.toString()} for: ${reason}`,
            ephemeral: false,
        });
    },
};

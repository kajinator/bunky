const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kicks a user from the server')
        .addUserOption((option) =>
            option
                .setName('target')
                .setDescription('Select a target to kick')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
                .setName('reason')
                .setDescription('Specified reason for the kick')
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),

    async execute(client, interaction) {
        const target = interaction.options.getUser('target');
        const reason = interaction.options.getString('reason');
        interaction.guild.members.kick(target);
        return interaction.reply({
            content: `${interaction.user.toString()} has kicked ${target.toString()} for reason: **${reason}**`,
            ephemeral: false
        });
    }
};

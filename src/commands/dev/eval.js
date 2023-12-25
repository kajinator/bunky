const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { codeBlock } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setDMPermission(false)
        .setName('eval')
        .setDescription('Evaluates javascript code')
        .addStringOption((option) =>
            option
                .setName('code')
                .setDescription('Code to evaluate')
                .setMinLength(1)
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(client, interaction) {
        await interaction.deferReply();
        const code = interaction.options.getString('code');

        try {
            const code = interaction.options.getString('code');
            let result = eval(code);
            if (typeof result !== 'string') {
                result = require('util').inspect(result);
            }
            await interaction
                .editReply({
                    content: codeBlock(`\n${result}`),
                    embeds: [],
                    files: [],
                    components: [],
                    ephemeral: false,
                    tts: false,
                })
                .catch((e) => console.log(e));
        } catch (error) {
            await interaction
                .editReply({
                    content: codeBlock(`\n${error}`),
                    embeds: [],
                    files: [],
                    components: [],
                    ephemeral: false,
                    tts: false,
                })
                .catch((e) => console.log(e));
        }
    },
};

import { SlashCommandBuilder } from 'discord.js';
import { ChatCompletion } from '../../modules/GPT';

export const data = new SlashCommandBuilder()
    .setName('chat')
    .setDescription('ChatGPT in discord!')
    .addStringOption(option => option.setName('chat')
        .setDescription('input chat')
        .setRequired(true))
export async function execute(interaction) {
    const prompt = interaction.option.getString('chat')
    const response = ChatCompletion(prompt)
    interaction.editReply(response)
}
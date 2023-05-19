import { SlashCommandBuilder } from 'discord.js';
import { Completion } from '../../modules/GPT.js';

export const data = new SlashCommandBuilder()
    .setName('chat')
    .setDescription('ChatGPT in discord!')
    .addStringOption(option => 
        option
        .setName('chat')
        .setDescription('input chat')
        .setRequired(true))
export async function execute(interaction) {
    const prompt = interaction.options.getString('chat')
    const response = await Completion(prompt, 150, 0.9, 1, 0.0, 0.6)
    interaction.editReply(response)
}
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
    const response = await Completion({
        prompt: prompt,
        max_tokens: 150,
        temperature: 0.9,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: ['\n']
    })
    interaction.editReply(response)
}
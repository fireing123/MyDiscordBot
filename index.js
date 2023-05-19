import { Client, Collection, GatewayIntentBits } from 'discord.js';
import { SetEvents } from './events/SetEvents'; SetEvents()
import { readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { config } from 'dotenv'; config();

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
]});

const __dirname = resolve();

client.commands = new Collection();

const folderPath = join(__dirname, 'commands');
const commandFolders = readdirSync(folderPath);

for (const folder of commandFolders) {
    const commandsPath = join(folderPath, folder);
    const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const filePath = join(commandsPath, file);
        console.log(filePath);
        const command = import(filePath)
            .then(module => {resolve(module)})
            .catch(error => {console.error(error)});
        if ('data' in command && 'execute' in command) {
    		client.commands.set(command.data.name, command);
    	} else {
	    	console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	    }
    }
}

client.login(process.env.DISCORD_TOKEN);

export { client };
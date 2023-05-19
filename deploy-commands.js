import { REST, Routes } from 'discord.js';
import { config } from 'dotenv'; config();
import { readdirSync } from 'node:fs';
import path from 'node:path';



const __dirname = path.resolve();

const commands = [];

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = readdirSync(foldersPath);

let module = await import('"C:/Users/gimd8/OneDrive/바탕 화면/MyDiscordBot/modules/GPT"')

/*
for (const folder of commandFolders) {
	// Grab all the command files from the commands directory you created earlier
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	// Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		console.log(filePath)
        import(filePath).then(res => {console.log(res)})/*.then(command => {
            if ('data' in command && 'execute' in command) {
                commands.push(command.data.toJSON());
            } else {
                console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
            }
        });
	}
}

const rest = new REST().setToken(process.env.DISCORD_TOKEN);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);
		const data = await rest.put(
			Routes.applicationCommands(process.env.CLIENT_ID),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();*/
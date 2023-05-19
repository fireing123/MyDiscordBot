import { SendReady } from './ClientReady.js';
import { MessageCreate } from './MessageCreate.js';
import { InteractionCreate } from './InteractionCreate.js';

const SetEvent = (client) => {
    client.once("ready", () => SendReady(client.user.tag));
    client.on("messageCreate", (message) => MessageCreate(message));
    client.on("interactionCreate",async (interaction) => InteractionCreate(interaction));
};

export { SetEvent };
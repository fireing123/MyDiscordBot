import { client } from '../index'
import { SendReady } from './ClientReady';
import { MessageCreate } from './MessageCreate';
import { InteractionCreate } from './InteractionCreate'

const SetEvents = () => {
    client.once("ready", SendReady);
    client.on("messageCreate", MessageCreate);
    client.on("interactionCreate", InteractionCreate);
};

export { SetEvents };
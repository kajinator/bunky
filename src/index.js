const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

client.once(Events.ClientReady, (readyClient) => {
    console.log(
        `Logged in as ${readyClient.user.tag}. Initial roundtrip: ${client.ws.ping}`
    );
});

client.login(token);

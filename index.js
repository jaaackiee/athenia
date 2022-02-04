const djs = require("discord.js");
const path = require("path");
const dotenv = require("dotenv");
const commandHandler = require("./commandHandler");
dotenv.config();

const client = new djs.Client({
    intents: [
        djs.Intents.FLAGS.GUILDS,
        djs.Intents.FLAGS.GUILD_MESSAGES,
        djs.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
});

client.on("ready", () => {
    client.user.setActivity(".help");
    client.user.setAvatar("./images/icon.png");

    commandHandler(client);
});

client.login(process.env.TOKEN);

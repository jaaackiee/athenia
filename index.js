const djs = require("discord.js");
const wokcommands = require("wokcommands");
const path = require("path");
const dotenv = require("dotenv");
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
    
    new wokcommands(client, {
        commandsDir: path.join(__dirname, "commands"),
        mongoUri: process.env.MONGO_PATH,
        disabledDefaultCommands: [
            "channelonly",
            "command",
            "language",
            "prefix",
            "requiredrole"
        ],
        testServers: ["810790872693604412"],
        botOwners: ["326645430089941030"]
    })
        .setDefaultPrefix(".");
});

client.login(process.env.TOKEN);

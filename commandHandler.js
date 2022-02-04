const getFiles = require("./util/getFiles");
module.exports = async (client) => {
    const commands = {};

    const commandFiles = getFiles("./commands", ".js");
    console.log(commandFiles);

    for (const commandFile of commandFiles) {
        let command = require(commandFile);

        if (command.default) {
            command = command.default;
        }

        /**
         * Replaces each '\' in the commandFile path with '/' for operating system parity
         * Splits the commandFile path into each directory on '/'
         * Defines the command's name as the last file in the path (the command file)
         * 
         * @example 
         * "commands/cute/cat.js" -> ["commands", "cute", "cat.js"] -> "cat"
         */
        const split = commandFile.replace(/\\/g, "/").split("/");
        const commandName = split[split.length - 1].replace(".js", "");

        commands[commandName.toLowerCase()] = command;
    }
    console.log(commands);

    client.on("messageCreate", (message) => {
        if (message.author.bot || !message.content.startsWith(".")) {
            return;
        }

        /**
         * Slices off the first character of the message (the prefix)
         * Splits the message on ' '
         * Defines the command's name as args[0]
         * Removes args[0]
         * 
         * @example
         * ".ban @user rule breaker" -> "ban @user rule breaker" -> ["ban", "@user", "rule", "breaker"] -> ["@user", "rule", "breaker"]
         */
        const args = message.content.slice(1).split(" ");
        const commandName = args.shift().toLowerCase();

        if (!commands[commandName]) {
            return;
        }

        try {
            commands[commandName].callback(message, ...args)
        } catch(e) {
            message.channel.send({
                custom: true, 
                content: "\`\`\`st\n" + e + "\n\`\`\`"
            });
        }
    });
}
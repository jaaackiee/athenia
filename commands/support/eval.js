const coin = require("../../util/economy/coin");
const food = require("../../util/economy/food");
const pet = require("../../util/economy/pet");
const vote = require("../../util/economy/vote");
module.exports = {
    aliases: ["eval"],
    category: "support",
    description: "Executes a string as a line of javascript code.",
    ownerOnly: true,
    callback: async ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        try {
            eval(text);
        } catch (err) {
            message.channel.send(`\`\`\`st\n${err}\n\`\`\``);
        }
    }
}
const topics = require("../../resources/topics.json");
module.exports = {
    aliases: ["topic"],
    category: "fun",
    description: "Displays an interesting topic.",
    callback: ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        return {
            custom: true,
            content: topics[Math.floor(Math.random() * topics.length)]
        }
    }
}
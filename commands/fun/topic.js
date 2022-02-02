const topics = require("../../resources/topics.json");
module.exports = {
    aliases: ["topic"],
    category: "fun",
    description: "Displays an interesting topic.",
    callback: () => {
        return {
            custom: true,
            content: topics[Math.floor(Math.random() * topics.length)]
        }
    }
}
const wyr = require("../../resources/wyr");
module.exports = {
    aliases: ["wyr"],
    category: "fun",
    description: "Get a fun would you rather question.",
    callback: () => {
        return {
            custom: true,
            content: wyr[Math.floor(Math.random() * wyr.length)]
        }
    }
}
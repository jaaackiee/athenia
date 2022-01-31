const axios = require("axios");
module.exports = {
    aliases: ["meme"],
    category: "fun",
    description: "Displays a wholesome meme.",
    callback: async ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        const res = await axios.get("https://meme-api.herokuapp.com/gimme/wholesomememes");
        const embed = {
            color: 0x2f3136,
            title: "**" + res.data.title + "**",
            image: {
                url: res.data.url
            }
        }

        return {
            custom: true,
            embeds: [embed]
        }
    }
}
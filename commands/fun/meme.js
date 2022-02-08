const axios = require("axios");
module.exports = {
    description: "wholesome memes",
    callback: async (message, args, text) => {
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
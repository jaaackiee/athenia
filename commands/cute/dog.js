const axios = require("axios");
module.exports = {
    aliases: ["dog"],
    category: "cute",
    description: "Displays a cute dog picture.",
    callback: async ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        const res = await axios.get("https://api.thedogapi.com/v1/images/search");
        return {
            custom: true,
            content: res.data[0].url
        }
    }
}
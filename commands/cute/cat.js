const axios = require("axios");
module.exports = {
    aliases: ["cat"],
    category: "cute",
    description: "Displays a cute cat picture.",
    callback: async () => {
        const res = await axios.get("https://api.thecatapi.com/v1/images/search");
        return {
            custom: true,
            content: res.data[0].url
        }
    }
}
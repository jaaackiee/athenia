const axios = require("axios");
module.exports = {
    aliases: ["inspo"],
    category: "fun",
    description: "Displays an inspirational quote.",
    callback: async () => {
        const res = await axios.get("https://zenquotes.io/api/random");
        return {
            custom: true,
            content: res.data[0].q + " -**" + res.data[0].a + "**"
        }
    }
}
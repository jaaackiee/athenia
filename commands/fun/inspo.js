const axios = require("axios");
module.exports = {
    callback: async (message, args, text) => {
        const res = await axios.get("https://zenquotes.io/api/random");
        return {
            custom: true,
            content: res.data[0].q + " -**" + res.data[0].a + "**"
        }
    }
}
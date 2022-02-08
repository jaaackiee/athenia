const axios = require("axios");
module.exports = {
    description: "cute cat pictures",
    callback: async (message, args, text) => {
        const res = await axios.get("https://api.thecatapi.com/v1/images/search");
        return {
            custom: true,
            content: res.data[0].url
        }
    }
}
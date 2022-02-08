const axios = require("axios");
module.exports = {
    description: "cute dog pictures",
    callback: async (message, args, text) => {
        const res = await axios.get("https://api.thedogapi.com/v1/images/search");
        return {
            custom: true,
            content: res.data[0].url
        }
    }
}
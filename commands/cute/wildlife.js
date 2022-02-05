const wildlife = require("../../resources/wildlife.json");
module.exports = {
    callback: (message, args, text) => {
        return {
            custom: true,
            content: wildlife[Math.floor(Math.random() * wildlife.length)]
        }
    }
}
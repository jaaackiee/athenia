const wyr = require("../../resources/wyr");
module.exports = {
    callback: (message, args, text) => {
        return {
            custom: true,
            content: wyr[Math.floor(Math.random() * wyr.length)]
        }
    }
}
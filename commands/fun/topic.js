const topics = require("../../resources/topics.json");
module.exports = {
    callback: (message, args, text) => {
        return {
            custom: true,
            content: topics[Math.floor(Math.random() * topics.length)]
        }
    }
}
const coin = require("../../util/economy/coin");
const food = require("../../util/economy/food");
const pet = require("../../util/economy/pet");
const vote = require("../../util/economy/vote");
module.exports = {
    ownerOnly: true,
    callback: (message, args, text) => {
        try {
            eval("(async () => {" + text + "})()");
        } catch (err) {
            return {
                custom: true,
                content: "\`\`\`st\n" + err + "\n\`\`\`"
            }
        }
    }
}
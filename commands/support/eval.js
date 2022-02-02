const coin = require("../../util/economy/coin");
const food = require("../../util/economy/food");
const pet = require("../../util/economy/pet");
const vote = require("../../util/economy/vote");
module.exports = {
    aliases: ["eval"],
    category: "support",
    description: "Executes a string as a line of javascript code.",
    ownerOnly: true,
    callback: async ({text}) => {
        try {
            eval(text);
        } catch (err) {
            return {
                custom: true,
                content: "\`\`\`st\n" + err + "\n\`\`\`"
            }
        }
    }
}
const wildlife = require("../../resources/wildlife.json");
module.exports = {
    aliases: ["wildlife"],
    category: "cute",
    description: "Displays a cute picture of animals.",
    callback: () => {
        return {
            custom: true,
            content: wildlife[Math.floor(Math.random() * wildlife.length)]
        }
    }
}
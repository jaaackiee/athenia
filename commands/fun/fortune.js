const fortunes = require("../../resources/fortunes.json");
module.exports = {
    callback: (message, args, text) => {
        const embed = {
            color: 0x2f3136,
            title: "⸝⸝ Fortune... ⊹˚.⋆",
            description: fortunes[Math.floor(Math.random() * fortunes.length)]
        }

        return {
            custom: true,
            embeds: [embed]
        }
    }
}
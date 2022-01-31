const fortunes = require("../../resources/fortunes.json");
module.exports = {
    aliases: ["fortune"],
    category: "fun",
    description: "Have a fortune cookie!",
    callback: ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        const embed = {
            color: 0x2f3136,
            title: "⸝⸝ Fortune... ⊹˚.⋆",
            description: `${fortunes[Math.floor(Math.random() * fortunes.length)]}`
        }

        return {
            custom: true,
            embeds: [embed]
        }
    }
}
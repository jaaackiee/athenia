const coin = require("../../util/economy/coin");
module.exports = {
    aliases: ["bonus"],
    category: "economy",
    description: "Collect your daily bonus!",
    cooldown: "24h",
    callback: async ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        const amt = Math.floor(Math.random() * 2000) + 1000;
        await coin.addCoins(user.id, amt);

        return {
            custom: true,
            content: `**${message.author.username}** claimed their daily bonus of **${amt.toLocaleString()}** <:starlings:925845621074722836> !`
        }
    }
}
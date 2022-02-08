const coin = require("../../util/economy/coin");
module.exports = {
    cooldown: 24 * 60 * 60,
    callback: async (message, args, text) => {
        const amt = Math.floor(Math.random() * 2000) + 1000;
        const coins = await coin.addCoins(message.author.id, amt);

        return {
            custom: true,
            content: "**" + message.author.username + "** claimed their daily bonus of **" + amt.toLocaleString() + "**<:starlings:925845621074722836>! They now have **" + coins.toLocaleString() + "**<:starlings:925845621074722836>!"
        }
    }
}
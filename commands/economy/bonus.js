const coin = require("../../util/economy/coin");
module.exports = {
    aliases: ["bonus"],
    category: "economy",
    description: "Collect your daily bonus!",
    cooldown: "24h",
    callback: async ({user}) => {
        const amt = Math.floor(Math.random() * 2000) + 1000;
        const coins = await coin.addCoins(user.id, amt);

        return {
            custom: true,
            content: "**" + user.username + "** claimed their daily bonus of **" + amt.toLocaleString() + "** <:starlings:925845621074722836>! They now have **" + coins.toLocaleString() + "** <:starlings:925845621074722836>!"
        }
    }
}
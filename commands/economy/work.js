const coin = require("../../util/economy/coin");
module.exports = {
    cooldown: 3 * 60 * 60,
    callback: async (message, args, text) => {
        const amt = Math.floor(Math.random() * 450) + 300;
        const coins = await coin.addCoins(message.author.id, amt);

        return {
            custom: true,
            content: "**" + message.author.username + "** put in a hard day of work and recieved: **" + amt + "** <:starlings:925845621074722836>!"
        }
    }
}
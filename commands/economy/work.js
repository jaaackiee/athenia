const coin = require("../../util/economy/coin");
module.exports = {
    aliases: ["work"],
    category: "economy",
    description: "Work for more coins.",
    cooldown: "3h",
    callback: async ({user}) => {
        const amt = Math.floor(Math.random() * 450) + 300;
        const coins = await coin.addCoins(user.id, amt);

        return {
            custom: true,
            content: "**" + user.username + "** put in a hard day of work and recieved: **" + amt + "** <:starlings:925845621074722836>!"
        }
    }
}
const findUser = require("../../util/findUser");
const coin = require("../../util/economy/coin");
module.exports = {
    expectedArgs: "<user> <amount>",
    minArgs: 2,
    maxArgs: 2,
    guildOnly: true,
    callback: async (message, args, text) => {
        const target = await findUser(message, args[0]);
        if (!target || target.id === message.author.id) {
            return {
                custom: true,
                content: "Invalid user!"
            }
        }

        const amt = Math.abs(parseInt(args[1]));

        const buyable = await coin.buy(message.author.id, -amt);
        if (!buyable) {
            return {
                custom: true,
                content: "You don't have enough <:starlings:925845621074722836> to buy that!"
            }
        }

        const userCoins = await coin.addCoins(message.author.id, -amt);
        const targetCoins = await coin.addCoins(u.id, amt);

        return {
            custom: true,
            content: "You have given **" + target.username + "** **" + amt + "** <:starlings:925845621074722836>. You now have **" + targetCoins + "** <:starlings:925845621074722836>!"
        }
    }
}
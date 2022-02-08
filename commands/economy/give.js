const findUser = require("../../util/findUser");
const coin = require("../../util/economy/coin");
module.exports = {
    description: "give a user some money",
    expectedArgs: "<user> <amount>",
    minArgs: 2,
    maxArgs: 2,
    guildOnly: true,
    callback: async (message, args, text) => {
        const user = await findUser(message, args[0]);
        if (!user || user.id === message.author.id) {
            return {
                custom: true,
                content: "Invalid user!",
                failed: true
            }
        }

        const amt = Math.abs(parseInt(args[1]));

        const buyable = await coin.buy(message.author.id, -amt);
        if (!buyable) {
            return {
                custom: true,
                content: "You don't have enough <:starlings:925845621074722836> to buy that!",
                failed: true
            }
        }

        const userCoins = await coin.addCoins(message.author.id, -amt);
        await coin.addCoins(user.id, amt);

        return {
            custom: true,
            content: "You have given **" + user.username + "** **" + amt + "**<:starlings:925845621074722836>. You now have **" + userCoins + "**<:starlings:925845621074722836>!"
        }
    }
}
const findUser = require("../../util/findUser");
const coin = require("../../util/economy/coin");
module.exports = {
    aliases: ["give"],
    category: "economy",
    description: "Gift some coins to another user.",
    expectedArgs: "<user> <amount>",
    minArgs: 2,
    maxArgs: 2,
    syntaxError: "Incorrect syntax! Use `{PREFIX}`ping {ARGUMENTS}",
    guildOnly: true,
    callback: async ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        const u = await findUser(message, args[0]);
        if (!u) {
            return {
                custom: true,
                content: "Invalid user!"
            }
        }

        const amt = Math.abs(parseInt(args[1]));

        if (!await coin.buy(user.id, -amt)) {
            return {
                custom: true,
                content: "You do not have the required amount of coins to make that purchase!"
            }
        }

        const bal = await coin.addCoins(user.id, -amt);
        await coin.addCoins(u.id, amt);

        return {
            custom: true,
            content: `You have given **${u.username}** **${amt}** <:starlings:925845621074722836> . You now have **${bal}** <:starlings:925845621074722836> !`
        }
    }
}
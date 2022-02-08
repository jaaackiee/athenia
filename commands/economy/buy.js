const roles = require("../../resources/roles.json");
const coin = require("../../util/economy/coin");
module.exports = {
    description: "buy roles",
    expectedArgs: "<roleName>",
    minArgs: 1,
    guildOnly: true,
    callback: async (message, args, text) => {
        let buyable = false;
        let index;
        for (let i = 0; i < roles.length; i ++) {
            if (roles[i].name === text.toLowerCase()) {
                buyable = true;
                index = i;
                break;
            }
        }

        if (!buyable) {
            return {
                custom: true,
                content: "Invalid role name! Use `.shop` to view the role shop!",
                failed: true
            }
        }

        buyable = await coin.buy(message.author.id, Math.abs(roles[index].price));

        if (!buyable) {
            return {
                custom: true,
                content: "You don't have enough <:starlings:925845621074722836> to buy that!",
                failed: true
            }
        }

        const role = message.guild.roles.cache.find((r) => r.name === text.toLowerCase());
        try {
            message.member.roles.add(role);
        } catch (e) {
            return {
                custom: true,
                content: "\`\`\`st\n" + e + "\n\`\`\`",
                failed: true
            }
        }

        const coins = await coin.addCoins(message.author.id, roles[index].price);

        return {
            custom: true,
            content: "Gave you the **" + roles[index].name + "** role! You have **" + coins.toLocaleString() + "**<:starlings:925845621074722836> remaining!"
        }
    }
}
const roles = require("../../resources/roles.json");
const coin = require("../../util/economy/coin");
module.exports = {
    aliases: ["buy"],
    category: "economy",
    description: "Buy a role from the role shop.",
    expectedArgs: "<roleName>",
    minArgs: 1,
    guildOnly: true,
    callback: async ({guild, user, message, text}) => {
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
                content: "Invalid role name! Use `.shop` to view the role shop!"
            }
        }

        buyable = await coin.buy(user.id, Math.abs(roles[index].price));

        if (!buyable) {
            return {
                custom: true,
                content: "You don't have enough <:starlings:925845621074722836> to buy that!"
            }
        }

        const role = guild.roles.cache.find((r) => r.name === text.toLowerCase());
        try {
            message.member.roles.add(role);
        } catch (e) {
            return {
                custom: true,
                content: "\`\`\`st\n" + e + "\n\`\`\`"
            }
        }

        const coins = await coin.addCoins(user.id, roles[index].price);

        return {
            custom: true,
            content: "Gave you the **" + roles[index].name + "** role! You have **" + coins.toLocaleString() + "** <:starlings:925845621074722836> remaining!"
        }
    }
}
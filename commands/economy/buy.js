const roles = require("../../resources/roles.json");
const coin = require("../../util/economy/coin");
module.exports = {
    aliases: ["buy"],
    category: "economy",
    description: "Buy a role from the role shop.",
    expectedArgs: "<roleName>",
    minArgs: 1,
    guildOnly: true,
    callback: async ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        let buyable = false;
        let index;
        for (let i = 0; i < roles.length; i ++) {
            if (roles[i].name === text.toLowerCase()) {
                buyable = true;
                index = i;
            }
        }

        if (!buyable) {
            return {
                custom: true,
                content: "Invalid role name! Use `.shop` to view the role shop!"
            }
        }

        if (!(await coin.buy(user.id, Math.abs(roles[index].price)))) {
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

        const bal = await coin.addCoins(user.id, roles[index].price);

        return {
            custom: true,
            content: "Gave you the **" + roles[index].name + "** role! You have **" + bal.toLocaleString() + "** <:starlings:925845621074722836> remaining!"
        }
    }
}
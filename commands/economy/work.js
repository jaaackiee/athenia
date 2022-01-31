const coin = require("../../util/economy/coin");
module.exports = {
    aliases: ["work"],
    category: "economy",
    description: "Work for more coins.",
    cooldown: "3h",
    callback: async ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        const amt = Math.floor(Math.random() * 450) + 300;
        await coin.addCoins(user.id, amt);

        return {
            custom: true,
            content: `**${message.author.username}** put in a hard day of work and recieved: **${amt}** <:starlings:925845621074722836> !`
        }
    }
}
const vote = require("../../util/economy/vote");
module.exports = {
    cooldown: 12 * 60 * 60,
    callback: async (message, args, text) => {
        const votes = await vote.addVotes(message.author.id, 1);

        return {
            custom: true,
            content: "Added **1** <:moonshards:925845639651270656> to your balance. You now have **" + votes + "** <:moonshards:925845639651270656>"
        }
    }
}
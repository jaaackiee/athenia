const vote = require("../../util/economy/vote");
module.exports = {
    aliases: ["pancake"],
    description: "hi",
    category: "economy",
    cooldown: "12h",
    callback: async ({user}) => {
        const votes = await vote.addVotes(user.id, 1);

        return {
            custom: true,
            content: "Added **1** <:moonshards:925845639651270656> to your balance. You now have **" + votes + "** <:moonshards:925845639651270656>"
        }
    }
}
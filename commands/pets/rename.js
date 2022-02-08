const vote = require("../../util/economy/vote");
const pet = require("../../util/economy/pet");
module.exports = {
    description: "rename your pet",
    expectedArgs: "<petName>",
    minArgs: 1,
    callback: async (message, args, text) => {
        const votes = await vote.getVotes(message.author.id);
        if (votes < 2) {
            return {
                custom: true,
                content: "You don't have enough <:moonshards:925845639651270656> to rename your pet!",
                failed: true
            }
        }

        await vote.addVotes(message.author.id, -2);

        const petName = await pet.changePetName(message.author.id, text);
        return {
            custom: true,
            content: "Your pet is now named **" + petName + "**!"
        }
    }
}
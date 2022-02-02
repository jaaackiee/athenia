const vote = require("../../util/economy/vote");
const pet = require("../../util/economy/pet");
module.exports = {
    aliases: ["rename"],
    category: "pets",
    description: "Give your pet a new name!",
    expectedArgs: "<petName>",
    minArgs: 1,
    callback: async ({user, text}) => {
        let votes = await vote.getVotes(user.id);
        if (votes < 2) {
            return {
                custom: true,
                content: "You don't have enough <:moonshards:925845639651270656> to rename your pet!"
            }
        }

        votes = await vote.addVotes(user.id, -2);

        const petName = await pet.changePetName(user.id, text);
        return {
            custom: true,
            content: "Your pet is now named **" + petName + "**!"
        }
    }
}
const pet = require("../../util/economy/pet");
const vote = require("../../util/economy/vote");
module.exports = {
    cooldown: 60 * 60,
    callback: async (message, args, text) => {
        const petNum = await pet.getPet(message.author.id);
        if (petNum === -1) {
            return {
                custom: true,
                content: "You don't have a pet! Use `.petshop` to adopt one!",
                failed: true
            }
        }

        let votes = await vote.getVotes(message.author.id);
        if (votes < 5) {
            return {
                custom: true,
                content: "You don't have enough <:moonshards:925845639651270656> to hug your pet!",
                failed: true
            }
        }

        votes = await vote.addVotes(message.author.id, -5);

        let petHealth = Math.floor(Math.random() * 10) + 5;
        petHealth = await pet.addPetHealth(message.author.id, petHealth);

        const petName = await pet.getPetName(message.author.id);
        return {
            custom: true,
            content: "You hugged **" + petName + "**, healing them for **" + petHealth + "** <:heart1:852715565910196235>!"
        }
    }
}
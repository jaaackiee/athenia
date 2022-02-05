const pet = require("../../util/economy/pet");
const vote = require("../../util/economy/vote");
module.exports = {
    cooldown: 24 * 60 * 60,
    callback: async (message, args, text) => {
        const petNum = await pet.getPet(message.author.id);
        if (petNum === -1) {
            return {
                custom: true,
                content: "You don't have a pet! Use `.petshop` to adopt one!"
            }
        }

        let votes = await vote.getVotes(message.author.id);
        if (votes < 10) {
            return {
                custom: true,
                content: "You don't have enough <:moonshards:925845639651270656> to regen your pet!"
            }
        }

        votes = await vote.addVotes(message.author.id, -10);

        const health = Math.floor(Math.random() * 30) + 15;
        const petHealth = await pet.addPetHealth(message.author.id, health);

        const petName = await pet.getPetName(message.author.id);
        
        return {
            custom: true,
            content: "You healed **" + petName + "** for **" + health + "** <:heart1:852715565910196235>!"
        }
    }
}
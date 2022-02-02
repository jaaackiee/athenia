const pet = require("../../util/economy/pet");
const vote = require("../../util/economy/vote");
module.exports = {
    aliases: ["regen"],
    category: "pets",
    description: "Heal your pet,",
    cooldown: "24h",
    callback: async ({user}) => {
        const petNum = await pet.getPet(user.id);
        if (petNum === -1) {
            return {
                custom: true,
                content: "You don't have a pet! Use `.petshop` to adopt one!"
            }
        }

        let votes = await vote.getVotes(user.id);
        if (votes < 10) {
            return {
                custom: true,
                content: "You don't have enough <:moonshards:925845639651270656> to regen your pet!"
            }
        }

        votes = await vote.addVotes(user.id, -10);

        const health = Math.floor(Math.random() * 30) + 15;
        const petHealth = await pet.addPetHealth(user.id, health);

        const petName = await pet.getPetName(user.id);
        
        return {
            custom: true,
            content: "You healed **" + petName + "** for **" + health + "** <:heart1:852715565910196235>!"
        }
    }
}
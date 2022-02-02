const pet = require("../../util/economy/pet");
const vote = require("../../util/economy/vote");
module.exports = {
    aliases: ["hug"],
    category: "pets",
    description: "Hug your pet.",
    // cooldown: "??",
    callback: async ({user}) => {
        const petNum = await pet.getPet(user.id);
        if (petNum === -1) {
            return {
                custom: true,
                content: "You don't have a pet! Use `.petshop` to adopt one!"
            }
        }

        let votes = await vote.getVotes(user.id);
        if (votes < 5) {
            return {
                custom: true,
                content: "You don't have enough <:moonshards:925845639651270656> to hug your pet!"
            }
        }

        votes = await vote.addVotes(user.id, -5);

        let petHealth = Math.floor(Math.random() * 10) + 5;
        petHealth = await pet.addPetHealth(user.id, petHealth);

        const petName = await pet.getPetName(user.id);
        return {
            custom: true,
            content: "You hugged **" + petName + "**, healing them for **" + petHealth + "** <:heart1:852715565910196235>!"
        }
    }
}
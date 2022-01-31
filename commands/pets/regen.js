const pet = require("../../util/economy/pet");
const vote = require("../../util/economy/vote");
module.exports = {
    aliases: ["regen"],
    category: "pets",
    description: "Heal your pet,",
    cooldown: "24h",
    callback: async ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        const petNum = await pet.getPet(user.id);
        if (petNum === -1) {
            return {
                custom: true,
                content: "You don't have a pet! Use `.petshop` to adopt one!"
            }
        }

        const votes = await vote.getVotes(user.id);
        if (votes < 10) {
            return {
                custom: true,
                content: "You don't have enough <:moonshards:925845639651270656> to regen your pet!"
            }
        }

        await vote.addVotes(user.id, -10);

        const petHealth = Math.floor(Math.random() * 30) + 15;
        await pet.addPetHealth(user.id, petHealth);

        const petName = await pet.getPetName(user.id);
        return {
            custom: true,
            content: "You healed **" + petName + "** for **" + petHealth + "** <:heart1:852715565910196235>!"
        }
    }
}
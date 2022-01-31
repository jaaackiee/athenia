const findUser = require("../../util/findUser");
const pet = require("../../util/economy/pet");
const food = require("../../util/economy/food");
module.exports = {
    aliases: ["playtime"],
    category: "pets",
    description: "Have a playdate with a friend's pet!",
    expectedArgs: "<user>",
    minArgs: 1,
    cooldown: "3h",
    guildOnly: true,
    callback: async ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        const target = findUser(message, args[0]);
        if (!target) {
            return {
                custom: true,
                content: "Invalid user!"
            }
        }

        const p1PetNum = await pet.getPet(user.id);
        const p2PetNum = await pet.getPet(target.id);
        if (p1PetNum === p2PetNum) {
            return {
                custom: true,
                content: "You can't have a playdate with yourself!"
            }
        }

        if (p1PetNum === -1) {
            return {
                custom: true,
                content: "You don't have a pet! Use `.petshop` to adopt one!"
            }
        }
        if (p2PetNum === -1) {
            return {
                custom: true,
                content: "**" + target.username + "** doesn't have a pet!"
            }
        }

        const bal = await food.getFood(user.id);
        if (bal < 20) {
            return {
                custom: true,
                content: "You don't have enough food for a playdate!"
            }
        }

        const cost = Math.floor(Math.random() * 17) + 3;
        await food.addFood(user.id, -cost);

        const petHealth = Math.floor(Math.random() * 10) + 5;
        await pet.addPetHealth(user.id, petHealth);
        await pet.addPetHealth(target.id, petHealth);

        const p1PetName = await pet.getPetName(user.id);
        const p2PetName = await pet.getPetName(target.id);

        return {
            custom: true,
            content: "**" + p1PetName + "** and **" + p2PetName + "** had a playdate together! They ate **" + cost + "** <:food:925845676464676875>, and gained **" + petHealth + "** <:heart1:852715565910196235>"
        }
    }
}
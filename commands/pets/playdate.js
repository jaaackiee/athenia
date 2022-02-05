const findUser = require("../../util/findUser");
const pet = require("../../util/economy/pet");
const food = require("../../util/economy/food");
module.exports = {
    expectedArgs: "<user>",
    minArgs: 1,
    cooldown: 3 * 60 * 60,
    guildOnly: true,
    callback: async (message, args, text) => {
        const user = await findUser(message, args[0]);
        if (!user) {
            return {
                custom: true,
                content: "Invalid user!",
                failed: true
            }
        }

        if (user.id === message.author.id) {
            return {
                custom: true,
                content: "You can't have a playdate with yourself!",
                failed: true
            }
        }

        const p1PetNum = await pet.getPet(message.author.id);
        const p2PetNum = await pet.getPet(user.id);

        if (p1PetNum === -1) {
            return {
                custom: true,
                content: "You don't have a pet! Use `.petshop` to adopt one!",
                failed: true
            }
        }
        if (p2PetNum === -1) {
            return {
                custom: true,
                content: "**" + user.username + "** doesn't have a pet!",
                failed: true
            }
        }

        const foods = await food.getFood(message.author.id);
        if (foods < 20) {
            return {
                custom: true,
                content: "You don't have enough food for a playdate!",
                failed: true
            }
        }

        const cost = Math.floor(Math.random() * 17) + 3;
        await food.addFood(message.author.id, -cost);

        const petHealth = Math.floor(Math.random() * 10) + 5;
        await pet.addPetHealth(message.author.id, petHealth);
        await pet.addPetHealth(user.id, petHealth);

        const p1PetName = await pet.getPetName(message.author.id);
        const p2PetName = await pet.getPetName(user.id);

        return {
            custom: true,
            content: "**" + p1PetName + "** and **" + p2PetName + "** had a playdate together! They ate **" + cost + "** <:food:925845676464676875>, and gained **" + petHealth + "** <:heart1:852715565910196235>"
        }
    }
}
const pet = require("../../util/economy/pet");
const food = require("../../util/economy/food");
module.exports = {
    callback: async (message, args, text) => {
        const petNum = await pet.getPet(message.author.id);
        if (petNum === -1) {
            return {
                custom: true,
                content: "You don't have a pet! Use `.petshop` to adopt one!",
                failed: true
            }
        }

        const petName = await pet.getPetName(message.author.id);
        let foods = await food.getFood(message.author.id);
        if (foods < 5) {
            return {
                custom: true,
                content: "You don't have enough food to feed your pet!",
                failed: true
            }
        }

        const cost = Math.floor(Math.random() * 9) + 1;
        foods = await food.addFood(message.author.id, -cost);

        const health = Math.floor(Math.random() * 2) + 3;
        await pet.addPetHealth(message.author.id, health);

        return {
            custom: true,
            content: "You feed **" + petName + "** **" + cost + "** <:food:925845676464676875>, healing them for **" + health + "** <:heart1:852715565910196235>"
        }
    }
}
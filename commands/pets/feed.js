const pet = require("../../util/economy/pet");
const food = require("../../util/economy/food");
module.exports = {
    aliases: ["feed"],
    category: "pets",
    description: "Feed your pets to keep them alive.",
    callback: async ({user}) => {
        const petNum = await pet.getPet(user.id);
        if (petNum === -1) {
            return {
                custom: true,
                content: "You don't have a pet! Use `.petshop` to adopt one!"
            }
        }

        const petName = await pet.getPetName(user.id);
        let oods = await food.getFood(user.id);
        if (foods < 5) {
            return {
                custom: true,
                content: "You don't have enough food to feed **" + petName + "**!"
            }
        }

        const cost = Math.floor(Math.random() * 9) + 1;
        foods = await food.addFood(user.id, -cost);

        const health = Math.floor(Math.random() * 2) + 3;
        await pet.addPetHealth(user.id, health);

        return {
            custom: true,
            content: "You feed **" + petName + "** **" + cost + "** <:food:925845676464676875>, healing them for **" + health + "** <:heart1:852715565910196235>"
        }
    }
}
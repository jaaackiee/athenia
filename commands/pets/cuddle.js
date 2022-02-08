const food = require("../../util/economy/food");
const pet = require("../../util/economy/pet");
module.exports = {
    description: "cuddle your pet",
    cooldown: 6 * 60 * 60,
    callback: async (message, args, text) => {
        const petNum = await pet.getPet(message.author.id);
        if (petNum === -1) {
            return {
                custom: true,
                content: "You don't have a pet! Use `.petshop` to adopt one!",
                failed: true
            }
        }

        let foods = await food.getFood(message.author.id);
        if (foods < 5) {
            return {
                custom: true,
                content: "You don't have enough food to cuddle!",
                failed: true
            }
        }

        const cost = Math.floor(Math.random() * 5) + 3;
        foods = await food.addFood(message.author.id, -cost);

        const health = Math.floor(Math.random() * 2) + 3;
        await pet.addPetHealth(message.author.id, health);

        const name = await pet.getPetName(message.author.id);
        const embed = {
            color: 0x2f3136,
            description: "You cuddle with **" + name + "**! They gain **" + health + "** <:heart1:852715565910196235>!",
            image: {
                url: "attachment://" + petNum + "-2.png"
            }
        }
        
        return {
            custom: true,
            embeds: [embed],
            files: [
                {
                    attachment: "images/pets/" + petNum + "-2.png",
                    name: petNum + "-2.png"
                }
            ]
        }
    }
}
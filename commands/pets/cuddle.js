const food = require("../../util/economy/food");
const pet = require("../../util/economy/pet");
module.exports = {
    aliases: ["cuddle"],
    category: "pets",
    description: "Give your pet a hug.",
    cooldown: "6h",
    callback: async ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        const petNum = await pet.getPet(user.id);
        if (petNum === -1) {
            return {
                custom: true,
                content: "You don't have a pet! Use `.petshop` to adopt one!"
            }
        }

        const bal = await food.getFood(user.id);
        if (bal < 5) {
            return {
                custom: true,
                content: "You don't have enough food to cuddle!"
            }
        }

        const cost = Math.floor(Math.random() * 5) + 3;
        let hi = await food.addFood(message.author.id, -cost);

        const health = Math.floor(Math.random() * 2) + 3;
        hi = await pet.addPetHealth(message.author.id, health);

        const name = await pet.getPetName(message.author.id);
        const embed = {
            color: 0x2f3136,
            description: `You cuddle with **${name}**! They gain **${health}** health!`,
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
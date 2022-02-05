const pet = require("../../util/economy/pet");
module.exports = {
    cooldown: 30 * 60,
    callback: async (message, args, text) => {
        const petNum = await pet.getPet(message.author.id);
        if (petNum === -1) {
            return {
                custom: true,
                content: "You don't have a pet! Use `.petshop` to adopt one!",
                failed: true
            }
        }

        const petHealth = Math.floor(Math.random() * 2) + 1;
        await pet.addPetHealth(message.author.id, petHealth);

        const petName = await pet.getPetName(message.author.id);

        const plays = [
            "You bounce a ball back and forth with **" + petName + "**!",
            "You cuddle up with **" + petName + "** and watch some movies!",
            "You pet **" + petName + "**! They snuggle in closer."
        ]

        const embed = {
            color: 0x2f3136,
            title: plays[Math.floor(Math.random() * 2)],
            description: "Healed **" + petName + "** for **" + petHealth + "** <:heart1:852715565910196235>!",
            image: {
                url: "attachment://" + petNum + "-3.png"
            }
        }

        return {
            custom: true,
            embeds: [embed],
            files: [
                {
                    attachment: "images/pets/" + petNum + "-3.png",
                    name: petNum + "-3.png"
                }
            ]
        }
    }
}
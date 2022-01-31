const pet = require("../../util/economy/pet");
module.exports = {
    aliases: ["play"],
    category: "pets",
    description: "Play with your pet!",
    cooldown: "60s",
    callback: async ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        const petNum = await pet.getPet(user.id);
        if (petNum === -1) {
            return {
                custom: true,
                content: "You don't have a pet! Use `.petshop` to adopt one!"
            }
        }

        const petHealth = Math.floor(Math.random() * 2) + 1;
        await pet.addPetHealth(user.id, petHealth);

        const petName = await pet.getPetName(user.id);

        const plays = [
            "You bounce a ball back and forth with **" + petName + "**!",
            "You cuddle up with **" + petName + "** and watch some movies!",
            "You pet **" + petName + "**! They snuggle in closer."
        ]

        const embed = {
            color: 0x2f3136,
            title: `${plays[Math.floor(Math.random() * 2)]}`,
            description: "Healed **" + petName + "** for **" + petHealth + "** <:heart1:852715565910196235>!"
        }

        return {
            custom: true,
            embeds: [embed]
        }
    }
}
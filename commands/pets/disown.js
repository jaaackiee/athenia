const pet = require("../../util/economy/pet");
module.exports = {
    aliases: ["disown"],
    category: "pets",
    description: "Kills your pet. Irreversible.",
    cooldown: "1h",
    callback: async ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        const name = await pet.getPetName(user.id);
        const petNum = await pet.getPet(user.id);

        if (petNum < 0) {
            return {
                custom: true,
                content: "You don't have a pet to disown!"
            }
        }

        const hi = await pet.givePet(user.id, -1);

        const embed = {
            color: 0x2f3136,
            title: "You put **" + name + "** back up for adoption!",
            image: {
                url: "attachment://" + petNum + "-4.png"
            }
        }

        return {
            custom: true,
            embeds: [embed],
            files: [
                {
                    attachment: "images/pets/" + petNum + "-4.png",
                    name: petNum + "-4.png"
                }
            ]
        }
    }

}
const pet = require("../../util/economy/pet");
module.exports = {
    callback: async (message, args, text) => {
        const petName = await pet.getPetName(message.author.id);
        const petNum = await pet.getPet(message.author.id);

        if (petNum < 0) {
            return {
                custom: true,
                content: "You don't have a pet to disown!"
            }
        }
        
        await pet.givePet(message.author.id, -1);

        const embed = {
            color: 0x2f3136,
            title: "You put **" + petName + "** back up for adoption!",
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
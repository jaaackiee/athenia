const findUser = require("../../util/findUser");
const pet = require("../../util/economy/pet");
const pets = require("../../resources/pets.json");
module.exports = {
    aliases: ["givepet"],
    category: "pets",
    description: "Give a pet to a user for free.",
    expectedArgs: "<petId> [user]",
    minArgs: 1,
    maxArgs: 2,
    permissions: ["ADMINISTRATOR"],
    hidden: true,
    guildOnly: true,
    callback: async ({message, args}) => {
        const user = await findUser(message, args[1]);
        if (!user) {
            return {
                custom: true,
                content: "Invalid user!"
            }
        }

        if (args[0] < -1 || args[0] > 7 || typeof(args[0]) !== "number") {
            return {
                custom: true,
                content: "Invalid number!"
            }
        }

        const petNum = await pet.getPet(user.id);
        if (args[0] === "-1" && petNum === -1) {
            return {
                custom: true,
                content: "That user doesn't have a pet!"
            }
        }

        if (args[0] === "-1") {
            const petName = await pet.getPetName(user.id);
            await pet.givePet(user.id, -1);

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

        const p = await pet.givePet(user.id, parseInt(args[0]));
        await pet.changePetName(user.id, pets[petNum].name);

        return {
            custom: true,
            content: "Gave **" + user.tag + "** a new **" + pets[p].name + " " + pets[p].emoji + "**!",
        }
    }
}
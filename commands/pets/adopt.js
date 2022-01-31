const coin = require("../../util/economy/coin");
const pets = require("../../resources/pets.json");
const pet = require("../../util/economy/pet");
module.exports = {
    aliases: ["adopt"],
    category: "pets",
    description: "Adopt a new friend!",
    expectedArgs: "<petID>",
    minArgs: 1,
    maxArgs: 1,
    syntaxError: "Incorrect syntax! Use `{PREFIX}adopt {ARGUMENTS}`",
    //cooldown: "1h",
    callback: async ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        const petNum = parseInt(args[0]) - 1;
        if (petNum < 0 || petNum > 7 || typeof(petNum) !== "number") {
            return {
                custom: true,
                content: "Invalid number!"
            }
        }

        const canBuy = await coin.buy(message.author.id, Math.abs(pets[petNum].price));
        const embed = {
            color: 0x2f3136,
            title: "୨୧ Pet Adoption ⋆˚.",
            description: `Congratulations! Say hello to your new friend, **${pets[petNum].name}**!`,
            image: {
                url: "attachment://" + petNum + "-0.png"
            }
        }

        if (!canBuy) {
            return {
                custom: true,
                content: "You don't have enough <:starlings:925845621074722836> to adopt this pet."
            }
        }

        await coin.addCoins(message.author.id, pets[petNum].price);
        await pet.givePet(message.author.id, petNum);
        await pet.changePetName(message.author.id, pets[petNum].name);

        return {
            custom: true,
            embeds: [embed],
            files: [
                {
                    name: petNum + "-0.png",
                    attachment: "images/pets/" + petNum + "-0.png"
                }
            ]
        }
    }
}
const coin = require("../../util/economy/coin");
const findUser = require("../../util/findUser");
const pet = require("../../util/economy/pet");
const food = require("../../util/economy/food");
const vote = require("../../util/economy/vote");
const pets = require("../../resources/pets.json");
module.exports = {
    aliases: ["bal", "balance"],
    category: "economy",
    description: "Displays your balance and pet information.",
    expectedArgs: "[user]",
    maxArgs: 1,
    callback: async ({message, args}) => {
        const user = await findUser(message, args[0]);
        if (!user) {
            return "Invalid user.";
        }

        const coins = await coin.getCoins(user.id);
        const votes = await vote.getVotes(user.id);
        const foods = await food.getFood(user.id);
        const petNum = await pet.getPet(user.id);
        const petHealth = await pet.getPetHealth(user.id);
        const petName = await pet.getPetName(user.id);

        const img = Math.floor(Math.random() * 3);

        let emoji;
        if (petHealth >= 71) {
            emoji = "<:heart1:852715565910196235>";
        } else if (petHealth >= 41 && petHealth <= 70) {
            emoji = "<:heart2:852715572961869866>";
        } else if (petHealth >= 11 && petHealth <= 40) {
            emoji = "<:heart3:852715579230912512>";
        } else {
            emoji = "<:heart4:852715585061388299>";
        }

        if (petNum > -1 && petHealth < 50) {
            const embed = {
                color: 0x2f3136,
                author: {
                    name: user.tag,
                    iconURL: user.displayAvatarURL({ dynamic: true })
                },
                fields: [
                    {
                        name: "Pet",
                        value: pets[petNum].emoji + " - " + petName + "\n> " + emoji + " " + petHealth,
                        inline: true
                    },
                    {
                        name: "Balance",
                        value: coins.toLocaleString() + " <:starlings:925845621074722836> \n" + foods.toLocaleString() + " <:food:925845676464676875> \n" + votes.toLocaleString() + " <:moonshards:925845639651270656>",
                        inline: true
                    }
                ],
                thumbnail: {
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
        } else if (petNum > -1 && petHealth >= 50) {
            const embed = {
                color: 0x2f3136,
                author: {
                    name: user.tag,
                    iconURL: user.displayAvatarURL({ dynamic: true })
                },
                fields: [
                    {
                        name: "Pet",
                        value: pets[petNum].emoji + " - " + petName + "\n> " + emoji + " " + petHealth,
                        inline: true
                    },
                    {
                        name: "Balance",
                        value: coins.toLocaleString() + " <:starlings:925845621074722836> \n" + foods.toLocaleString() + " <:food:925845676464676875> \n" + votes.toLocaleString() + " <:moonshards:925845639651270656>",
                        inline: true
                    }
                ],
                thumbnail: {
                    url: "attachment://" + petNum + "-" + img + ".png"
                }
            }
            return {
                custom: true,
                embeds: [embed],
                files: [
                    {
                        attachment: "images/pets/" + petNum + "-" + img + ".png",
                        name: petNum + "-" + img + ".png"
                    }
                ]
            }
        } else {
           const embed = {
                color: 0x2f3136,
                author: {
                    name: user.tag,
                    iconURL: user.displayAvatarURL({ dynamic: true })
                },
                fields: [
                    {
                        name: "Pet",
                        value: user.username + " has no pet!",
                        inline: true
                    },
                    {
                        name: "Balance",
                        value: coins.toLocaleString() + " <:starlings:925845621074722836> \n" + votes.toLocaleString() + " <:moonshards:925845639651270656>",
                        inline: true
                    }
                ]
            }
            return {
                custom: true,
                embeds: [embed]
            }
        }
    }
}
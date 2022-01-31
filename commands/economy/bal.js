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
    syntaxError: "Incorrect syntax! Use `{PREFIX}`bal {ARGUMENTS}",
    callback: async ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        const u = await findUser(message, args[0]);

        if (!u) {
            return "Invalid user.";
        }
        const coinAmt = await coin.getCoins(u.id);
        const voteAmt = await vote.getVotes(u.id);
        const foodAmt = await food.getFood(u.id);
        const petNum = await pet.getPet(u.id);
        const petHealth = await pet.getPetHealth(u.id);

        const n = Math.floor(Math.random() * 3);

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
            const petName = await pet.getPetName(u.id);
            const embed = {
                color: 0x2f3136,
                author: {
                    name: u.tag,
                    iconURL: u.displayAvatarURL({ dynamic: true })
                },
                fields: [
                    {
                        name: "Pet",
                        value: `${pets[petNum].emoji} - ${petName}\n> ${emoji} ${petHealth}`,
                        inline: true
                    },
                    {
                        name: "Balance",
                        value: `${coinAmt.toLocaleString()} <:starlings:925845621074722836> \n${foodAmt.toLocaleString()} <:food:925845676464676875> \n${voteAmt.toLocaleString()} <:moonshards:925845639651270656>`,
                        inline: true
                    }
                ],
                thumbnail: {
                    url: `attachment://${petNum}-4.png`
                }
            }

            return {
                custom: true,
                embeds: [embed],
                files: [
                    {
                        attachment: `images/pets/${petNum}-4.png`,
                        name: `${petNum}-4.png`
                    }
                ]
            }
        } else if (petNum > -1 && petHealth >= 50) {
            const petName = await pet.getPetName(u.id);
            const embed = {
                color: 0x2f3136,
                author: {
                    name: u.tag,
                    iconURL: u.displayAvatarURL({ dynamic: true })
                },
                fields: [
                    {
                        name: "Pet",
                        value: `${pets[petNum].emoji} - ${petName}\n> ${emoji} ${petHealth}`,
                        inline: true
                    },
                    {
                        name: "Balance",
                        value: `${coinAmt.toLocaleString()} <:starlings:925845621074722836> \n${foodAmt.toLocaleString()} <:food:925845676464676875> \n${voteAmt.toLocaleString()} <:moonshards:925845639651270656>`,
                        inline: true
                    }
                ],
                thumbnail: {
                    url: `attachment://${petNum}-${n}.png`
                }
            }
            return {
                custom: true,
                embeds: [embed],
                files: [
                    {
                        attachment: `images/pets/${petNum}-${n}.png`,
                        name: `${petNum}-${n}.png`
                    }
                ]
            }
        } else {
           const embed = {
                color: 0x2f3136,
                author: {
                    name: u.tag,
                    iconURL: u.displayAvatarURL({ dynamic: true })
                },
                fields: [
                    {
                        name: "Pet",
                        value: `${u.username} has no pet!`,
                        inline: true
                    },
                    {
                        name: "Balance",
                        value: `${coinAmt.toLocaleString()} <:starlings:925845621074722836> \n${voteAmt.toLocaleString()} <:moonshards:925845639651270656>`,
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
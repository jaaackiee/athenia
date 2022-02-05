/**
 * Create a message that allows users to earn money by picking it up: `.pick`
 */

const coin = require("../util/economy/coin");
module.exports = (client) => {
    client.on("messageCreate", (message) => {
        const res = [];
        const chance = Math.floor(Math.random() * 300) + 1; // 1/300 chance of triggering the event
        if (chance !== 250 || message.channel.id !== "798404804263018507") return;

        const embed = {
            color: 0x2f3136,
            description: "Someone dropped some <:starlings:925845621074722836>! Say `.pick` to pick it up!"
        }
        message.channel.send({ embed })
            .then((msg) => {
                setTimeout(function() {
                    msg.delete();
                }, 15000);
            });

        const filter = (msg) => !msg.author.bot && msg.content.toLowerCase() === ".pick";
        const collector = message.channel.createMessageCollector(filter, { time: 10000 });

        collector.on("collect", async (msg) => {
            msg.delete();
            if (res.includes(msg.author.id)) {
                const pickedEmbed = {
                    color: 0x2f3136,
                    description: "**" + msg.author.id + "** tried to pick, but they already did!"
                }

                message.channel.send({
                    custom: true,
                    embeds: [pickedEmbed]
                })
                    .then((msg) => {
                        setTimeout(function() {
                            msg.delete();
                        }, 15000);
                    });
                return;
            }
            res.push(msg.author.id);

            const amt = Math.floor(Math.random() * 300) + 200;
            await coin.addCoins(msg.author.id, amt);

            const pickedEmbed = {
                color: 0x2f3136,
                description: "**" + m.author.username + "** picked **" + amt + "** <:starlings:925845621074722836>!"
            }

            message.channel.send({
                custom: true,
                embeds: [pickedEmbed]
            })
                .then((msg) => {
                    setTimeout(function() {
                        msg.delete();
                    }, 15000);
                });
        });
    });
}
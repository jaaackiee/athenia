/**
 * Create a message that allows users to earn money by picking it up: `.pick`
 */

const coin = require("../util/coin");
module.exports = (client, instance) => {
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

        collector.on("collect", (m) => {
            m.delete();
            if (res.includes(m.author.id)) {
                const p = {
                    color: 0x2f3136,
                    description: `**${m.author.username}** tried to pick, but they already did!`
                }
                return message.channel.send({ embed: p })
                    .then((msg) => {
                        setTimeout(function() {
                            msg.delete();
                        }, 15000);
                    });
            }
            res.push(m.author.id);

            const amt = Math.floor(Math.random() * 300) + 200;
            await coin.addCoins(m.author.id, amt);

            const a = {
                color: 0x2f3136,
                description: `**${m.author.username}** picked **${amt}** <:coffee1:829257191739228181>!`
            }
            message.channel.send({ embed: a })
                .then((msg) => {
                    setTimeout(function() {
                        msg.delete();
                    }, 15000);
                });
        });
    });
}
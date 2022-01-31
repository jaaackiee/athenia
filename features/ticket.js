module.exports = async (client, instance) => {
    client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.channel.id !== "829838297374916670") return;
        if (reaction.emoji.id !== "827391670030434335") return;
        if (user.bot) return;

        const msg = await reaction.message.channel.messages.fetch(reaction.message.id);
        msg.reactions.resolve(reaction.emoji.id).users.remove(user);

        const cooldown = client.channels.cache.find((c) => c.topic === user.id);
        if (cooldown) {
            return message.author.send("You can only have one ticket open at a time!");
        }

        const embed = {
            color: 0x2f3136,
            title: "⸝⸝ Ticket System... ⊹˚.⋆",
            description: "☕ **If you have questions or need help**... \n> ・Ping any online staff!\n⠀\n🥞 **If you need to report someone**... \n> ・Ping any online staff!\n⠀\n🌿 **If you need to appeal a punishment**... \n> ・Ping any online admin!\n \n🥛 **If you want to become a pm or am**... \n> ・Ping any online admin!\n \n🧸 **If you need booster perks**... \n> ・Ping the owner!",
            footer: {
                text: "Use .close to close the ticket!"
            }
        }

        reaction.message.guild.channels.create(user.username.toLowerCase() + "-" + user.discriminator, {
            parent: "830301022190174228",
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: reaction.message.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: "741553649804902450",
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "688964711366000668",
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "804996142462795807",
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        })
            .then((chnl) => chnl.send(`・✰﹕${user}... Hello! Please read the info below. ⊹˚.⋆`, { embed }) && chnl.setTopic(user.id))
            .catch((e) => console.error(e));
    });

    client.on("message", (message) => {
        if (message.channel.id !== "829838297374916670") return;

        message.react("827391670030434335");
    });
}
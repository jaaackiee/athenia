module.exports = {
    aliases: ["confess"],
    category: "support",
    description: "Make a private confession",
    expectedArgs: "<confession>",
    minArgs: 1,
    callback: async ({user, message, text, client}) => {
        // const channel = client.channels.cache.get("798406796518752266");
        const channel = client.channels.cache.get("869889176441593876");
        const embed = {
            color: 0x2f3136,
            title: "⸝⸝ Confession... ⊹˚.⋆.",
            description: text,
            footer: {
                text: "Type '.confess <confession>' to confess."
            }
        }
        channel.send({
            custom: true,
            embeds: [embed]
        });

        // const privChannel = client.channels.cache.get("827374551708598302");
        const privChannel = client.channels.cache.get("869889176441593876");
        privChannel.send({
            custom: true,
            content: user.tag + " - (" + user.id + ") just said **" + text + "**"
        });


        if (message.channel.type !== "dm") {
            await message.delete();
        }
        
        return {
            custom: true,
            content: `Confession sent! ${channel}`,
        }
    }
}
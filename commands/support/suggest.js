module.exports = {
    expectedArgs: "<suggestion>",
    minArgs: 1,
    callback: (message, args, text) => {
        const embed = {
            color: 0x2f3136,
            title: "⸝⸝ Suggestion... ⊹˚.⋆",
            description: text,
            footer: {
                text: "Suggestion by " + message.author.tag
            }
        }

        // const privChannel = message.client.channels.cache.get("829464451798269982");
        const privChannel = message.client.channels.cache.get("869889176441593876");
        privChannel.send({
            custom: true,
            embeds: [embed]
        });

        if (channel.type !== "dm") {
            message.delete();
            return;
        }
        
        return {
            custom: true,
            content: "Thank you for the suggestion!"
        }
    }
}
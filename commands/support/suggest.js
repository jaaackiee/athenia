module.exports = {
    aliases: ["suggest"],
    category: "support",
    description: "Make a private suggestion",
    expectedArgs: "<suggestion>",
    minArgs: 1,
    syntaxError: "Incorrect syntax! Use `/suggest {ARGUMENTS}`",
    cooldown: "1h",
    callback: ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        const embed = {
            color: 0x2f3136,
            title: "⸝⸝ Suggestion... ⊹˚.⋆",
            description: text,
            footer: {
                text: `Suggestion by ${user}`
            }
        }
        // const priv = message.client.channels.cache.get("829464451798269982");
        const priv = message.client.channels.cache.get("869889176441593876");
        priv.send({
            custom: true,
            embeds: [embed]
        });

        if (message && channel.type !== "dm") {
            message.delete();
            return;
        } else if (message) {
            return {
                custom: true,
                content: "Thank you for the suggestion!"
            }
        }

        return {
            custom: true,
            content: "Thank you for the suggestion!",
            ephemeral: true
        }
    }
}
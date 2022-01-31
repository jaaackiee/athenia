module.exports = {
    aliases: ["confess"],
    category: "support",
    description: "Make a private confession",
    expectedArgs: "<confession>",
    minArgs: 1,
    syntaxError: "Incorrect syntax! Use `/confess {ARGUMENTS}`",
    permissions: ["ADMINISTRATOR"],
    callback: async ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        // const c = client.channels.cache.get("798406796518752266");
        const c = client.channels.cache.get("869889176441593876");
        const embed = {
            color: 0x2f3136,
            title: "⸝⸝ Confession... ⊹˚.⋆.",
            description: text,
            footer: {
                text: "Type '/confess <confession>' to confess."
            }
        }
        c.send({
            custom: true,
            embeds: [embed]
        });

        // const priv = client.channels.cache.get("827374551708598302");
        const priv = client.channels.cache.get("869889176441593876");
        priv.send({
            custom: true,
            content: `${user.tag} - (${user.id}) just said **${text}**`
        });

        if (interaction) {
            return {
                custom: true,
                content: `Confession sent! ${c}`,
                ephemeral: true
            }
        } else {
            if (channel.type !== "dm") {
                await message.delete();
            }
        }
    }
}
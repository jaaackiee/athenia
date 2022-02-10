module.exports = {
    description: "close a ticket",
    expectedArgs: "[reason]",
    guildOnly: true,
    callback: (message, args, text) => {
        if (message.channel.parentId !== "830301022190174228") {
            return {
                custom: true,
                content: "This channel is not a ticket!",
                failed: true
            }
        }

        const user = message.client.users.cache.get(message.channel.topic);
        user.send({
            custom: true,
            content: "Your ticket in Athenia has been closed for this reason:\n" + text 
        });

        setTimeout(function() {
            message.channel.delete({
                reason: text
            });
        }, 10000);

        return {
            custom: true,
            content: "Thank you for contacting the Athenia support team, we hope you received the help you requested for; this ticket will be closing in 10 seconds. **Have a nice day!**"
        }
    }
}
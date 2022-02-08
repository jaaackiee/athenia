module.exports = {
    guildOnly: true,
    callback: (message, args, text) => {
        if (message.channel.parentID !== "830301022190174228") {
            return {
                custom: true,
                content: "This channel is not a ticket!",
                failed: true
            }
        }

        setTimeout(function() {
            message.channel.delete();
        }, 10000);

        return {
            custom: true,
            content: "Thank you for contacting the Athenia support team, we hope you received the help you requested for; this ticket will be closing in 10 seconds. **Have a nice day!**"
        }
    }
}
module.exports = {
    aliases: ["close"],
    category: "support",
    description: "Close an open ticket",
    guildOnly: true,
    callback: ({channel}) => {
        if (channel.parentID !== "830301022190174228") return;

        setTimeout(function() {
            channel.delete();
        }, 10000);

        return {
            custom: true,
            content: "Thank you for contacting the Athenia support team, we hope you received the help you requested for; this ticket will be closing in 10 seconds. **Have a nice day!**"
        }
    }
}
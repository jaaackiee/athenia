module.exports = {
    expectedArgs: "<hi>",
    minArgs: 1,
    maxArgs: 1,
    cooldown: 60,
    ownerOnly: true,
    callback: (message, args, text) => {
        return message.channel.send({
            custom: true,
            content: "hi"
        });
    }
}
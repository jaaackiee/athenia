module.exports = {
    callback: (message, args, text) => {
        return message.channel.send({
            custom: true,
            content: "NOOO"
        });
    }
}
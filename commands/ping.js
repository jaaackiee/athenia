module.exports = {
    callback: (message, args) => {
        return message.channel.send({
            custom: true,
            content: "hi"
        });
    }
}
module.exports = (client) => {
    client.on("guildMemberAdd", (member) => {
        if (Date.now() - member.user.createdAt < 24 * 60 * 60 * 1000) {
            member.user.send("You have been banned because your account is less than a day old.");
            return member.ban({ reason: "New account" });
        }

        const channel = client.channels.cache.get("798404804263018507");

        const welcomeEmbed = {
            color: 0x2f3136,
            description: "\<:sagew:826947431349354496>\<:sagee:826947234515779594>\<:sagel:826947322243317800>\<:sagec:827270543190523944>\<:sageo:826947353869025280>\<:sagem:826947330859204649>\<:sagee:826947234515779594>\n> ・<#827368267982438400> \n> ・<#827369417117007872> \n> ・<#827369526395273238> \n",
            thumbnail: {
                url: "attachment://icon.gif"
            }
        }

        channel.send("<@&772554029879918613>... " + member, {
            embed: welcomeEmbed,
            files: [
                {
                    attachment: "/app/images/icon.gif",
                    name: "icon.gif"
                },
            ]
        })
            .then((sentMessage) => sentMessage.react("827391670030434335") && sentMessage.react("827394126067793920"))
            .catch((e) => console.error(e));
    });
}
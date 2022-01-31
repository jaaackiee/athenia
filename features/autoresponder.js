module.exports = (client, instance) => {
    client.on("messageCreate", (message) => {
        const msg = message.content.toLowerCase();
        if (message.author.bot) return;

        if (message.channel.id === "827368306209456138" || message.channel.id === "827372152155144242") {
            message.react("827391670030434335");
            message.react("827394126067793920");
            message.react("827291601377296454");
            message.react("827396877602521118");
            message.react("827396919873372240");
            message.react("837187931960639543");
            message.react("827603323321712661");
            message.react("827269404656009227");
            message.react("827269250820997200");
            message.react("827269106080022628");
            message.react("837187879053819934");
            message.react("827269127541489725");
            message.react("827396427416076309");
            message.react("827396294481149952");
            message.react("827396390387974197");
            message.react("827396234033233952");
            message.react("827396839439073321");
            message.react("827107871443255296");
            message.react("827108013151485984");
            message.react("827291481835962408");
        } else if (message.channel.id === "827372178520670238") {
            message.react("831385384751202324");
            message.react("831385394313691167");
        } else if (msg.startsWith("welc") && message.channel.id === "798404804263018507") {
            message.react("827391670030434335");
            message.react("827394126067793920");
        } else if (message.channel.id === "827369685879226388") {
            message.react("827396390387974197");
            message.react("827394126067793920");
        }
    });
}
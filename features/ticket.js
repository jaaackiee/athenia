const { MessageButton, MessageActionRow } = require("discord.js");

module.exports = async (client) => {
    client.on("interactionCreate", async (interaction) => {
        if (interaction.channel.id !== "829838297374916670") return;

        const embed = {
            color: 0x2f3136,
            title: "⸝⸝ Ticket System... ⊹˚.⋆",
            description: "☕ **If you have questions or need help**... \n> ・Ping any online staff!\n⠀\n🥞 **If you need to report someone**... \n> ・Ping any online staff!\n⠀\n🌿 **If you need to appeal a punishment**... \n> ・Ping any online admin!\n \n🥛 **If you want to become a pm or am**... \n> ・Ping any online admin!\n \n🧸 **If you need booster perks**... \n> ・Ping the owner!",
            footer: {
                text: "Use .close to close the ticket!"
            }
        }

        let channelId;

        const cooldown = client.channels.cache.find((c) => c.topic === interaction.user.id);
        if (cooldown) {
            return interaction.reply({
                custom: true,
                content: "You can only have one ticket open at a time!",
                ephemeral: true
            });
        }

        await interaction.guild.channels.create(interaction.user.username.toLowerCase() + "-" + interaction.user.discriminator, {
            parent: "830301022190174228",
            permissionOverwrites: [
                {
                    id: interaction.user.id,
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: interaction.guild.id,
                    deny: ["VIEW_CHANNEL"]
                },
                {
                    id: "741553649804902450",
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "688964711366000668",
                    allow: ["VIEW_CHANNEL"]
                },
                {
                    id: "804996142462795807",
                    allow: ["VIEW_CHANNEL"]
                }
            ]
        }).then((chnl) => {
            chnl.send({
                custom: true,
                content: "・✰﹕<@" + interaction.user + ">... Hello! Please read the info below. ⊹˚.⋆",
                embeds: [embed]
            });

            chnl.setTopic(interaction.user.id);
            
            channelId = chnl.id;
        }).catch((e) => {
            console.log(e);
        });

        interaction.reply({
            custom: true,
            content: "Ticket created: <#" + channelId + ">!",
            ephemeral: true
        });
    });

    client.on("messageCreate", (message) => {
        if (message.channel.id !== "829838297374916670") return;
        if (message.author.bot) return;

        const button = new MessageButton().setCustomId("supportTicket").setLabel("Open Support Ticket").setStyle("SUCCESS").setEmoji("827391670030434335");
        const row = new MessageActionRow().addComponents(button);

        const embed = {
            color: 0x2f3136,
            title: "rachel this is the ticket embed",
            description: "change it in github\nathenia/features/ticket.js\nline 79-83\n\nor just send me the embed in test server"
        }

        return message.channel.send({
            custom: true,
            embeds: [embed],
            components: [row]
        });
    });
}
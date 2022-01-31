const profileSchema = require("../../schemas/profile-schema");
const mongoose = require("mongoose");
const mongo = require("../../util/mongo");
module.exports = {
    aliases: ["leaderboard", "lb"],
    category: "economy",
    description: "Check the top 10 richest users.",
    cooldown: "60s",
    guildOnly: true,
    callback: async ({guild, member, user, message, channel, args, text, client, prefix, instance, interaction}) => {
        let res;
        await mongo().then(async (mongoose) => {
            res = await profileSchema.find({}).sort({
                coins: -1
            }).limit(10);
        });
        await mongoose.connection.close();

        let txt = "";
        for (let i = 0; i < res.length; i ++) {
            const { _id, coins } = res[i];
            txt += `${i + 1}. **<@${_id}>** - **${coins.toLocaleString()}** <:starlings:925845621074722836>\n`;
        }

        const embed = {
            color: 0x2f3136,
            title: "Top 10 Richest Users",
            description: txt
        }

        return {
            custom: true,
            embeds: [embed]
        }
    }
}
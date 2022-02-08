const profileSchema = require("../../schemas/profile-schema");
module.exports = {
    description: "top 10 richest users",
    guildOnly: true,
    callback: async (message, args, text) => {
        let res;
        res = await profileSchema.find({}).sort({
            coins: -1
        }).limit(10);

        let txt = "";
        for (let i = 0; i < res.length; i ++) {
            const { _id, coins } = res[i];
            txt += (i + 1) + ". **<@" + _id + ">** - **" + coins.toLocaleString() + "**<:starlings:925845621074722836>\n";
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
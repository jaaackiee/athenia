/**
 * Sends a message to <#827374551708598302> every 4 hours for users to react to based on their mood
 */

module.exports = (client, instance) => {
    setInterval(remind, 4 * 1000 * 60 * 60 * 60);

    function remind() {
        const channel = bot.channels.cache.get("827374551708598302");
        channel.send("⸝⸝ <@&772554025542484018>... ⊹˚.⋆ /n・✰﹕**HOW ARE YOU** /n> <:r_yes:827291601377296454> ⸝⸝ I’m doing good today /n> <:r_no:827388847330426880> ⸝⸝ I’m doing bad today");
    }
}
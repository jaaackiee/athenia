/**
 * Adds coins to user's balance by talking
 */

const coin = require("../util/coin");
const cooldown = new Set(); // 1 minute cooldown
module.exports = (client, instance) => {
    client.on("messageCreate", (message) => {
        const { author } = message;
        const coins = Math.floor(Math.random() * 10 + 1);

        if (cooldown.has(author.id)) return;
        if (message.content.startsWith(".")) return;
        if (author.bot) return;

        cooldown.add(author.id);

        setTimeout(() => {
            cooldown.delete(author.id);
        }, 60000);

        await coin.addCoins(author.id, coins);
    });
}
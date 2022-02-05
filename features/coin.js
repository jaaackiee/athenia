/**
 * Adds coins to user's balance by talking
 */

const coin = require("../util/economy/coin");
const cooldown = []; // 1 minute cooldown
module.exports = (client) => {
    client.on("messageCreate", async (message) => {
        const { author } = message;
        const coins = Math.floor(Math.random() * 10 + 1);

        if (cooldown.includes(author.id)) return;
        if (message.content.startsWith(".")) return;
        if (author.bot) return;

        cooldown.push(author.id);

        setTimeout(() => {
            const index = cooldown.indexOf(author.id);
            if (index > -1) {
                cooldown.splice(index, 1);
            }
        }, 60000);

        await coin.addCoins(author.id, coins);
    });
}
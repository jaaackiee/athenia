const cooldownSchema = require("../schemas/cooldownSchema");

module.exports = () => {
    setInterval(updateCooldown, 1000 * 30);

    async function updateCooldown() {
        await cooldownSchema.updateMany({  }, {
            $inc: {
                cooldown: -30
            }
        }, {
            useFindAndModify: false
        });

        await cooldownSchema.deleteMany({
            cooldown: {
                $lt: 1
            }
        });
    }
}
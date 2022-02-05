const cooldownSchema = require("../schemas/cooldownSchema");

module.exports = () => {
    setInterval(updateCooldown, 1000 * 5);

    async function updateCooldown() {
        await cooldownSchema.updateMany({  }, {
            $inc: {
                cooldown: -5
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
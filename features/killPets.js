const petSchema = require("../schemas/pet-schema");
module.exports = async () => {
    setInterval(kill, 1000 * 60 * 60 * 2);

    async function kill() {
        const petHealth = Math.floor(Math.random() * -2 - 1);
        await petSchema.updateMany({
            pet: {
                $gt: -1
            }
        }, {
            $inc: {
                petHealth
            }
        }, {
            useFindAndModify: false
        });

        await petSchema.updateMany({
            petHealth: {
                $lt: 1
            }
        }, {
            pet: -1,
            petHealth: 100
        }, {
            useFindAndModify: false
        });
    }
}
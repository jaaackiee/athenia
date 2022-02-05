const petSchema = require("../schemas/pet-schema");
module.exports = async () => {
    setInterval(kill, 1000 * 60 * 60 * 2);

    async function kill() {
        const petHealth = Math.floor(Math.random() * -2 - 1);
        await petSchema.updateMany({
            pet: [0, 1, 2, 3, 4, 5, 6, 7]
        }, {
            $inc: {
                petHealth
            }
        }, {
            useFindAndModify: false
        });

        await petSchema.updateMany({
            petHealth: [0, -1, -2, -3, -4, -5]
        }, {
            pet: -1,
            petHealth: 100
        }, {
            useFindAndModify: false
        });
    }
}
const mongo = require("../mongo");
const profileSchema = require("../../schemas/profile-schema");
module.exports.addFood = async (_id, food) => {
    return await mongo().then(async (mongoose) => {
        const res = await profileSchema.findOneAndUpdate({
            _id
        }, {
            _id,
            $inc: {
                food
            }
        }, {
            new: true,
            upsert: true,
            useFindAndModify: false
        });

        food = res.food;
        await mongoose.connection.close();

        return food;
    });
}

module.exports.getFood = async (_id) => {
    return await mongo().then(async (mongoose) => {
        let res = await profileSchema.findOne({ _id });

        let food;

        if (res) {
            food = res.food;
        } else {
            res = await new profileSchema({ _id }).save();
            food = res.food;
        }
        await mongoose.connection.close();

        return food;
    });
}
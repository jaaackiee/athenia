const mongo = require("../mongo");
const profileSchema = require("../../schemas/profile-schema");
module.exports.addVotes = async (_id, votes) => {
    return await mongo().then(async (mongoose) => {
        const res = await profileSchema.findOneAndUpdate({
            _id
        }, {
            _id,
            $inc: {
                votes
            }
        }, {
            upsert: true,
            new: true,
            useFindAndModify: false
        });

        votes = res.votes;
        await mongoose.connection.close();

        return votes;
    });
}

module.exports.getVotes = async (_id) => {
    return await mongo().then(async (mongoose) => {
        let res = await profileSchema.findOne({ _id });

        let votes = 0;

        if (res) {
            votes = res.votes;
        } else {
            res = await new profileSchema({ _id }).save();
            votes = res.votes;
        }
        await mongoose.connection.close();

        return votes;
    });
}
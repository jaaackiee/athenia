const profileSchema = require("../../schemas/profileSchema");
module.exports.addVotes = async (_id, votes) => {
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
    return votes;
}

module.exports.getVotes = async (_id) => {
    let res = await profileSchema.findOne({ _id });

    let votes = 0;

    if (res) {
        votes = res.votes;
    } else {
        res = await new profileSchema({ _id }).save();
        votes = res.votes;
    }

    return votes;
}
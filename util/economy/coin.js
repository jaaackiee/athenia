const profileSchema = require("../../schemas/profile-schema");
const coin = require("./coin");
module.exports.addCoins = async (_id, coins) => {
    const res = await profileSchema.findOneAndUpdate({
        _id
    }, {
        _id,
        $inc: {
            coins
        }
    }, {
        new: true,
        upsert: true,
        useFindAndModify: false
    });

    let coin = res.coins;
    return coin;
}

module.exports.getCoins = async (_id) => {
    let res = await profileSchema.findOne({ _id });
    let coins;

    if (res) {
        coins = res.coins;
    } else {
        res = await new profileSchema({ _id }).save();
        coins = res.coins;
    }

    return coins;
}

module.exports.buy = async (_id, price) => {
    const bal = await coin.getCoins(_id);
    return bal >= price;
}
const petSchema = require("../../schemas/petSchema");
const pets = require("../../resources/pets.json");
module.exports.givePet = async (_id, petNum) => {
    const res = await petSchema.findOneAndUpdate({
        _id
    }, {
        _id,
        petHealth: 100,
        pet: petNum,
        petName: pets[petNum].name
    }, {
        upsert: true,
        new: true,
        useFindAndModify: false
    });

    let pet = res.pet;
    return pet;
}

module.exports.getPet = async (_id) => {
    let res = await petSchema.findOne({ _id });
    let pet;

    if (res) {
        pet = res.pet;
    } else {
        res = await new petSchema({ _id }).save();
        pet = res.pet;
    }

    return pet;
}

module.exports.getPetName = async (_id) => {
    let res = await petSchema.findOne({ _id });
    let petName;

    if (res && res.petName === "") {
        petName = pets[res.pet].name;
    } else if (res) {
        petName = res.petName;
    } else {
        res = await new petSchema({ _id }).save();
        petName = res.petName;
    }

    return petName;
}

module.exports.changePetName = async (_id, petName) => {
    const res = await petSchema.findOneAndUpdate({
        _id
    }, {
        _id,
        petName
    }, {
        new: true,
        upsert: true,
        useFindAndModify: false
    });

    petName = res.petName;
    return petName;
}

module.exports.addPetHealth = async (_id, petHealth) => {
    let res = await petSchema.findOneAndUpdate({
        _id
    }, {
        $inc: {
            petHealth
        }
    }, {
        new: true,
        upsert: true,
        useFindAndModify: false
    });

    petHealth = res.petHealth;
    if (petHealth > 100) {
        res = await petSchema.findOneAndUpdate({
            _id
        }, {
            petHealth: 100
        }, {
            new: true,
            upsert: true,
            useFindAndModify: false
        });

        petHealth = res.petHealth
    }

    return petHealth;
}

module.exports.getPetHealth = async (_id) => {
    let res = await petSchema.findOne({ _id });

    let petHealth;

    if (res) {
        petHealth = res.petHealth;
    } else {
        res = await new petSchema({ _id }).save();
        petHealth = res.petHealth;
    }

    return petHealth;
}
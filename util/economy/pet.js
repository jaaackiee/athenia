const mongo = require("../mongo");
const petSchema = require("../../schemas/pet-schema");
const pets = require("../../resources/pets.json");
module.exports.givePet = async (_id, petNum) => {
    return await mongo().then(async (mongoose) => {
        const res = await petSchema.findOneAndUpdate({
            _id
        }, {
            _id,
            petHealth: 100,
            pet: petNum
        },{
            upsert: true,
            new: true,
            useFindAndModify: false
        });

        let pet = res.pet;
        await mongoose.connection.close();

        return pet;
    });
}

module.exports.getPet = async (_id) => {
    return await mongo().then(async (mongoose) => {
        let res = await petSchema.findOne({ _id });
        let pet;

        if (res) {
            pet = res.pet;
        } else {
            res = await new petSchema({ _id }).save();
            pet = res.pet;
        }
        await mongoose.connection.close();

        return pet;
    });
}

module.exports.getPetName = async (_id) => {
    return await mongo().then(async (mongoose) => {
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
        await mongoose.connection.close();

        return petName;
    });
}

module.exports.changePetName = async (_id, petName) => {
    return await mongo().then(async (mongoose) => {
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
        await mongoose.connection.close();

        return petName;
    });
}

module.exports.addPetHealth = async (_id, petHealth) => {
    return await mongo().then(async (mongoose) => {
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
        await mongoose.connection.close();

        return petHealth;
    });
}

module.exports.getPetHealth = async (_id) => {
    return await mongo().then(async (mongoose) => {
        let res = await petSchema.findOne({ _id });

        let petHealth;

        if (res) {
            petHealth = res.petHealth;
        } else {
            res = await new petSchema({ _id }).save();
            petHealth = res.petHealth;
        }
        await mongoose.connection.close();

        return petHealth;
    });
}
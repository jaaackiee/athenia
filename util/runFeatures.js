const autoResponder = require("../features/autoresponder");
const coin = require("../features/coin");
const commandHandler = require("../features/commandHandler");
const cooldown = require("../features/cooldown");
const killPets = require("../features/killPets");
const pick = require("../features/pick");
const reminder = require("../features/reminder");
const ticket = require("../features/ticket");
const welcome = require("../features/welcome");
module.exports = (client) => {
    // autoResponder(client);
    // coin(client);
    commandHandler(client);
    // cooldown();
    // killPets();
    // pick(client);
    // reminder();
    // ticket(client);
    // welcome(client);
}
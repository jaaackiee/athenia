const fs = require("fs");

const getFolders = (dir) => {
    const files = fs.readdirSync(dir, {
        withFileTypes: true
    });

    let commandFolders = [];

    for (const file of files) {
        if (file.isDirectory()) {
            commandFolders.push(dir + "/" + file.name);
        }
    }

    return commandFolders;
}

module.exports = getFolders;
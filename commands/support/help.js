const getFiles = require("../../util/getFiles");
const getFolders = require("../../util/getFolders");
module.exports = {
    description: "help me please",
    expectedArgs: "[category]",
    maxArgs: 1,
    callback: async (message, args, text) => {
        const commandFolders = getFolders(__dirname + "/../../commands");

        if (!args[0]) {
            const fields = [];

            for (let i = 0; i < commandFolders.length; i ++) {
                const categoryFiles = getFiles(commandFolders[i], ".js");

                const split = commandFolders[i].replace(/\\/g, "/").split("/");
                const folderName = split[split.length - 1];

                fields.push({
                    name: (i + 1) + ". **" +  folderName[0].toUpperCase() + folderName.substring(1) + " Commands**",
                    value: categoryFiles.length + " commands! \n \`.help " + folderName + "\`"
                });
            }

            const embed = {
                color: 0x2f3136,
                title: "⸝⸝ Commands ⊹˚.⋆",
                fields
            }

            return {
                custom: true,
                embeds: [embed]
            }
        }

        const commandFiles = getFiles(__dirname + "/../../commands/" + args[0].toLowerCase(), ".js");

        let description = "⊹˚.⋆ 　✧.* 　⋆˚.　⊹˚.⋆";
        
        try {
            for (const commandFile of commandFiles) {
                const split = commandFile.replace(/\\/g, "/").split("/");
                const commandName = split[split.length - 1].replace(".js", "");
                const command = require(commandFile);
    
                if (command.ownerOnly || command.modOnly) {
                    // Do not show ownerOnly or modOnly commands on help menu
                } else if (command.expectedArgs !== undefined) {
                    description += " \n> ×・**." + commandName.toLowerCase() + " " + command.expectedArgs + ":** " + command.description;
                } else {
                    description += " \n> ×・**." + commandName.toLowerCase() + ":** " + command.description;
                }
            }
        } catch (e) {
            const embed = {
                color: 0x2f3136,
                title: "⸝⸝ Sorry... ⊹˚.⋆",
                description: "⊹˚.⋆ 　✧.* 　⋆˚.　⊹˚.⋆ \n> That category does not exist!"
            }

            return {
                custom: true,
                embeds: [embed]
            }
        }

        const embed = {
            color: 0x2f3136,
            title: "⸝⸝ " + args[0][0].toUpperCase() + args[0].substring(1) + " Commands... ⊹˚.⋆",
            description,
            footer: {
                text: "<required> || [optional]"
            }
        }

        return {
            custom: true,
            embeds: [embed]
        }
    }
}
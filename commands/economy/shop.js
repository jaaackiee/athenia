const roles = require("../../resources/roles.json");
module.exports = {
    aliases: ["shop"],
    category: "economy",
    description: "View the role shop.",
    callback: () => {
        let txt = "";
        roles.forEach(function(role) {
            let i = 1;
            txt += i + ".   " + Math.abs(role.price) + "<:starlings:925845621074722836>  •  " + role.name + "\n> • <@&" + role.id + ">\n\n"
            i ++;
        });

        const embed = {
            color: 0x2f3136,
            title: "⸝⸝ Role Shop... ⊹˚.⋆",
            description: txt,
            footer: {
                text: "Use .buy <roleName> to purchase a role!"
            }
        }

        return {
            custom: true,
            embeds: [embed]
        }
    }
}
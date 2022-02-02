module.exports = {
    aliases: ["help"],
    category: "support",
    description: "Displays a help menu with available commands.",
    expectedArgs: "[category]",
    maxArgs: 1,
    callback: async ({args}) => {
        let embed;

        if (args[0]) {
            if (args[0].toLowerCase() === "cute") {
                embed = {
                    color: 0x2f3136,
                    title: "⸝⸝ Cute Commands... ⊹˚.⋆",
                    description: "⊹˚.⋆ 　✧.* 　⋆˚.　⊹˚.⋆ \n> ×・**.cat:** cute cat pictures \n> ×・**.dog:** cute dog pictures \n> ×・**.wildlife:** cute wildlife pictures \n︶꒷꒦꒷ ✧.*　︶꒷꒦꒷ ✧.*　︶꒷꒦꒷ ✧.*　︶꒷꒦꒷ ✧.*　︶꒷꒦꒷ ✧.*"
                }
            } else if (args[0].toLowerCase() === "economy") {
                embed = {
                    color: 0x2f3136,
                    title: "⸝⸝ Sorry... ⊹˚.⋆",
                    description: "⊹˚.⋆ 　✧.* 　⋆˚.　⊹˚.⋆ \n> That category does not exist!"
                }
            } else if (args[0].toLowerCase() === "fun") {
                embed = {
                    color: 0x2f3136,
                    title: "⸝⸝ Fun Commands... ⊹˚.⋆",
                    description: "\⊹˚.⋆ 　✧.* 　⋆˚.　⊹˚.⋆ \n> ×・**.inspo:** inspirational quotes \n> ×・**.topic:** asks you a question \n> ×・**.joke:** tells you a joke \n> ×・**.scarystory:** tells you a scary story \n> ×・**.wyr:** would you rather \n> ×・**.dice:** roll a dice \n> ×・**.cf:** coinflip \n> ×・**.8ball <question>:** 8ball \n> ×・**.number:** random number from 1-10 \n> ×・**.rps:** rock paper scissor \n> ×・**.fortune:** eat a fortune cookie \n> ×・**.fight @user:** beat someone up \n> ×・**.kill @user:** murder someone \n︶꒷꒦꒷ ✧.*　︶꒷꒦꒷ ✧.*　︶꒷꒦꒷ ✧.*　︶꒷꒦꒷ ✧.*　︶꒷꒦꒷ ✧.*"
                }
            } else if (args[0].toLowerCase() === "pets") {
                embed = {
                    color: 0x2f3136,
                    title: "⸝⸝ Pet Commands... ⊹˚.⋆",
                    description: "⊹˚.⋆ 　✧.* 　⋆˚.　⊹˚.⋆ \n> ×・**.play:** adds 1-3 life to your pet \n> ×・**.cuddle:** adds 3-5 life to your pet \n> ×・**.feed:** adds 3-5 life to your pet \n> ×・**.walk:** adds 3-30 life based on your pets skill \n> ×・**.sit:** adds 3-30 life based on your pets skill \n> ×・**.rollover:** adds 3-30 life based on your pets skill \n> ×・**.swim:** adds 3-30 life based on your pets skill \n> ×・**.fetch:** adds 3-30 life based on your pets skill \n> ×・**.toy:** adds 3-30 life based on your pets skill \n> ×・**.playtime @user:** play with another pet, adds 5-15 life \n︶꒷꒦꒷ ✧.*　︶꒷꒦꒷ ✧.*　︶꒷꒦꒷ ✧.*　︶꒷꒦꒷ ✧.*　︶꒷꒦꒷ ✧.*"
                }
            } else if (args[0].toLowerCase() === "support") {
                embed = {
                    color: 0x2f3136,
                    title: "⸝⸝ Support Commands... ⊹˚.⋆",
                    description: "⊹˚.⋆ 　✧.* 　⋆˚.　⊹˚.⋆ \n> ×・**.confess <confession>:** to privately confess something \n> ×・**.suggest <suggestion>:** to suggest something \n> ×・**.privsuggest <suggestion>:** to privately suggest something\n> ×・**.ticket:** to contact the staff team for any questions \n︶꒷꒦꒷ ✧.*　︶꒷꒦꒷ ✧.*　︶꒷꒦꒷ ✧.*　︶꒷꒦꒷ ✧.*　︶꒷꒦꒷ ✧.*"
                }
            } else {
                embed = {
                    color: 0x2f3136,
                    title: "⸝⸝ Sorry... ⊹˚.⋆",
                    description: "⊹˚.⋆ 　✧.* 　⋆˚.　⊹˚.⋆ \n> That category does not exist!"
                }
            }
        } else {
            embed = {
                color: 0x2f3136,
                title: "⸝⸝ Commands ⊹˚.⋆",
                fields: [
                    {
                        name: "1. ☕ **Pet Commands**",
                        value: "11 commands! \n `.help pets` \n"
                    },
                    {
                        name: "2. 🥞 **Economy Commands**",
                        value: "8 commands! \n `.help economy` \n"
                    },
                    {
                        name: "3. 🌿 **Support Commands**",
                        value: "5 commands! \n `.help support` \n"
                    },
                    {
                        name: "4. 🥛 **Fun Commands**",
                        value: "5 commands! \n `.help fun` \n"
                    },
                    {
                        name: "5. 🧸 **Cute Commands**",
                        value: "3 commands! \n `.help cute` \n"
                    },
                ],
            }
        }
        return {
            custom: true,
            embeds: [embed]
        }
    }
}
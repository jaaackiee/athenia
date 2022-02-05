module.exports = {
    callback: (message, args, text) => {
        const embed = {
            color: 0x2f3136,
            title: "⸝⸝ Pet Shop... ⊹˚.⋆",
            fields: [
                {
                    name: "1. `🐹` **Malako** | **25,000 <:starlings:925845621074722836>**",
                    value: "Malako is a clumsy little furball with an obsession over seeds. Sunflower seeds are his favorite of all time, and if you aren't careful, he might just eat yours.\n⠀"
                },
                {
                    name: "2. `🐸` **Daire** | **25,000 <:starlings:925845621074722836>**",
                    value: "Daire is the cutest chubby frog you have ever met! He absolutely loves to gift people flowers and even collects them himself. Better watch out though, Daire loves to take a splash in any water source around.\n⠀"
                },
                {
                    name: "3. `🐰` **Cairo** | **30,000 <:starlings:925845621074722836>**",
                    value: "An adorable and fast bunny, Cairo is the world champion blueberry picker! Her favorite food are obviously blueberries. Cuddle up with Cairo in the kitchen and make some blueberry pie together! \n⠀"
                },
                {
                    name: "4. `🦊` **Gaea** | **30,000 <:starlings:925845621074722836>**",
                    value: "Foxes have a reputation of being cunning, but sweet Gaea is only cunning when it comes to fish! It is absolutely her favorite snack! You can hear her yipping away begging for more all night long.\n⠀"
                },
                {
                    name: "5.  `🐮` **Ugo** | **35,000 <:starlings:925845621074722836>**",
                    value: "You know what they say... strong as an ox! Well, Ugo isn't exactly an ox, but close enough. Strong enough to carry a bell around all day with him.\n⠀"
                },
                {
                    name: "6. `🐻` **Baako** | **35,000 <:starlings:925845621074722836>**",
                    value: "Baako is a furry brown bear thats a wonderful singer and actually plays the banjo pretty well! He can always calm you down with a sweet tune when you need it.\n⠀"
                },
                {
                    name: "7. `🐘` **Circe** | **45,000 <:starlings:925845621074722836>**",
                    value: "Circe is a wise elephant, who loves to have fun! She absolutely loves playing ball and eating peanuts with you on a sunny day! Don't forget, Circe always takes her bird friend, Nina, around with her everywhere. \n⠀"
                },
                {
                    name: "8. `🦚` **Ebele** | **50,000 <:starlings:925845621074722836>**",
                    value: "Ebele's quite the gorgeous peacock isn't she? She's actually very unique! She is royalty after all. She always loves getting her feathers stroked.\n⠀"
                }
            ],
            image: {
                url: "attachment://banner.png"
            },
            footer: {
                text: "Buy a pet using .adopt <number>!"
            }
        }

        return {
            custom: true,
            embeds: [embed],
            files: [
                {
                    attachment: "images/banner.png",
                    name: "banner.png"
                }
            ]
        }
    }
}
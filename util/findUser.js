module.exports = async (message, user) => {
    if (!user) {
        return message.author;
    }

    let u;
    try {
        const id = user.replace(/[<@!>]/g, "");
        u = await message.guild.members.fetch(id);
    } catch (e) {
        console.error(e);
    }

    if (!u) {
        return null;
    }

    return u.user;
}
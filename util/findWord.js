module.exports = (message, word) => {
    const loc = message.indexOf(word);

    if (loc >= 0) {
        if (loc === 0 || message.includes(" " + word)) {
            if (loc + word.length === message.length || message.includes(word + " ")) {
                return true;
            }
        }
    }

    return false;
}
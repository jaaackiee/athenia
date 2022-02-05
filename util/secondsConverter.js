module.exports = (number) => {
    let h, m, s;

    if (isNaN(number)) {
        throw new TypeError("Value must be a number.");
    }

    s = number;
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;

    return {
        hours: h,
        minutes: m,
        seconds: s
    }
}
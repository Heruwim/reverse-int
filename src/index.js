module.exports = function reverse(n) {
    const nubmerToString = Math.abs(n).toString();
    let reverseNumber = "";
    for (let i = nubmerToString.length - 1; i >= 0; i--) {
        reverseNumber += nubmerToString[i];
    }
    return Number(reverseNumber);
}

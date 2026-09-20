const palindromes = function (str) {
    const alphaNum = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleaned = str.toLowerCase().split('').filter((char) => alphaNum.includes(char)).join('');
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;

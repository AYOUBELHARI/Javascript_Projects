const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
    if (a < 0 || b < 0) return 'ERROR';
    if (a > b) {
        const temp = a;
        a = b;
        b = temp;
    }
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

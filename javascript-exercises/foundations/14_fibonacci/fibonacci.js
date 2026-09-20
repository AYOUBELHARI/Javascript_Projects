const fibonacci = function(n) {
    if (typeof n !== 'number') n = parseInt(n);
    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    const arr = [1];
    let total = 0;
    for (let i = 1; i < n; i++) {
        arr.push(arr[i - 1] + total);
        total = arr[i - 1];
    }
    return arr[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;

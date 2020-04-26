const fibonacci = function(number) {
    if (number < 0) return 'OOPS';

    number = parseInt(number);
    let results = [1, 1];
    for (let i = 2; i <= number; i++) {
        results.push(results[i-1] + results[i-2]);
    }
    return results[number-1];
}

module.exports = fibonacci

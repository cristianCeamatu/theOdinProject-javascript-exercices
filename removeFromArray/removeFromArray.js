const removeFromArray = function(array, ...removables) {
    return array.filter((el) => removables.indexOf(el) < 0);
}

module.exports = removeFromArray

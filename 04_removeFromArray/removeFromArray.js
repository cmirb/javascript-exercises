const removeFromArray = function(arr) {
    let args = Array.prototype.slice.call(arguments, 1);
    return arr.filter(function(item) {
        return !args.includes(item);
    });
};

// Do not edit below this line
module.exports = removeFromArray;

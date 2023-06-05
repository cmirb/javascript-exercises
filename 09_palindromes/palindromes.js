const palindromes = function (str) {
    // normalize input string, remove non-alphanumeric characters
    const normalizeStr = str.replace(/\W/g, '').toLowerCase();
    // create reversed version of normalized string
    const reversedStr = normaledStr.split('').reverse().join('');
    return normalizeStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;

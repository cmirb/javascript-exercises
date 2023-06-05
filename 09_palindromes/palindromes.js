const palindromes = function(str) {
    // normalize input string, remove non-alphanumeric characters
    const normalizedStr = str.replace(/[^A-Za-z]/g, '').toLowerCase();
    // create reversed version of normalized string
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
  };
  
// Do not edit below this line
module.exports = palindromes;

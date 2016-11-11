/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //Empty strings are valid palindromes
    if (s.length === 0) {
        return true;
    }
  
    //^ in regex is ! -> this means replace anything NOT alphanumeric with a blank (essentially removing them)
    var reg = /[^0-9a-z]/gi;
    var str = s.replace(reg, '').toLowerCase();

    var reversed = str.split('').reverse().join('');
    
    if (str === reversed) {
        return true;
    } else {
        return false;
    }
};
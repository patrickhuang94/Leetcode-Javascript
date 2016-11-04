/**
 * Determine whether an integer is a palindrome. Do this without extra space.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //Solution 1
    return x.toString().split('').reverse().join('') == x;
    
    //Solution 2
    //Convert to string to use string functions
    num = x.toString();
    var i;
    var len = Math.floor(num.length / 2);

    //Negative numbers can't be palindromes
    if (x < 0) {
        return false;
    //Numbers with length one is automatically a palindrome
    } else if (num.length === 1) {
        return true;
    } else {
        //Loop only goes until the halfway point of the string
        for (i = 0; i < len; i++) {
            if (num.charAt(i) !== num.charAt(num.length - i - 1)) {
                return false;
            }
        }
    }
    return true;
};
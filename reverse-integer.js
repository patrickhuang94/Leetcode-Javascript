/**
 * Reverse digits of an integer.
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //If the input OR the reversed string is greater than the max_value, return 0
    if (parseInt(x, '10') >= 2147483647 || parseInt(x.toString().split('').reverse().join('')) >= 2147483647)
        return 0;
    if (x < 0)
        return -parseInt(x.toString().split('').reverse().join(''));
    return parseInt(x.toString().split('').reverse().join(''));
};
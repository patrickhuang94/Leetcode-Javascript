/**
 * Implement atoi to convert a string to an integer.
 */

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var integer = parseInt(str, '10');
    var INT_MAX = 2147483647;
    var INT_MIN = -2147483648;
    
    if (parseInt(str, '10') > INT_MAX) {
        integer = INT_MAX;
    } else if (parseInt(str, '10') < INT_MIN) {
        integer = INT_MIN;
    }
    return isNaN(integer) ? 0 : integer
};
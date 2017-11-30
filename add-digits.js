/**
 * Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num < 10) {
        return num;
    }
    //Convert number into string
    var str = num.toString(), //"138", "12"
        n,
        result = 0;

    for (var i = 0; i < str.length; i++) {
        n = parseInt(str.charAt(i));
        result = result + n;
    }
    return addDigits(result);
};

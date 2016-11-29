/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num < 1) {
        return false;
    }
    
    //Keep dividing into 4 evenly
    while (num % 4 === 0) {
        //Decrease num
        num /= 4;
    }
    
    return num == 1;
};
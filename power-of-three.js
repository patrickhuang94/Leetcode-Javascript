/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n < 1) {
        return false;
    }
    
    //n = 27
    //27/3 = 9, 9/3 = 3, 3/3 = 1
    
    //Keep dividing as long as it's divisible
    //It's a power of 3 if n eventually becomes 1
    while (n % 3 === 0) {
        n /= 3;
    }
    
    return n == 1;
};
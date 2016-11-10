/**
 * Given a non-negative number represented as an array of digits, plus one to the number.
 * The digits are stored such that the most significant digit is at the head of the list.
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    //array.join() all separate integers, convert to string, then parseInt() to integer and add 1
    var num = parseInt(digits.join('').toString()) + 1;
    
    //Convert integer -> string -> array
    num = num.toString().split('');
    
    //Convert all string arrays into numbers in array
    //Ex: ['1', '0', '2', '0'] -> [1,0,2,0]
    var result = num.map(function(x) {
        return parseInt(x, 10); 
    });
    return result;
};
/**
 * Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.
 * If the last word does not exist, return 0.
 * Example: Given s = "Hello world", return 5.
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    //Remove all leading and trailing white spaces
    s = s.trim();
    if (s.indexOf(' ') === -1) {
        return s.length;
    }
    
    var i;
    var counter = 0;
    //Count backwords, when white space is encountered, exit the loop
    for (i = s.length-1; i > 0; i--) {
        if (s.charAt(i) == ' ') {
            break;
        } else {
            counter++;
        }
    }
    return counter;
};
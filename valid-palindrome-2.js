/**
 * @param {string} s
 * @return {boolean}
 *
 * Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
 */
var validPalindrome = function(s) {
    var isPalindrome = ((s) => s === s.split('').reverse().join(''))
    var slice = ((s, i) => s.substr(0, i) + s.substr(i+1))

    //Try removing a character and see if a palindrome exists
    for (var i = 0; i < s.length; i++) {
        //Check from reverse side - this helps reduce runtime
        var j = s.length - i - 1

        //abcde vs. edcbg --> g and a don't match up, check for palindrome with one character cut out
        //If they do match up, it's a palindrome, don't bother checking for it
        if (s[i] !== s[j]) {
            return isPalindrome(slice(s, i)) || isPalindrome(slice(s, j))
        }
    }

    return true
};

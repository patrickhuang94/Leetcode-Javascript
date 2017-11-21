/**
 * Given a string, you need to reverse the order of characters in each word within a sentence
 * while still preserving whitespace and initial word order.
 *
 * Input: "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 */

/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {
    var wordArray = s.split(' ') //String.split() -> returns array of strings sepearted by param
    var returnArray = []

    for (var i = 0; i < wordArray.length; i++) {
        //Reverse a string for each of the elements in the array
        //wordArray[i] -> 'Let's', 'take', 'Leetcode'
        var reversedWord = wordArray[i].split('').reverse().join('') //['L', 'e', 't', ''', 's'], Array.join() -> a string
        returnArray.push(reversedWord)
    }

    return returnArray.join(" ")
};

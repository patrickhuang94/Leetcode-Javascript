/**
 * @param {string} word
 * @return {boolean}
 */

/**
 * Given a word, you need to judge whether the usage of capitals in it is right or not.
 * We define the usage of capitals in a word to be right when one of the following cases holds:
 * All letters in this word are capitals, like "USA".
 * All letters in this word are not capitals, like "leetcode".
 * Only the first letter in this word is capital if it has more than one letter, like "Google".
 * Otherwise, we define that this word doesn't use capitals in a right way.
 */

var detectCapitalUse = function(word) {
    var isCapital = ((letter) => {
        //If different, then the letter is not capital
        return letter.charCodeAt(0) === letter.toUpperCase().charCodeAt(0)
    })

    //First letter is capital - the rest could be either capital or lowercase
    if (isCapital(word[0])) {
        for (var i = 1; i < word.length-1; i++) {
            //If one letter is capital and one is not, the word is invalid
            if (!isCapital(word[i]) && isCapital(word[i+1])) {
                return false
            } else if (isCapital(word[i]) && !isCapital(word[i+1])) {
                return false
            }
        }
    }

    //First letter is lowercase - the rest has to be lowercase
    if (!isCapital(word[0])) {
        for (var i = 1; i < word.length; i++) {
            if (isCapital(word[i])) {
                return false
            }
        }
    }

    return true
};

var detectCapitalUse = function(word) {
	//Valid: if all words are uppercase or if first letter is upper/lowercase and everything else is lowercase
	return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase()
}

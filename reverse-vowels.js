/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    var reversedVowels = "",
        newString = "",
        index = 0;
    
    //Extract vowels from the back and add to "reversedVowels"
    for (var i = s.length-1; i >= 0; i--) {
        //Only add to reversedVowels if it's a vowel
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' || s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U'  ) {
            reversedVowels += s[i];
        }
    }
    
    //At this point, reversedVowels has all the vowels (reversed, from the back of the string)!
    //Need to replace each vowel occurence in 's' with reversedVowels[index]
    for (var j = 0; j < s.length; j++) {
        if (s[j] === 'a' || s[j] === 'e' || s[j] === 'i' || s[j] === 'o' || s[j] === 'u' || s[j] === 'A' || s[j] === 'E' || s[j] === 'I' || s[j] === 'O' || s[j] === 'U') {
            // newString = s.replace(s[j], reversedVowels[j]);
            newString += reversedVowels[index];
            index++;
        } else {
            newString += s[j];
        }
    }
    
    return newString;
};
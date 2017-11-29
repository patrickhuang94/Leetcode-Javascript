/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 *
 * Given an arbitrary ransom note string and another string containing letters from all the magazines,
 * write a function that will return true if the ransom note can be constructed from the magazines;
 * otherwise, it will return false.
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false
    }

    var ransomNoteCopy = ""

    //Go through the ransom note and see if it could be found from magazine
    for (var i = 0; i < ransomNote.length; i++) {
        var ransomLetter = ransomNote[i]

        if (magazine.indexOf(ransomLetter) > -1) {
            magazine = magazine.replace(ransomLetter, '') //cut out from magazine
            ransomNoteCopy += ransomLetter //construct a separate ransom note
        }
    }

    if (ransomNoteCopy.length === ransomNote.length) {
        return true
    } else {
        return false
    }
};

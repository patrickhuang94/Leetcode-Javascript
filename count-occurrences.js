/**
 * Your task today is simple: given an array of strings words and a string text,
 * return, for each word w in words, how many occurrences of w are in text.
 * For text = "aaaa" and words = ["a", "aa", "aaa", "aaaa"],
 * the output should be
 * countingOccurrences(text, words) = [4, 3, 2, 1].
 */

function countingOccurrences(text, words) {
    const occurrencesArray = []
    let index
    let occurrences

    //Go through 'words' array and check if each word is found within 'text'
    for (let i = 0; i < words.length; i++) {
        occurrences = 0
        index = text.indexOf(words[i])

        while (index !== -1) {
            occurrences++
            //Second param specifies starting location
            //indexOf only looks at the first occurrence of the word
            index = text.indexOf(words[i], index+1)
        }
        occurrencesArray.push(occurrences)
    }

    return occurrencesArray
}

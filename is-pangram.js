/**
 * A pangram uses all 26 letters (a-z) at least once.
 */

function isPangram(sentence) {
    let uniqueSortedArray = sentence
        .toLowerCase()
        .replace(/[^a-z]/g, '') //allow only a-z
        .split('')
        .sort()
        .filter((letter, index, arr) => arr.indexOf(letter) === index)

    return uniqueSortedArray.length === 26
}

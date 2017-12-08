/**
 * Given two strings, check whether it is possible to rearrange characters of the
 * first string in such way that it will become equal to the second one.
 */

function charactersRearrangement(string1, string2) {
    let stringArray1 = string1.split('').sort().join('')
    let stringArray2 = string2.split('').sort().join('')

    return stringArray1 === stringArray2
}

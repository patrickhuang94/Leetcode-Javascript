/**
 * Consider the following operation on a string containing digits from 1 to 9:
 * if the leftmost digit of the string is divisible by 3, remove it from the string;
 * otherwise, if the rightmost digit of the string is divisible by 3, remove it from the string;
 * otherwise, if the sum of two digits on the sides of the string is divisible by 3, remove both digits from the string;
 */

function truncateString(s) {
    let numArray = s.split('')
    let flag = true

    while (flag) {
        let firstIndex = 0
        let lastIndex = numArray.length - 1

        if (parseInt(numArray[firstIndex]) % 3 === 0) {
            numArray.shift()
        } else if (parseInt(numArray[lastIndex]) % 3 === 0) {
            numArray.pop()
        } else if (parseInt(numArray[firstIndex] + parseInt(numArray[lastIndex])) % 3 === 0) {
            numArray.shift()
            numArray.pop()
        } else {
            flag = false
        }
    }

    return numArray.join('')
}

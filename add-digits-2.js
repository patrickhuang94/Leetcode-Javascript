/**
 * Given positive integer numbers a, b and n return the maximum number that can be obtained by lengthening number a repeatedly no more than n times.
 * Lengthening number a means appending exactly one digit (in the decimal notation) to the right hand side of a such that
 * the resulting number is divisible by number b. If it is impossible to obtain a number that is divisible by b, then
 * the lengthening operation cannot be performed.
 * For a = 12, b = 11 and n = 2, the output should be addDigits(a, b, n) = "1210".
 * Lengthening operations can be 12->121->1210.
 */

function addDigits(a, b, n) {
    for (let num = 0; num < n; num++) {
        //Start from largest number for largest possible number
        for (let i = 9; i >= 0; i--) {
            let newNum = parseInt(a.toString() + i.toString())
            if (newNum % b === 0) {
                a = newNum
                break
            }
        }
    }

    return a.toString()
}

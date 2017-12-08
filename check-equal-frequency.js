/**
 * Given array of integers, check whether each integer, that occurs in it, is
 * contained there the same number of times as any other integer from the given array.
 * For inputArray = [1, 2, 2, 1], the output should be checkEqualFrequency(inputArray) = true
 * For inputArray = [1, 2, 2, 3, 1, 3, 1, 3], the output should be checkEqualFrequency(inputArray) = false
 */

function checkEqualFrequency(inputArray) {
    //Count occurrences of each number, stored inside an object
    let numCountObject = inputArray.reduce((allNums, current) => {
        if (!allNums.hasOwnProperty(current)) {
            allNums[current] = 1
        } else {
            allNums[current]++
        }

        return allNums
    }, {})

    //Convert values (occurrences) into an array
    let valuesArray = Object.values(numCountObject)

    //Check if every element in the array is the same
    return !!valuesArray.reduce((a, b) => {
        return (a === b) ? a : false
    })
}

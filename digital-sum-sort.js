/**
 * You are given an array of integers. Sort it in such a way that if a comes before b
 * then the sum of digits of a is less than or equal to the sum of digits of b. If two numbers
 * have the same sum of digits, the smaller one (in the regular sense) should come first.
 * For example 4 and 13 have the same sum of digits, however 4 < 13 thus 4 comes before 13 in any
 * digitalSum sorting where both are present.
 * For a = [13, 20, 7, 4], the output should be digitalSumSort(a) = [20, 4, 13, 7].
 */

function digitalSumSort(a) {
    let sumArray = []
    let array = []
    let sortedArray = []

    a.map((num) => {
        let digitSum = num.toString().split("").reduce((total, currentNum) => {
            return total + parseInt(currentNum)
        }, 0)

        sumArray.push([num, digitSum])
    })

    sumArray.sort((a, b) => {
        //Edge case where the digitSum is the same, compare original number
        if (a[1] === b[1]) {
            return a[0] - b[0]
        }
        return a[1] - b[1]
    })

    sumArray.map((num) => {
        sortedArray.push(num[0])
    })

    return sortedArray
}

/**
 * For n = 24, the output should be factorSum(n) = 5.
 * 24 -> (2 + 2 + 2 + 3) = 9 -> (3 + 3) = 6 -> (2 + 3) = 5 -> 5.
 * So the answer for n = 24 is 5.
 */

function factorSum(n) {
    let number = n

    //Keep looping as long as there are prime factors for that number
    while (getPrimeFactors(number).length !== 1) {
        let primeFactors = getPrimeFactors(number)
        number = primeFactors.reduce((total, current) => {
            return total + current
        }, 0)

        if (number === n) break //edge case for n = 4 -> [2, 2]
    }

    return number
}

function getPrimeFactors(num) {
    //Take n, divide it by the first prime number (2),
    //then take that and continue dividing it until it hits mod 0
    const primeNumberArray = []
    let i = 2

    while (num !== 1) {
        if (num % i === 0) {
            primeNumberArray.push(i)
            num = num / i
        } else {
            i++
        }
    }

    return primeNumberArray

}

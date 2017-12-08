/**
 * You are given n, return an array ans, composed in such way:
 * ans = [n, n - 5, n - 10, ... , m, m + 5, ... , n - 5, n], where m stands for the first non-positive integer obtained by subtractions.
 * For n = 25, the output should be listWithoutLoop(n) = [25, 20, 15, 10, 5, 0, 5, 10, 15, 20, 25].
 */

function listWithoutLoop(n) {
    let arr = [n]

    while (n > 0) {
        n = n - 5
        arr.push(n)
    }

    return [...arr, ...arr.reverse().slice(1)]
}

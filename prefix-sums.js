/**
 * Construct an array b of prefix sums of the given array a.
 * For a = [1, 2, 3], the output should be prefixSums(a) = [1, 3, 6].
 */

function prefixSums(a) {
    for (let i = 0; i < a.length; i++) {
        //Add current value with previous value
        if (i === 0) {
            a[i] = a[i]
        } else {
            a[i] = a[i] + a[i-1]
        }
    }

    return a
}

// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
    return x.map(a => +a).reduce((c, d) => c + d, 0)

}

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let total = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total += arr[i]
        }
    }
    return total

}
//Another alternative

function positiveSum(arr) {
    return arr.filter(i => i >= 0).reduce((a, b) => a + b, 0)

}
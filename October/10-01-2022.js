// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    sum = array.reduce((a, b) => a + b, 0)
    if (sum === 0) {
        return 0
    } else { return sum / array.length }

}

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

//solution

function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0
    } else {
        return n * m
    }

}
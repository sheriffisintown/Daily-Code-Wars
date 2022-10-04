// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

return "found the needle at position " + haystack.indexOf("needle");


// Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) { return x.split(' ').join('') }
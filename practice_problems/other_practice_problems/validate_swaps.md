# Validate Swaps

```js
/*
Given an array of strings and an original string, write a function to output an array of boolean values - true if the word can be formed from the original word by swapping two letters only once and false otherwise.

Examples
validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE")
➞ [true, true, false, false]

// Swap "A" and "B" from "ABCDE" to get "BACDE".
// Swap "A" and "E" from "ABCDE" to get "EBCDA".
// Both "BCDEA" and "ACBED" cannot be formed from "ABCDE" using only a single swap.

validateSwaps(["32145", "12354", "15342", "12543"], "12345")
➞ [true, true, true, true]

validateSwaps(["9786", "9788", "97865", "7689"], "9768")
➞ [true, false, false, false]

Notes
Original string will consist of unique characters.

--------------------------------------------------

Input: 1 array and 1 string
- the arrays will contain a collection of strings
- the string is the "original word" that will be our control string

Output: 1 array
- will contain a boolean value which indicates which of the given array strings were valid

Rules:
- funtion will take an array and a string
- determine which of the array strings can form the control string by swapping just two characters a single time
  - return true for each string that meets this requirement, false otherwisae
- the control string will consist of unique characters

Implicit:
- the given array can be empty, return an empty array
- the array strings may be empty
- the characters in the array strings may be mixxed upper.lower.leteters and numbers
- the control string will be 1 char or greater
- checking array strings against the control string chars will be cise sensitive
- string lengths may be different than the control string length.

Questions:
- will there always be exactly two arguments passed in? yes
- will the first arg always be am array? yes
- will the given string ever be sparse or contain an object property? no
- will the second arg always be a string? yes
- will the given array only contains strings? yes
- can the given array be empty? no
- can the strings in the array be empty? yes
- will the characters in the arrays strings only be letters and numbers? yes
- will the string characters always be all numbers, all letters, etc? no
- will the letters always be uppercase? no
- will the control string ever be empty? no
- is there a min/max number of characters the control string can be? 1 or greater
- when determining if a string matches the control are letters case sensitive? yes

DS:
- working with arrays for easy iteration
- working with arrays for processing strings
- mapping over the given array? 

Algo:
- map over the given array of strings
  - if the current string is a different length than the control 
    - return false
  - if the current string does not contain the same characters
    - split into arrays and sort
    - stringify both and conpare
    - return false
  - if the current string needs to swap more than 2 characters to match the control
    - set a count to 2 less than the control length
    - iterate over the characters of current string by index
      - if char of current matches the char of control at the current index
        - decrement count by 1
    - if count is > 0, return false
    - otherwise, return true
- return the transformed array
*/

function invalidChars(currentStr, control) {
  let currentChars = currentStr.split('').sort();
  let controlChars = control.split('').sort();

  return JSON.stringify(currentChars) !== JSON.stringify(controlChars)
}

function swapMoreThanTwoChars(currentStr, control) {
  let count = 0;

  for (let i = 0; i < control.length; i += 1) {
    if (currentStr[i] === control[i]) count += 1;
  }
  
  return ((count >= control.length - 2) ? false : true);
}

function validateSwaps(array, control) {
  return array.map(currentStr => {
    if (currentStr.length !== control.length) return false;
    if (invalidChars(currentStr, control)) return false;
    if (swapMoreThanTwoChars(currentStr, control)) return false;
    
    return true;
  });
}

console.log(validateSwaps([], "ABCDE"));                                   // []
console.log(validateSwaps(['AB', "ABC", "ABCD", 'ABDCE'], "ABCDE"));       // [false, false, false, true]
console.log(validateSwaps(["B", "E", "B", "A"], "A"));                     // [false, false, false, true]
console.log(validateSwaps(["BaCDE", "EBCDA", "BCDEA", "ACBED"], "aBCDE")); // [true, false, false, false]
console.log(validateSwaps(["", "EBCDA", "BCDEA", "ACBED"], "ABCDE"));      // [false, true, false, false]
console.log(validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE")); // [true, true, false, false]
console.log(validateSwaps(["32145", "12354", "15342", "12543"], "12345")); // [true, true, true, true]
console.log(validateSwaps(["9786", "9788", "97865", "7689"], "9768"));     // [true, false, false, false]

// Done in 1 hr
```

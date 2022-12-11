# Problem 4

```js
/*
You are given a list of numbers in a "short-hand" range where only the significant part of the next number is written because we know the numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

Your job is to return a list of complete numbers.

The possible separators are: ["-", ":", ".."]

"1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
"1-3, 1-2" --> 1, 2, 3, 11, 12
"1:5:2" --> 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
"104-2" --> 104, 105, 106, 107, 108, 109, 110, 111, 112
"104-02" --> 104, 105, ... 202
"545, 64:11" --> 545, 564, 565, .. 611

---------------------------------------------------

Input: 1 string
- the string will represent a series of number values
- individual numbers can be separated by commas and space characters
- if a ':' '-' or '..' is separating two number values that represents a range of number (inclusive)
- the number values are always ascending, therefore...
  - when a lower value number follows a higher value number, this signifies the lower value number should be prepended with the next highest value in the tens place
- the first number encounter will always be the starting value

Output: 1 string
- a ', ' separated list of the number values and ranges in the givens string
- all of the number values will be in ascending order based on their numeric value

Rules:
- create a list of all of the numbers and ranges within the given string, making sure to expand all of the values from their short-hand so that all numbers are in ascending order
  Expanding numbers from short-hand:
  - each number should be greater than the previous number
  - if a number isn't greater than the previous number it should be incremented by 10 until it is greater than the previous number
  - numbers are separated by commas (',')
  Ranges:
  - when encountering a ':', '-', or '..' the numbers on either side of these characters should be filled in. 
  - ranges are identified by: /\b[\d]+(-|:|..)\d+\b

Example:
given --> "1, 3, 7, 2, 4, 1"

currentVal --> 1 (first value given)
addedVal -> 10

is 1 > currentVal (1) ? --> yes --> 
is 3 > currentVal (1) ? --> yes --> 3
is 7 > currentVal ? (3) --> yes --> 7
is 2 > currentVal ? (7) --> no 
  is 2 + addedVal (10) > currentVal (7) --> yes --> 12
is 4 > currentVal(12) --> no 
  is 4 + addedVal (10) > currentVal (12) --> yes --> 14
is 1 > currentVal(14) --> no 
  is 1 + addedVal (10) > currentVal (12) --> no
    addedVal += 10
    is 4 + addedVal (20) > currentVal (12) --> yes --> 21

return "1, 3, 7, 12, 14, 21"

DS:
- split given string into an array of characters
- there will be a lot of coercion between string and number types

Algo:
- check if invalidInput 
- remove whitespace from the given string
- split the given string into an array of values delimited by comma (numChunks)
- declare a resultArr variable to an empty array
- declare a currentVal variable set to 0
- iterate through numChunks
  - if the current chunk contains range delimiters 
    - split at range delimiters
    - expand each numbers value (see below)
    - find all values within the range
  - if the current chunk is greater than the previous chunk
    - push current chunk to resultArr
  - if the current chunk is less than the previous chunk
    - increment the current chunks value by 10 until it is greater than the previous chunk
    - push updated chunk to resultArr

Expand each numbers value:
- if last element of resultArr is falsy
  - push current value to resultArr
- 

invalidInput:
- if the given argument is:
  - not a string
  - has no value passed in or is a string that contains no numeric values
    - return an empty string and log a console message
*/

const RANGE_DELIMITERS = [':', '-', '..']; 

function ascendingNums(string) {
  if (invalidInput(string)) return '';

  let strings = string.replace(/\s/g, '').split(',');
  let lastVal = 0;
  let resultArr = [];

  for (let i = 0; i < strings.length; i += 1) {
    if (strings[i].search(/(-|:|\.\.)+/) !== -1) {
      let range = strings[i].split(/[-:..]+/);
      let expandedRangeVals = range.map(currentVal => {
                                let num = Number(currentVal);
                              
                                while (lastVal >= num) {
                                  num += 10;
                                }
                                
                                return lastVal = num;
                              });

      console.log(expandedRangeVals)
    } 
  }
}

function invalidInput(input) {
  if (typeof input !== 'string' || !/\d/g.test(input)) {
    console.log("Invalid Input.")
    return true;
  }
  return false;
}

console.log(ascendingNums("50, 4..3, 9, 1-2, 7:8:1")) // "50, 54, 55,56, 57, 58, 59, 60, 61, 62, 63, 69, 71, 72, 77, 78, 79, 80, 81"

// console.log(invalidInput('12345') === false); 
// console.log(invalidInput(12345) === true);
// console.log(invalidInput() === true);
// console.log(invalidInput('') === true);
// console.log(invalidInput(':-..') === true);

// console.log(ascendingNums(12345)) // ''
// console.log(ascendingNums()) // ''
// console.log(ascendingNums('')) // ''
// console.log(ascendingNums(':-..')) // ''

// console.log(ascendingNums("5, 4, 3, 2, 1")) // 5, 14, 23, 32, 41
// console.log(ascendingNums("1, 3, 7, 2, 4, 1")) // 1, 3, 7, 12, 14, 21
// console.log(ascendingNums("1-3, 1-2")) // 1, 2, 3, 11, 12
// console.log(ascendingNums("1..3, 1:2")) // 1, 2, 3, 11, 12
// console.log(ascendingNums("1:5:2")) // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
// console.log(ascendingNums("500:400:300")) // 500, 410, 320
// console.log(ascendingNums("1-5-2")) // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
// console.log(ascendingNums("104-2")) // 104, 105, 106, 107, 108, 109, 110, 11112
// console.log(ascendingNums("104:2")) // 104, 105, 106, 107, 108, 109, 110, 11112
// console.log(ascendingNums("104..2")) // 104, 105, 106, 107, 108, 109, 110, 11112
// console.log(ascendingNums("104..02")) // 104, 105, 106, 107, 108, 109, 110, 11112
// console.log(ascendingNums("545, 64:11")) // 545, 564, 565, ... 611

```

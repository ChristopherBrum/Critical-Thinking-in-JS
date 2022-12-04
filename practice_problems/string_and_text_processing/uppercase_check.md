# Uppercase Check

```js
// Write a function that takes a string argument and returns true if all of the alphabetic characters inside the string are uppercase; otherwise, return false. Ignore characters that are not alphabetic.

/*
Input: 1 string
- string can be empty
- can contain non-alphabetical characters

Output: true / false 
- return value is based on whether the alphabetical characters are all upcased

Rules:
- ignore any character that is non-alphabetical
- if the given string is empty, return true

Goal: create a function that takes one string as an argument and returns true if all of the alphabetical characters within the given string are capitalized.

Algo:
- split the given string in to an array of characters
- iterate through the array
  - if current element upcased if a letter between A-Z AND
  - the current character upcased is the same as the current character not upcased
    - return false
  - if entire array is iterated through without returning, return true

*/

function isUppercase(string) {
  let stringArray = string.split('');
  for (let i = 0; i < stringArray.length; i += 1) {
    if (/[a-zA-Z]/g.test(stringArray[i]) &&
        stringArray[i].toUpperCase() !== stringArray[i]) {
          return false;
        }
  }
  return true;
}

// Alternate solution

function isUppercase(string) {
  return /[a-z]/.test(string);
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
```

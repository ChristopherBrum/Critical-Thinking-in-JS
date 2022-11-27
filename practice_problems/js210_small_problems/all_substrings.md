# All Substrings

```js
// Write a function that returns a list of all substrings of a string. Order the returned list by where in the string the substring begins. This means that all substrings that start at index position 0 should come first, then all substrings that start at index position 1, and so on. Since multiple substrings will occur at each position, return the substrings at a given index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the previous exercise:

/*
Problem
Explicit Rules:
- write a function that takes one string argument
- return an array of all of the consecutive substrings of the given string
- the substrings should be ordered by the first characters index in the given string and their length

Implicit Rules:
- given string shall not be empty
- given string will contain lowercase alphabetical letters

DS
Input: 1 string, of alphabetical letters
Output: 1 array, of substrings
Intermediate:
- strings and arrays as inputs/outputs
- numbers for indexes

Goal: Write a function that takes one string and returns an array containing all of the substrings of the given string

Abstractions:
- mapping will be used to return substrings starting at a specific index
- mapping to transform sliced portions of given array to array of substrings

Algo:
- split string into an array of characters
- map through the array of characters
  - slice from the current index to the end of the array
  - pass sliced array to leadingSubstrings to capture all substrings of this sliced segment
- flatten the transformed array and return
*/

function leadingSubstrings(string) {
  let arr = string.split('');
  return arr.map((_, index) => arr.slice(0, index + 1).join('') );
}

function substrings(s) {
  return s.split('')
          .map((_, index) => leadingSubstrings(s.substring(index)))
          .flat();
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
```

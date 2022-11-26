# Leading Substring

```js
// Write a function that takes a string argument and returns a list of substrings of that string. Each substring should begin with the first letter of the word, and the list should be ordered from shortest to longest.

/*
Problem:
Explicit Rules:
- write a function that takes one string argument
- the function should return a list of all substrings of the given string
- each substring will begin with the first letter of the given string
- the substrings should be ordered shortest to longest

Implicit Rules:
- given strings will not be empty (?)
- given string will contain lowercase alphabetical characters

DS
Input: string, of alphabetical characters
Output: an array, of substrings
Intermediate:
- numbers for indexes
- splitting given string into array (?)
- booleans for comparison

Goal: Write a function that takes one string argument and return an array containing all the substrings starting withy the first character from shortest to longest

Abstractions:
- Mapping can be used to slice a substring from index 0 to current index 

Algo:
- split given string into an array
- iterate over the array using transformation
  - slice the given string from index 0 to the current index and return the sliced string
- return the transformed array of substring
*/

function leadingSubstrings(string) {
  let arr = string.split('');
  return arr.map((el, index) => arr.slice(0, index + 1).join('') );
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
```
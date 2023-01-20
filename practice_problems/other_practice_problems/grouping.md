# Grouping

```js
/*
Write a function that groups words by the number of capital letters and returns an array of object entries whose keys are the number of capital letters and the values are the groups.

Notes
The object entries have to be sorted by the number of capital letters.
The groups will be arrays of all words sharing the same number of capital letters.
The groups have to be sorted alphabetically (ignoring case).
Words will be unique.

---------------------------------------------
Input: 1 array
- the arrtay will contains string elements

Output: 1 array
- nested arrays
- each nested array will have a number representing the count of capital letters, followed b y an array of the strings with that number of capitals
- the nested arrays/entries will be sorted according to the number of capitals
- the string groupsa will be sorted alphabetically

Rules:
- take an array as an argument, return an array of object entries representing the count of capitals and the associated strings 
- when sorting the string groups they should ignore case
- each word in the given array will be unique

Implicit Rules:
- there does not have to be uppercase letters in a string
- the strings in the string groups will retain their original case
- if the given array is empty, return an empty array

Questions:
- will there always be 1 arg passed in? yes
- will the arg always be an array? yes
- can the array be sparse? no
- can the array be empty? yes, return an empty array
- can the given strings be empty? no
- can there be non-alphabetical letters in the strings? no

DS:
- working with arrays for string processing
- working with obects to group like strings and capital counts

Algo:
- declare a count variable set to an empty object
- iterate over the given array of strings
  - match all capital letters in the current string
  - find the total of match, if falsy set to 0
  - if the total is already a property in count, push the string to the value array
  - otherwise set the total as a prop and the value to an array with the string within it
- find the entries of the object and return within an array

*/

function grouping(array) {
  let count = {};

  array.forEach(string => {
    let matches = string.match(/[A-Z]/g) || [];
    let totalMatches = matches.length;

    count[totalMatches] = count[totalMatches] || [];
    count[totalMatches].push(string)
  });

  return Object.entries(count);
}

console.log(grouping([])); // []
console.log(grouping(["HaPPy", "mOOdy", "yummy", "mayBE"])); // [
//   [0, ["yummy"]],
//   [2, ["mayBE", "mOOdy"]],
//   [3, ["HaPPy"]]
// ]

console.log(grouping(["eeny", "meeny", "miny", "moe"])); // [
//   [0, ["eeny", "meeny", "miny", "moe"]]
// ]

console.log(grouping(["FORe", "MoR", "bOR", "tOR", "sOr", "lor"])); // [
//   [0, ["lor"]],
//   [1, ["sOr"]],
//   [2, ["bOR", "MoR", "tOR"]],
//   [3, ["FORe"]]
// ]

// Done in 23 minutes
```

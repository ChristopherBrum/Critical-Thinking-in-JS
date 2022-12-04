# Remove Vowel

```js
// Write a function that takes an array of strings and returns an array of the same string values, but with all vowels (a, e, i, o, u) removed.

/*
Input: 1 array (of strings)
- strings can contain alphabetical characters
- strings can have upper and lowercase letters
- can the given strings contain characters other than alphabetical characters?

Output: 1 array (of strings with vowel characters removed)
- preserves case of characters
- strings in array are in the same order

Example:
given array --> ['green', 'YELLOW', 'black', 'white']

'green' --> 'grn'
'YELLOW' --> 'YLLW'
'black' --> 'blck'
'white' --> 'wht'

DS:
- arrays will be given
- strings will be contained within the array
- we will split the strings into arrays/join the arrays into strings (?)
- RegExp to isolate non-vowel characters

Goal: write a function that takes an array of strings and transform the strings so that all vowel characters are removed, return the transformed array of strings.

Algo:
- map through the array of strings
  - match all characters that are not vowel characters
  - join the returned array
- return the transformed array

*/

function removeVowels(array) {
  return array.map (string => {
           let nonVowels = string.match(/[^aeiou]/ig);
           return nonVowels ? nonVowels.join('') : '';
         });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
```

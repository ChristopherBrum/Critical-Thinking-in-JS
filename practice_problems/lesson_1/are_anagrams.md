# Are Anagrams

```js
// Write a Function named anagram that takes two arguments: a word and an array of words. Your function should return an array that contains all the words from the array argument that are anagrams of the word argument. For example, given the word "listen" and an array of candidate words like "enlist", "google", "inlets", and "banana", the program should return an array that contains "enlist" and "inlets".

/*
Problem
- create a function that takes two arguments
  - a string
  - and an array of strings
- return a new array that contains all of the strings within the given array that are anagrams of the given string

Example
arguments -> 'listen', ['enlists', 'google', 'inlets', 'banana']
returned -> ['enlists', 'inlets']

DS
Input: a string and an array of strings
Output: an array
- splitting strings into arrays
- joining arrays into strings
- booleans for comparison

Abstractions
- filtering the given array for anagrams of the given string
- sorting to compare different strings for anagram status

Algo
- split, sort, and join the given string (given)
- iterate through given array to filter the elements
  - split, sort, and join the current element (potentialAnagram)
  - compare potentialAnagram with given
- return filtered array

*/

function anagram(word, list) {
  let givenStr = word.split('').sort().join('');
  let filtered = list.filter(potentialAnagram => {
    potentialAnagram = potentialAnagram.split('').sort().join('');
    return potentialAnagram === givenStr;
  });

  return filtered
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
```

## Alternative Solution

```js
function areAnagrams(word1, word2) {
  word1 = word1.split('').sort().join('');
  word2 = word2.split('').sort().join('');
  return word1 === word2;
}

function anagram(word, list) {
  let filtered = list.filter(currentWord => {
    return areAnagrams(word, currentWord);
  });

  return filtered
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
```

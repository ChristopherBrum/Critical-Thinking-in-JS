# How Long Are You

```js
// Write a function that takes a string as an argument and returns an array that contains every word from the string, with each word followed by a space and the word's length. If the argument is an empty string or if no argument is passed, the function should return an empty array.

// You may assume that every pair of words in the string will be separated by a single space.

/*
Input: 1 string
- a word is any series of characters separated by a single space
- an empty string and no argument are considered valid 

Output: 1 array
- the array should contain each word of the given string as an element
- each word should have a space and the words length concatenated to itself
- if the given string is empty, return an empty array
- if no argument is passed in, return an empty array

Explicit Rules:
- write a function that takes one string as an argument
- the function should return an array containing each word within the given string with a space and its length concatenated to it
- a word is considered any sequential characters in the given string separated by a single space
- if the given string is empty return an empty array

Implicit Rules:
- a word can start, end, or contain non-letter characters
- function should return an empty array if no argument is passed in

Example:
given --> 'cow sheep chicken'
cow --> length of 3
sheep --> length of 5
chicken --> length of 7

returns --> ["cow 3", "sheep 5", "chicken 7"]

Algo:
--> function --> wordLengths(string) --> array
  - split the given string into words using a single space as a delimiter
  - map over the array of words
    - return the word concatenated with a blank space and it's own length
  - return the transformed array
*/

function wordLengths(string = '') {
  if (string === '') return [];
  return string.split(' ')
               .map(word => word + ' ' + String(word.length));
}

console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []
```

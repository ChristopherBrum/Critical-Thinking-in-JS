# Word to Digit

```js
/*
Write a function that takes a sentence string as an argument and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

Input: 1 string
- string will contain a series of words, some of which will correspond to number values

Output: 1 string
- any word corresponding to a number should have the number value swapped in
- 

Rules:
Explicit:
- write a function that takes a string as an argument
- the string should have all "word numbers" swapped out for the actual number value
- all other words/characters in the given string should remain the same

Implicit:
- words will be delimited by spaces
- words can contain punctuation or periods
- any periods attached to number words should be maintained after swapped to number values
- make sure words that contain a "word number" aren't swapped

Questions:
Invalid input:
- how do we handle...
  - non-string args
    return undefined
  - no arg passed in
    return undefined
  - strings with no "word numbers"
    return the given string

DS:
- ins/outs: both strings
- splitting given string into an array of words
- working with an array of "number words"

Algo:
--> function --> wordToDigit(string) --> string
  - declare a constant of number words (NUM_WORDS)
  - if argument is not a string, return undefined
  - declare a swapped variable
  - iterate through NUM_WORDS
    - replace all instances of the current number word within the given string
  - return swapped 
*/

function wordToDigit(string) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  if (typeof string !== 'string') return undefined;

  NUMBER_WORDS.forEach((numberWord, idx) => {
    string = string.replace(new RegExp('\\b' + numberWord + '\\b', 'g'), String(idx));
  });

  return string;
};

console.log(wordToDigit()); // undefined
console.log(wordToDigit([])); // undefined
console.log(wordToDigit(123)); // undefined
console.log(wordToDigit(null)); // undefined
console.log(wordToDigit('Don\'t call, just text me.')); 
// "Don't call, just text me.""
console.log(wordToDigit('I need to hone my skills.')); 
// 'I need to hone my skills.'
console.log(wordToDigit('My niece will be five years old in May!')); 
// 'My niece will be 5 years old in May!'
console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
```

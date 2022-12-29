# Is Block Word

```js
/*
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument and returns true if the word can be spelled using the set of blocks, false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

-------------------------------
Input: 1 string 
- input should be a "word" string
  - a word string is a string comprised of alphabetical characters
  - alphabetical characters can be upper and lowercase

Output: 1 boolean value
- determines whether the word string only uses characters from each letter pair only once

Rules:
- funtion determines whether the given string is comprised of characters only found once in each pair of the given pairs collection.
- each letter corresponds to a different letter form the alphabet
- only one of the charatcers eacgh letter pair can be used to consider the word valid
- if the letters of the given string are only found in each letter pair once, return true, otherwise, return false.

Questions:
- Will the given string always contain letter characters only?
  No, return false if non-letter characters are present
- Will an argument always be given?
  no, return undefined if no arg is given
- What should I do if a different type is passed in?
  return undefined if a different type is given

DS:
- ins: string
- outs: boolean
- intermediate: 
  - split given string into array to test the characters against the pairs block

Algo:
- return undefined if...
  - given arg is not a string
- return false if...
  - given string contains non-letter characters

- declare a 'pairs' array containing all of the matching letter pairs
- declare a usedChars variable set to an empty array
- split the given string into an array
- iterate over the array of characters
  - ityerate over PAIRS 
    - if current character upcased is found within the usedChars array
      - return false
    - otherwise
      - push the character and its pair to usedChars
- return true

*/

function isBlockWord(word) {
  const PAIRS = [
    ['B', 'O'],   ['X', 'K'],   ['D', 'Q'],   ['C', 'P'],   ['N', 'A'],
    ['G', 'T'],   ['R', 'E'],   ['F', 'S'],   ['J', 'W'],   ['H', 'U'],
    ['V', 'I'],   ['L', 'Y'],   ['Z', 'M']
  ];

  if (invalidType(word)) return undefined;
  if (invalidString(word)) return false;

  let usedChars = [];
  let chars = word.toUpperCase().split('');

  for (let i = 0; i < chars.length; i += 1) {
    if (usedChars.includes(chars[i])) return false;
    
    for (let j = 0; j < PAIRS.length; j += 1) {
      if (PAIRS[j].includes(chars[i])) {
        usedChars.push(...PAIRS[j])
      }
    }    
  }
  return true;
}

function invalidType(value) {
  return typeof value !== 'string';
}

function invalidString(string) {
  return /[^a-z]/i.test(string);
}

console.log(isBlockWord());      // undefined
console.log(isBlockWord(1234));  // undefined
console.log(isBlockWord([]));    // undefined
console.log(isBlockWord({}));    // undefined

console.log(isBlockWord('AbC123'));     // false
console.log(isBlockWord('a b c d'));    // false

console.log(isBlockWord('BaTcH'));      // true
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
```

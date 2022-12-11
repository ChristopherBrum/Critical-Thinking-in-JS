# Problem 3

```js
/*
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

---------------------------------------------

Input: 1 string
- the given string will consists of upper and lowercase alphabetical characters
- any non-string character should return false and log a message to the console
- if given string is empty , return true

Output: boolean
- returns true or false based on the rules surrounding the character pairs

Rules:
- write a function that takes one string argument
- function returns true if:
  - only both characters in each character pair are not found in the given string
  - only each character pair is matched no more than once
- return false otherwise
- all characters in character pairs are uppercase
- must take case into account when matching characters in the character pairs collection

characterPairs = [ 
  ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
  ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
  ['V', 'I'], ['L', 'Y'], ['Z', 'M']
]

Example:
given -> 'BATCH'
usedChars = []

is 'B' found within usedChars ? --> no
usedChars --> ['B', 'O']

is 'U' found with usedChars ? --> no
usedChars --> ['B', 'O', 'N', 'A']

us 'T' found within usedChars ? --> no
usedChars --> ['B', 'O', 'N', 'A', 'G', 'T']

is 'C' found within usedChars ? --> no
usedChars --> ['B', 'O', 'N', 'A', 'G', 'T', 'C', 'P']

is 'H' found within usedChars ? --> no
usedChars --> ['B', 'O', 'N', 'A', 'G', 'T', 'C', 'P', 'H', 'U']

return true

---

given -> 'BUTCH'
usedChars = []

is 'B' found within usedChars ? --> no
usedChars --> ['B', 'O']

is 'U' found with usedChars ? --> no
usedChars --> ['B', 'O', 'H', 'U']

us 'T' found within usedChars ? --> no
usedChars --> ['B', 'O', 'H', 'U', 'G', 'T']

is 'C' found within usedChars ? --> no
usedChars --> ['B', 'O', 'H', 'U', 'G', 'T', 'C', 'P']

is 'H' found within usedChars ? --> yes
return false


Questions:
- Are only alphabetical characters allowed in the given string?
  only letter characters will be used
- Do we need to take any other data type being passed in as an argument into account?
  yes, return false and log a message to the console
- How do we handle non-string types passed as arguments?
  return false and log a message to the console
- What is a collection of spelling blocks? how can I represent this?
  a nested array with value pairs in the inner array

DS:
- arrays to represent the character pairs

Goal: write a function that takes a string as an argument and determines whether the string characters are found in each character pair more than once, and whether each character pair is found in the string. 

Algo:
- if arg is not a string return false and log message
- declare a variable set to an empty array (usedChars)
- upcase the given string 
- split the string into an array of characters
- iterate through the array of characters
  - if the current character is found within usedChars
    - return false
  - otherwise
    - find the matching pair of characters from characterPairs and push the chars to usedChars
      - iterate through PAIRS
        - if the current pair contains the current element
          - push contents of pair into userChars
- return true
*/

const PAIRS = [ 
  ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
  ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
  ['V', 'I'], ['L', 'Y'], ['Z', 'M']
]


function isBlockWord(string) {
  if (typeof string !== 'string') {
    console.log('The argument passed in is not a string.')
    return false;
  }

  let usedChars = [];
  string =  string.toUpperCase();
  
  for (let i = 0; i < string.length; i++) {
    if (usedChars.includes(string[i])) return false;
    
    for (let j = 0; j < PAIRS.length; j++) {
      if (PAIRS[j].includes(string[i])) usedChars.push(...PAIRS[j]);
    }
  }

  return true;
}

console.log(isBlockWord(1234));         // false (with message in console)
console.log(isBlockWord(''));           // true
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('only'));       // false
console.log(isBlockWord('abc'));        // true
console.log(isBlockWord('abcn'));       // false
```
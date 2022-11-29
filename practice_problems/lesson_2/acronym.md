# Acronym

```js
// Write a function that generates and returns an acronym from a string of words. For example, the function should return "PNG" for the string "Portable Network Graphics". Count compound words (words connected with a dash) as separate words.

/*
Problem
Explicit Rules:
- write a function that takes one string as an argument
- returns a new string that is an acronym of the the given string
  - for example, the given string is 'Hello There Friend'
  - the returned acronym would be `HTF'
- Words can be delimited by a space(' ') or a hyphen('-')

Implicit Rules:
- strings inout can contains alphanumeric and special characters
- only ' ' and '-' will delimit the start/end of a word
- regardless of the case of the given strings characters, the acronym will be all uppercase

DS:
Input: String
Output: String
- splitting string into an array
- working with RegEx 
- using numbers for indexes (?)

Goal: Write a function that takes a string as an argument and creates an acronym from the given string. Strings will be delimited by a space or hyphen character. Each character in the returned string will uppercase. 

Abstractions:
- process the given to create a new array of words using RegEx
- transforming the array to gather the appropriate characters to construct our acronym

Algo:
--> function --> acronym(string) --> string (new)
  - split given string into an array of words, using ' ' or '-' to delimter words in the given string
  - map through the array
    - return the character at index for each element, upcased
  - join the transformed array and return
*/

function acronym(string) {
  let words = string.split(/[ -]/);
  let firstLetters = words.map(word => word[0].toUpperCase());
  return firstLetters.join('');
}

// more concise syntax

function acronym(string) {
  return  string.replace(/-/, ' ')
                .split(' ')
                .map(word => word[0].toUpperCase())     
                .join('');  
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"
```

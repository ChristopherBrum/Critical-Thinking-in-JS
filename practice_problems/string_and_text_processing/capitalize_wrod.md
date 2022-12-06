# Capitalize Word

```js
// Write a function that takes a string as an argument and returns that string with the first character of every word capitalized and all subsequent characters in lowercase.

// You may assume that a word is any sequence of non-whitespace characters.

/*
Input: 1 string
- characters can consist of any character type (?)

Output: 1 string
- the first character of each word should be upcased
- the remaining characters should be downcased
- a 'word' will be delimited by whitespace character(s)
- a 'word' can begin with a non-alphabetical character

Rules:
- write a function that takes one string argument
- capitalize the first character of each word and downcase the remaining characters
- a 'word' is considered any sequence of non-whitespace characters
- a 'word' can begin with a non-alphabetical character

Questions:
- can characters consist of any character type (?)
- are empty strings an acceptable input?
- what should the function return if the given string is empty or doesn't contain whitespace characters?

Example:
'four score and seven'

four, score, and, seven
Four
      Score
             And
                  Seven

return --> 'Four Score And Seven'

DS:
- split given string into an array of words, delimited by one or more whitespace characters
- utilize RegExp to determine characters case or character type

Algo:
--> function --> wordCap(string) --> string
  - split the given string into an array of words, delimited by one or more whitespace characters
  - map over the array of words
    - return the first character upcased concatenated to the remaining sliced string downcased
  - join the transformed array and return
*/

function wordCap(string) {
  return string.match(/[\S]+/g)
               .map(word => word[0].toUpperCase() + word.slice(1))
               .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
```

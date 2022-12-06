# Staggered Caps Pt 1

```js
// Write a function that takes a string as an argument and returns that string with a staggered capitalization scheme. Every other character, starting from the first, should be capitalized and should be followed by a lowercase or non-alphabetic character. Non-alphabetic characters should not be changed, but should be counted as characters for determining when to switch between upper and lower case.

/*
Input: 1 string
- can contain any character type (?)

Output: 1 string 
- output string will have the alphabetical characters case staggered
- first character will be capitalized
- second character will be downcased
- and so on...
- non-alphabetical characters will remain the same but are considered when determining which subsequent characters should be upper or lowercase

Questions:
- Can given string contain any character type?
- is an empty string a valid input?
- What is the return value of the given string being empty?
- any other argument types we need to take into consideration?

Explicit Rules:
- write a function that takes a string as an argument
- return a string with each characters case swapped if the character is an alphabetical character
- starting with the first character
  - capitalize the character (if applicable)
  - for the next character downcase (if applicable)
- non-alphabetical characters will remain the same

Implicit Rules:
- case will be determined by the index being even or odd and by the character type

Example:
given --> "ALL_CAPS"
           A index 0 --> capitalize --> A
            L index 1 --> downcase --> l
             L index 2 --> capitalize --> L
              _ index 3 --> non-letter --> _
               C index 4 --> capitalize --> C
                A index 5 --> downcase --> a
                 P index 6 --> capitalize --> P
                  S index 7 --> downcase --> s
          
          return --> "AlL_CaPs"

DS:
- split given string into an array
- numbers for indexes
- booleans for comparison

Algo:
--> function --> staggeredCase(string) --> string
  - split given string into an array of characters
  - map over the array of characters
    - if the current index is zero or an even number
      - upcase and return current character
    - otherwise
      - downcase and return current character
  - join transformed array and return
*/

function staggeredCase(string) {
  return string.split('')
               .map((char, i) => {
                 if (i % 2 === 0) {
                   return char.toUpperCase();
                 } else {
                  return char.toLowerCase();
                 }
               })
               .join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
```

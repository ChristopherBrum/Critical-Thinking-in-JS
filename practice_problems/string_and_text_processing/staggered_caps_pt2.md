# Staggered Caps Pt 2

```js
// Modify the function from the previous exercise so that it ignores non-alphabetic characters when determining whether a letter should be upper or lower case. Non-alphabetic characters should still be included in the output string, but should not be counted when determining the appropriate case.

/*
Input: 1 string
- can contain any character type (?)

Output: 1 string 
- output string will have the alphabetical characters case staggered
- first alphabetical character will be capitalized
- second alphabetical character will be downcased
- and so on...
- non-alphabetical characters will remain the same and are NOT considered when determining which subsequent characters should be upper or lowercase

Questions:
- Can given string contain any character type?
- is an empty string a valid input?
- What is the return value of the given string being empty?
- any other argument types we need to take into consideration?

Explicit Rules:
- write a function that takes a string as an argument
- return a string with each characters case swapped if the character is an alphabetical character
- starting with the first character
- the first alphabetical character in the string should be capitalized
- the next alphabetical character in the string should be downcased
- each alphabetical character should be up or downcased back and forth accordingly
- non alphabetical characters should be ignored

Implicit Rules:
- case will be determined by the the order of alphabetical characters

Example:
given --> "ALL_CAPS"
           A index 0 --> capitalize --> A
            L index 1 --> downcase --> l
             L index 2 --> capitalize --> L
              _ index 3 --> ignore --> _
               C index 4 --> downcase --> c
                A index 5 --> capitalize --> A
                 P index 6 --> downcase --> p
                  S index 7 --> capitalize --> S
          
          return --> "AlL_CApS"

DS:
- split given string into an array
- numbers for indexes
- booleans for comparison
- boolean for tracking case

Algo:
--> function --> staggeredCase(string) --> string
  - match all of the letter characters from the given string
  - map over the array of characters
    - if the current index is zero or an even number
      - upcase and return current character
    - otherwise
      - downcase and return current character
  - split the given string into an array 
  - map over the array
    - if the current character is an alphabetical character
      - return the first character of the matches array and remove
    - if the current character is NOT an alphabetical character
      - return the current character
  - join transformed array and return
*/

function staggeredCase(string) {
  let letters = string.match(/[a-z]/ig);
  letters = adjustCase(letters)
  
  return string.split('').map(char => {
           if (/[a-z]/i.test(char)) {
             return letters.splice(0, 1)[0];
           } else {
             return char;
           }
         }).join('');
}

function adjustCase(array) {
  return array.map((char, i) => {
           if (i % 2 === 0) {
             return char.toUpperCase();
           } else {
             return char.toLowerCase();
           }
         });
}

console.log(staggeredCase('I Love Launch School!') === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase('ALL CAPS') === "AlL cApS");
console.log(staggeredCase('ignore 77 the 444 numbers') === "IgNoRe 77 ThE 444 nUmBeRs");
```

# Swap Case

```js
// Write a function that takes a string as an argument and returns that string with every lowercase letter changed to uppercase and every uppercase letter changed to lowercase. Leave all other characters unchanged.

/*
Input: 1 string
- string can contain any character type
- alphabetical characters can contain upper and lowercase characters

Output: 1 string
- returned string will contain the same characters as the given string with the alphabetical characters swapped 

Explicit Rules:
- write a function that takes on string as an argument
- change lowercased alphabetical characters to uppercase
- change uppercased alphabetical characters to lowercase
- leave non-alphabetical characters the same

Implicit Rules/Questions:
- argument will always be a string (?)
- if an empty string is given, what is the return value?

Examples:
given --> CamelCase
          c
           A
            M
             E
              L
               c
                A
                 S
                  E
returned --> cAMELcASE                  

DS:
- splitting given string into an array of characters
- Utilizing RegExp to determine the case and/or type of character

Algo:
--> function --> swapCase(string) --> string
  - split given string into an array of characters
  - map over the array 
    - if current character is an uppercase letter
      - downcase current character and return
    - if current character is an lowercase letter
      - upcase current character and return
    - otherwise
      - return current character
  - join transformed array and return
*/

function swapCase(string) {
  return string.split('')
               .map(char => {
                 if (/[A-Z]/.test(char)) return char.toLowerCase();
                 if (/[a-z]/.test(char)) return char.toUpperCase();
                 return char;
               })
               .join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
```

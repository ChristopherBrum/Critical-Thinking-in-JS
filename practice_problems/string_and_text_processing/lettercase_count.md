# Lettercase Count

```js
// Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.

/*
Input: 1 string
- givens string can be empty
- can contain alphanumeric and special characters

Output: 1 object
- the object will have 3 properties
  - the number of characters that are lowercase (lowercase)
  - the number of characters that are uppercase (uppercase)
  - the number of characters that are neither (neither)
- if given string is empty the object properties will all be 0

Rules:
- write a function that takes 1 string as an argument
- process the characters in the given string and determine the number of characters that:
  - are lowercase alphabetical characters
  - are uppercase alphabetical characters
  - are neither upper or lowercase alphabetical characters
- the given string can be empty
- the argument passed in will always be a string (?)

Example:
given --> 'AbCd +Ef'

AbCd +Ef
U
 L
  U
   L
    N
     N
      U
       L

U --> 3
L --> 3
N --> 2

return --> { lowercase: 3, uppercase: 3, neither: 2 }

DS:
- given a string array we'll need to split this into an array of characters
- a new object will be needed to serve as a counter for the occurrences of each upper and lowercase letter, and those that are non-alphabetical

Algo:
--> function --> letterCaseCount(string) --> object
  - declare a variable to an object (charCount) with 3 properties set to 0 (uppercase, lowercase, neither)
  - split the given string into an array of characters
  - iterate through the array of characters
    - if the current char is an uppercase letter
      - increment the value of the uppercase property in charCount by 1
    - if the current char is a lowercase letter
      - increment the value of the lowercase property in charCount by 1 
    - if the current char is neither
      - increment the value of the neither property in charCount by 1
  - return charCount

ALTERNATIVE
--> function --> letterCaseCount(string) --> object
  - declare variable 'charCount' to an empty object 
  - match all of the lowercase alphabetical characters
    - set the number of lowercase alphabetical characters as the value to the property 'lowercase'
  - match all of the uppercase alphabetical characters
    - set the number of uppercase alphabetical characters as the value to the property 'uppercase'
  - match all of the non alphabetical characters
    - set the number of non alphabetical characters as the value to the property 'neither'
  - return charCount

*/

function letterCaseCount(string) {
  let charCount = {};
  let lowercaseChars = string.match(/[a-z]/g)
  let uppercaseChars = string.match(/[A-Z]/g)
  let nonLetterChars = string.match(/[^a-zA-Z]/g)
  
  charCount.lowercase = (lowercaseChars ? lowercaseChars.length : 0);
  charCount.uppercase = (uppercaseChars ? uppercaseChars.length : 0);
  charCount.neither = (nonLetterChars ? nonLetterChars.length : 0);

  return charCount;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
```

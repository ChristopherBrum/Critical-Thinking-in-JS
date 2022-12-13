# Distance To Nearest Vowel

```js
/*
Write a function that takes in a string and for each character, returns the distance to the nearest vowel in the string. If the character is a vowel itself, return 0.

Notes
All input strings will contain at least one vowel.
Strings will be lowercased.
Vowels are: a, e, i, o, u.

-------------------------

Input: 1 string
- the string should contain alphabetical characters
- will contain at least 1 vowel
- strings will be lowercased

Output: 1 Array
- will be the same length as the given string
- each element will correspond to the character at the same index and its distance from the closest vowel

Rules:
Explicit:
- take the given string and determine the distance each character is from the nearest vowel character
  - if the current character is a vowel, return 0
  - otherwise it will calculate the distance (left or right) of the nearest vowel
- return an empty array ifd the given string is empty

Implicit:

Questions:
- Will the given string ONLY have alpha characters?
- Invalid inputs:
  - return undefined if 
    - arg is excluded 
    - not of string type

DS:
- split string into an array of characters

Example:

given --> "babbb"

b not a vowel
check if b - 1 or b + 1 character is found in VOWELS
undefined, 'a'


Algo:
- declare a VOWELS variable
- if argument is invalid, return undefined
- split argument string into array of characters
- map through the array of characters with idx
  - declare distanceFromVowel to 0
  - if current character is included in VOWELS, return distanceFromVowel
  - iterate until index + distanceFromVowel (or minus) are both undefined
    - increment distanceFromVowel
    - check to see if either character is a vowel
      - if so return distanceFromVowel
- return the transformed array
*/

function distanceToNearestVowel(str) {
  if (typeof str !== 'string') return undefined;
  
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  let chars = str.split('');
  
  return chars.map((char, idx) => {
           if (VOWELS.includes(char)) return 0;
          
           for (let distance = 1; distance < chars.length; distance += 1) {
             let greaterIdx = VOWELS.includes(chars[idx + distance]);
             let lesserIdx = VOWELS.includes(chars[idx - distance]);
             
             if (greaterIdx || lesserIdx) return distance;
           }
         });
}

console.log(distanceToNearestVowel()); // undefined
console.log(distanceToNearestVowel([])); // undefined
console.log(distanceToNearestVowel(123)); // undefined
console.log(distanceToNearestVowel(null)); // undefined

console.log(distanceToNearestVowel('')); // []

console.log(distanceToNearestVowel("aaaaa")); //➞ [0, 0, 0, 0, 0]
console.log(distanceToNearestVowel("babbb")); //➞ [1, 0, 1, 2, 3]
console.log(distanceToNearestVowel("abcdabcd")); //➞ [0, 1, 2, 1, 0, 1, 2, 3]
console.log(distanceToNearestVowel("shopper")); //➞ [2, 1, 0, 1, 1, 0, 1]
```

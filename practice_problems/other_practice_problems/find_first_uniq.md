# Find First Unique

```js
/*
Exercise 4
Write a function that returns the first non-duplicated character in a string.

For example, the string "minimum" has two characters that only exist once-the "n" and the "u", so your function should return the "n", since it occurs first.

Note
The function time complexity should be O(N).

------------------------
Input: 1 string

Output: 1 string
- the first unique character in the string

Rules:
- find the first non-repeating character of the given string and return

Questions:
- There will always be 1 arg
- The arg may be other types, if so return undefined 
- If the string is empty, return an empty string
- The string can contain any character, ignore non-letter characters
- The given string will always contain at least one non-duplicated character
- The given string is case sensitive

Algo:
- return undefined if the given arg is not a string
- return '' if the given string is empty

- declare an empty object to a variable
- iterate through the given string  
  - set the current char as a key in the object if it is a letter character
  - increment value by 1 for each occurrence
- iterate through the array of keys and filter any values that are greater than 1
- return the first value in the remaining keys array
*/

const invalidType = arg => typeof arg !== 'string';

function findFirstUniq(string) {
  if (invalidType(string)) return undefined;
  if (string.length === 0) return ''

  let charCount = {};

  for (let i = 0; i < string.length; i += 1) {
    if (/[a-z]/i.test(string[i])) {
      charCount[string[i]] = charCount[string[i]] || 0;
      charCount[string[i]] += 1;
    }
  }

  let uniques = Object.keys(charCount).filter(key => charCount[key] === 1);
  return uniques[0]
}

console.log(findFirstUniq([])); // undefined
console.log(findFirstUniq("") === "");
console.log(findFirstUniq("m.i.n.i.m.u.m")); // "n"
console.log(findFirstUniq("minimum")); // "n"
console.log(findFirstUniq("miNimun")); // "N"
console.log(findFirstUniq("abcdabc")); // "d"
console.log(findFirstUniq("minimun")); // "u"
```

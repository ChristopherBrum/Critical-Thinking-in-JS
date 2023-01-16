# Recurring INdex

```js
/* 
Create a function that identifies the very first item that has recurred in the string argument passed. It returns the identified item with the index where it first appeared and the very next index where it resurfaced -- entirely as an object; or as an empty object if the passed argument is either null, undefined, empty string, or no recurring item exists.

Examples
recurIndex("DXTDXTXDTXD") ➞ {"D": [0, 3]}
// D first appeared at index 0, resurfaced at index 3
// T appeared and resurfaced at indices 3 and 6 but D completed the cycle first

recurIndex("YXZXYTUVXWV") ➞ {"X": [1, 3]}

recurIndex("YZTTZMNERXE") ➞ {"T": [2, 3]}

recurIndex("AREDCBSDERD") ➞ {"D": [3, 7]}

recurIndex("") ➞ {}

recurIndex(null) ➞ {}
Notes
You can solve this challenge via a recursive approach, alternatively.
A recursive version of this challenge can be found here.

------------------------------------------------
Input: 1 string
- 

Output: 1 Object
- will be empty if the arg is undefined, null, an empty string, or the empty string does doesn't have repeating characters
- otherwise
  - object property name --> the first repeated letter character
  - object value --> an array containing the first and second indexes of the letter

Questions:
- Will there always be an arg passed in? 
  no, but the value of the parameter will only be one of the specified values above
- Can there be any other type of argument passed? If so, how do I handle that?
  no
- Are there any other length restrictions of the string arg?
  no
- Will the string arg always be comprised of letter characters only?
  yes
- Will the letter characters always be uppercased?
  yes

Rules:
- take a string and identify the FIRST character that repeats in the string
- return an object with the repeated character and the indexes of its first two occurrences contained as property key and values (in an array)
- return an empty array if
  - the argument is empty
  - the arg is undefined, null, or an empty string
  - the arg contains no repeating characters

DS:
- utilize a Set to determine if the given string contains any repeating characters
- splitting the string in an array for easy iteration
- utilize an array as a container for the iterated characters

Algo:
- return an empty object if...
  - the arg is not an array 
  - the arg is an empty string
  - if the arg is a string that contains no repeating characters
- split the given string into an array chars
- declare a processedChars var to an empty array
- iterate over chars (with index)
  - if the current character is found within the processedChars array
    - return an object with the current char as the prop name
    - and the index of the character in the processedChars arr and the current index in a two element array as the prop value
  - otherwise, push current char to processedChars
- return {}
*/

function invalidType(arg) {
  return typeof arg !== 'string';
}

function invalidString(string) {
  let arr = string.split('');
  let set = (new Set(arr));

  return string.length === 0 || arr.length === set.size;
}

function recurIndex(string) {
  if (invalidType(string)) return {};
  if (invalidString(string)) return {};

  let chars = string.split('');
  let processedChars = [];

  for (let i = 0; i < chars.length; i += 1) {
    if (processedChars.includes(chars[i])) {
      let obj = {};
      let firstIdx = processedChars.indexOf(chars[i]);
      obj[chars[i]] = [firstIdx, i];
      return obj;
    }
    processedChars.push(chars[i]);
  }
}

console.log(recurIndex("DXTDXTXDTXD")); // {"D": [0, 3]}
console.log(recurIndex("YXZXYTUVXWV")); // {"X": [1, 3]}
console.log(recurIndex("YZTTZMNERXE")); // {"T": [2, 3]}
console.log(recurIndex("AREDCBSDERD")); // {"D": [3, 7]}
console.log(recurIndex("ABCDE"));       // {}
console.log(recurIndex(""));            // {}
console.log(recurIndex());              // {}
console.log(recurIndex(undefined));     // {}
console.log(recurIndex(null));          // {}

// Finished in ~37 minutes
```

# Find Duplicate

```js
/*
Write a function that accepts an array of strings and returns the first duplicate value it finds. 

For example, if the array is ["a", "b", "c", "d", "c", "e", "f"], the function should return 'c', since it's duplicated within the array.

Note
You can assume that there's one pair of duplicates within the array.
Make sure the function has an efficiency of O(N)

-----------------------------
Input: 1 array of strings
- the array will always have one pair of duplicate string values

Output: 1 string
- the duplicated value

Rules:
- function will take an array of strings and return the duplicated element
- the function should have a time complexity of O(N)

Questions:
- there may be no arguments, if so return undefined and log 'invalid input'
- if not an array arg, if so return undefined and log 'invalid input'
- if a non-string value is contained within the array, return undefined and log 'invalid input'
- array string values are case sensitive
- if arg is an empty array return undefined

DS:
- in: an array
- out: a string value
- intermediate:
  - create/build a hash of the strings contained within the given array while iterating through given array

Algo:
- return undefined and log 'invalid input' if...
  - the given argument is not an array
  - if any of the elements within the given array are not strings
- return undefined if...
  - the given array is empty

- declare a variable assigned to an empty hash (library)
- iterate over the given array
  - if current string is found within the library
    - return current string
  - otherwise
    - add the string to the library
*/

function invalidType(arg) {
  if (!Array.isArray(arg) || arg.some(el => typeof el !== 'string')) {
    console.log('invalid input');
    return true
  }
}

const invalidElement = arr => {
  arr.length === 0;
}

function findDuplicate(arr) {
  if (invalidType(arr) || invalidElement(arr)) return undefined;

  let library = {};

  for (let i = 0; i < arr.length; i += 1) {
    if (library[arr[i]]) {
      return arr[i];
    }
    library[arr[i]] = true;
  }
}

console.log(findDuplicate()); // undefined log 'invalid input'
console.log(findDuplicate({})); // undefined log 'invalid input'
console.log(findDuplicate('array')); // undefined log 'invalid input'
console.log(findDuplicate(true)); // undefined log 'invalid input'
console.log(findDuplicate(['a', 'b', 3])); // undefined log 'invalid input'
console.log(findDuplicate([])); // undefined

console.log(findDuplicate(["a", "b", "c", "d", "C", "c", "e", "f"])); // 'c'
console.log(findDuplicate(["a", "b", "c", "d", "c", "e", "f"])); // 'c'
console.log(findDuplicate(["a", "b", "", "d", "", "e", "f"])); // ''
```

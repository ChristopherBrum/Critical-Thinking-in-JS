# Get Length

```js
/*
The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

[1, [2, 3]]
// 2 elements, number 1 and array [2, 3]
Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

Write a function that returns the total number of non-nested items in a nested array.

Notes
An empty array should return 0.

-------------------------------------------------------------------

Input: 1 array
- the array will contain a combination of number values and nested arrays
- the nested arrays can also contain number values and nested arrays
- never more than one arg passed in

Output: a number
- represents the total number of elements within the array and all nested arrays contained within it
- an empty array will return 0

Rules:
- write a function that determines the number of elements contained within the given array and all nested arrays within
- do not count a nested array as an element when calculating total element count

Questions:
- Will other types be a possibility or no arg?
  yes, return undefined if this is the case
- 

DS:
- array as input
- number as output (or undefined)
- working with arrays and number to calculate total count

Algo:
- return undefined if...
  - the arg passed in is not an array

- while there is a nested array contained within the given array
  - flatten the array
- return the length of the array

Recursive:
- return undefined if...
  - the arg passed in is not an array

- declare a count variable
- while there is a nested array contained within the given array
  - increment count by
  - call the getLength function passing in the given array with flat called on it

- return count

*/

function getLength(arr) { // [1, [2, [3, 4]]] --> [1, 2, [3, 4]] --> [1, 2, 3, 4]
  if (invalidType(arr)) return undefined;

  if (arr.some(el => Array.isArray(el))) {
    return getLength(arr.flat()); // [1, 2, [3, 4]] --> [1, 2, 3, 4]
  };

  return arr.length; // 4
}

function invalidType(value) {
  return !Array.isArray(value);
}

console.log(getLength());     // undefined
console.log(getLength('Hi')); // undefined
console.log(getLength(123));  // undefined
console.log(getLength({}));   // undefined

console.log(getLength([]));                         // 0
console.log(getLength([1, [2, 3]]));                //➞ 3
console.log(getLength([1, [2, [3, 4]]]));           //➞ 4
console.log(getLength([1, [2, [3, [4, [5, 6]]]]])); //➞ 6
console.log(getLength([1, [2], 1, [2], 1]));        //➞ 5
```

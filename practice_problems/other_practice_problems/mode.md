# Mode

```js
/*
The mode of a group of numbers is the value (or values) that occur most often (values have to occur more than once). Given a sorted array of numbers, return an array of all modes in ascending order.

mode([4, 5, 6, 6, 6, 7, 7, 9, 10]) ➞ [6]
mode([4, 5, 5, 6, 7, 8, 8, 9, 9]) ➞ [5, 8, 9]
mode([1, 2, 2, 3, 6, 6, 7, 9]) ➞ [2, 6]

Notes
In this challenge, all group of numbers will have at least one mode.

-------------------------------------------------
Input: 1 array
- array will contain a collection of numbers

Output: 1 array
- containing the 'modes' of the given array
- the element (or elements) that have the greatest number of occurences in the given array

Rules:
- given an array
  - find the element, or elements, that occur the greatest number of times
- each array arg will contain at least one "mode"
- return the modes in an array in ascending order
- "mode" --> describes the element, or elements, with the greatest number of occurences

- the given array will...
  - never be empty
  - always contain number elements
  - will never be <= 0
  - will never ne NaN or Infinity or decimals
  - no limit on number of array elements
  - no limit on array element number size
  - the array can have a length of 1 or greater

DS:
- working with the given array
- utilizing an object to collect the number elements and their occcurences

Algo:
- numberCount(array) --> object
  - declare an empty object (tally)
  - iterate over the array
    - add or increment the current array element into the tally object
  - return tally

- declare a 'modes' var to an empty array
- declare an object and set to the return value of tally
- find the values and keys array of tally
- find the max value in the values array of tally
- iterate over the values arrays
  - if the current value is equal to max value
    - push the associated key (convert to Number) to modes array
- return modes

*/

function countNumbers(array) {
  return array.reduce((obj, number) => {
    obj[number] = obj[number] || 0;
    obj[number] += 1;
    return obj;
  }, {})
}

function mode(array) {
  let modes = [];
  let numberTally = countNumbers(array);
  let numbers = Object.keys(numberTally);
  let occurences = Object.values(numberTally)
  let maxValue = Math.max(...occurences);

  occurences.forEach((value, idx) => {
    if (value === maxValue) modes.push(Number(numbers[idx]));
  });
  
  return modes;
}

console.log(mode([1])); // [1]
console.log(mode([1, 2])); // [1, 2]
console.log(mode([4, 5, 6, 6, 6, 7, 7, 9, 10])); // ➞ [6]
console.log(mode([4, 5, 5, 6, 7, 8, 8, 9, 9])); // ➞ [5, 8, 9]
console.log(mode([1, 2, 2, 3, 6, 6, 7, 9])); // ➞ [2, 6]
```

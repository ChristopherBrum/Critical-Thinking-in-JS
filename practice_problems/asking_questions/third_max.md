# Third Max

```js
/*
Given an array of integers, nums, return the third largest number in the array. If the third largest number does not exist, return the greatest number.

You are not allowed to sort the array.

Input: 1 array 
- array will consist of numbers

Output: 1 number
- the 3rd largest number in the given array

Rules:
- without using sort
  - return the 3rd largest number in the given array
- if a third largest number does not exist, return the greatest number

- number elements can be 0 or negative
- arr will always contain 3 or more numbers
- if multiple of the same number are found they all count as one maximum value that should be removed as one

Questions:
- can we always expect to have exactly one arg passed in? yes
- will that arg always be an array? yes
- can the array be sparse? no
- will it always contain numnbers only? yes
- will the numbers in the array ever be NaN, infinity, or a decimal number? no
- will any of the number elements be 0 or negative? yes, the can be <= 0
- can the array be empty? no
- can the array contain less than 3 elements? no, it will always contain at least 3 numbers
- will all of the number elements be different? no
- if there are multiple of the same number, do we count these individually as 1 value or separately? count as the same value, remove all instances as 1 values
- is there a maximum number of numbers allowed in the array? no

DS:
in: 1 array
out: 1 number
intermediate:
- sticking with arrays for processing the numbers
- utilize a Set to gather the unique elements of the array

Algo:
- utilize a set to gather the unique elements into an array
- set the max value to a variable maxValue
- return maxValue if the uniqueNums is less than 3 in length

- loop over the given array 3 times
  - set as maxValue
  - swap highest value from the array with -Infinity
- return maxValue

*/

function thirdMax(arr) {
  let set = new Set(arr);
  let uniqueNums = Array.from(set);
  let maxValue = Math.max(...uniqueNums);
  if (uniqueNums.length < 3) return maxValue;

  for (let i = 0; i < 3; i += 1) {
    maxValue = Math.max(...uniqueNums);
    let maxIdx = uniqueNums.indexOf(maxValue);
    uniqueNums.splice(maxIdx, 1, -Infinity);
  }

  return maxValue;
}

console.log(thirdMax([2, 1, 1])); // 2
console.log(thirdMax([3, 3, 3, 3])); // 3
console.log(thirdMax([3, 3, 23, 3])); // 23
console.log(thirdMax([3, 3, 23, 3, 1])); // 1
console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([3, 2, 1, 3, 2, 1])); // 1
console.log(thirdMax([3, 2, 1, 9, 7, 6])); // 6
console.log(thirdMax([3, 2, 1, 9, -7, 6])); // 3
console.log(thirdMax([0, -1, -2, -5])); // -2
console.log(thirdMax([1, 2, 3, 4, 5, 1, 2, 3, 6]))

// Done in 20 minutes
```

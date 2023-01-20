# Divide

```js
/*
Write a function that divides an array into chunks such that the sum of each chunk is <= n. Start from the left side of the array and move to the right.

Examples
divide([1, 2, 3, 4, 1, 0, 2, 2], 5)
➞ [[1, 2], [3], [4, 1, 0], [2, 2]]

divide([1, 0, 1, 1, -1, 0, 0], 1)
➞ [[1, 0], [1], [1, -1, 0, 0]]

divide([2, 1, 0, -1, 0, 0, 2, 1, 3], 3)
➞ [[2, 1, 0, -1, 0, 0], [2, 1], [3]]
Notes
The max of the array will always be smaller than or equal to n.
Use the greedy approach when solving the problem (e.g. fit as many elements you can into a chunk as long as you satisfy the sum constraint).

Input: 1 array and 1 number
- will contain number elements
- the number arg is the target that chunks of number elements an sum up to or equal to but no more
- number elements can be 0 or negative or positive

Output: 1 array
- contains nested arrays of chunked numbers

Rules:
- write a funtion that takes args, 1 array of numbers, and 1 target number
- chunk, or group, the number elements so that when they are summed never equal more than the target number
- the given array may be empty, return an empty array in this case
- if a number element is greater than the target number, add a empty array to the returned array

Questions:
- will we always have 2 arguments passed in? yes
- will the first arg always be an array? yes
- will the second arg always be a number? yes
- can the array arg be sparse? no
- can the array arg be empty? yes, return an empty array.
- will the array only contain number elements? yes
- can the number elements ever be NaN, infinity, or a decimal? no
- is the a limit to the size/value of these numbers? no
- is there a max number of elements that the array can be? no
- can the target number be 0? yes
- can the target number be negative? yes
- can the target number be NaN, infinity, or a deciaml? no
- can there be values that are greater than the target number? yes, return an empty array for these values
- is the chunked array of arrays ordered by the numbers appearance? yes

DS:
in: 1 array and 1 number
out: 1 arrat of arrays
intermediate:
- working with arrays for iteration and processing

Algo:
- declare a chunked var to an empty array
- declare a tempArr var to an empty array
- iterate through the given array
  - if the sum of tempArr + the current element > target number
    - if the current element is greater than the target number
      - if tempArr is not empty, push to chunked
      - push an empty array to chunked
      - reset tempArr to be an empty array 
    - otherwise
      - push tempArr to chunked
      - reset tempArr to be an array with the current element in it
  - otherwise
    - push current element to tempArr
- if tempArr is not empty, push to chunked
- return chunked
*/

function sumOfArr(array) {
  return array.reduce((sum, num) => sum + num, 0);
}

function divide(array, targetNum) {
  let chunked = [];
  let tempArr = [];

  array.forEach(num => {
    let sum = sumOfArr(tempArr);

    if (sum + num > targetNum) {
      if (num > targetNum) {
        if (tempArr.length !== 0) chunked.push(tempArr);
        chunked.push([]);
        tempArr = [];
      } else {
        chunked.push(tempArr);
        tempArr = [num];
      }
    } else {
      tempArr.push(num);
    }
  });

  if (tempArr.length > 0) chunked.push(tempArr);
  
  return chunked;
}

console.log(divide([], 5)); // []
console.log(divide([0, -1, 0, 1], -1)); // [[], [-1, 0], []]
console.log(divide([2, 3, 4, 5, 6], 1)); // [[], [], [], [], []]
console.log(divide([1, 2, 3, 7, 1, 0, 2, 2], 5)); // [[1, 2], [3], [], [1, 0, 2, 2]]
console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5)); // [[1, 2], [3], [4, 1, 0], [2, 2]]
console.log(divide([1, 0, 1, 1, -1, 0, 0], 1)); // [[1, 0], [1], [1, -1, 0, 0]]
console.log(divide([2, 1, 0, -1, 0, 0, 2, 1, 3], 3)); // [[2, 1, 0, -1, 0, 0], [2, 1], [3]]
```


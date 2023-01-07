# Puzzle Pieces

```js
/*
Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element in the first array with the second element in the second array, etc, etc. Return true if all element combinations add up to the same number. Otherwise, return false.

---------------------------------

Input: 2 arrays
- arrays will contain numbers

Output: 1 boolean value
- return true when the numbers of the two arrays when combined by like indexes all sum to the same number

Rules:
- take two arrays as arguments
- find the sum of the elements at like indexes
- determine whether those sums are all the same
- array elements may be positive or negative

- the arrays may not be the same size
  - return false if this is the case

Questions:
- Always will have two arguments passed in
- the two args will always be arrays
- the arrays will always contain number values
- array elements will always be whole numbers
- arrays will always contain at least one element

DS:
ins: 2 arrays
outs: 1 boolean
intermediate:
- working with arrays to transform the summed values of the arguments
- use interrogation to determine if the sums are all the same

Algo:
- return false if the arrays size !==

- map over the first array with idx (sums)
  - return the sum of the current element and the element of array 2 at the current idx
- set the first element to 'baseVal'
- iterate over sums and determine whether all of the elements are equal to baseSum
- return true if they are, false otherwise

*/

function puzzlePieces(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let sums = arr1.map((number, idx) => number + arr2[idx] );
  let baseValue = sums[0];
  
  return sums.every(number => number === baseValue );
}

console.log(puzzlePieces([1], [4])); // ➞ true
console.log(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6])); // ➞ true
console.log(puzzlePieces([1, 2], [-1, -1])); // ➞ false
console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10])); // ➞ false
console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1])); // ➞ true
// 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// Both arrays sum to [5, 5, 5, 5]
```

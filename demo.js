/*
Edabit - Is The Array Circular (https://edabit.com/challenge/TfL5ffvWoEgsoRhuP)

Write a function that determines if an array is circular. An array is circular if its subarrays can be reordered such that each subarray's last element is equal to the next subarray's first element.

For example, the array [[1, 1, 1], [9, 2, 3, 4], [4, 1], [1, 2, 5, 7, 9]] is circular because we can re-arrange the elements to create the following array:

[[9, 2, 3, 4], [4, 1], [1, 1, 1], [1, 2, 5, 7, 9]]

Examples
isCircular([[9, 8], [6, 9, 1], [8, 4, 2], [1, 9], [2, 1, 6]]) ➞ true
// Can be reordered: [[9, 8], [8, 4, 2], [2, 1, 6], [6, 9, 1], [1, 9]]

isCircular([[1, 1], [1, 2]]) ➞ false

isCircular([[2, 1], [1, 2]]) ➞ true

isCircular([[2, 1], [1, 2], [2, 1], [1, 3, 1], [1, 4, 4]]) ➞ false

----------------------------------------
Input:1 array of arrays
- will always contain nested arrays
- nested arrays will never be empty (will always contain at least 1 element)
- if a nested array contains one element, that will act as the first and last element
- nested arrays will only contain numbers
- number elements will always be pos whole numbers or 0
- there will always be at least 2 nested arrays


Output: 1 boolean value

Rules:
- function should determine if the array of arrays is circular
- the given is ciruclar if:
  - the array can be rearranged so that the last element of the first array is the same as the first element of the second array
  - the first element of the first array and the last element of the last array must match
- the subarrays can be rearranged in any manner

DS:
- working with arrays

Algo:
circular(array) --> boolean
- comare the fistr element of the current array with the last element of the last array
- AND
- compare the last element of the current array and the first element of the next array

MAIN
- return true if is given array is already circular
- iterate over the arrays (idx1)
  - iterate over the arrays again (idx2)
    - duplicate the given array
    - set the subarrays to arr1 and arr2
    - splice the arrays into their opposite positions
    - if swapped array is circular return true
- return false
*/

// [[9, 8], [8, 4, 2], [2, 1, 6], [6, 9, 1], [1, 9]]
function arrayIsCircular(array) {
  return array.every((subarray, subIdx) => {
    let lastArr = array.at(subIdx - 1);
    return lastArr[lastArr.length - 1] === subarray[0];
  });
}

function isCircular(array) {
  if (arrayIsCircular(array)) return true;

  for (let idx1 = 0; idx1 < array.length; idx1 +=1) {
    for (let idx2 = idx1 + 1; idx2 < array.length; idx2 += 1) {
      // let arrayCopy = array.slice();
      let sub1 = array[idx1];
      let sub2 = array[idx2];
      array.splice(idx2, 1, sub1);
      array.splice(idx1, 1, sub2);
      if (arrayIsCircular(array)) return true;
    }
  }
  return false;
}

// console.log(isCircular([[0], [0]])); // true
// console.log(isCircular([[1, 1], [1]])); // true
// console.log(isCircular([[2, 1], [1]])); // false
// [[9, 8]] - [[6, 9, 1], [8, 4, 2], [1, 9], [2, 1, 6]]
// [[9, 8], [8, 4, 2]] - [[6, 9, 1], [1, 9], [2, 1, 6]]
// [[9, 8], [8, 4, 2], [2, 1, 6]] - [[6, 9, 1], [1, 9]]


console.log(isCircular([[9, 8], [6, 9, 1], [8, 4, 2], [1, 9], [2, 1, 6]])); // true
// console.log(isCircular([[1, 1], [1, 2]])); // false
// console.log(isCircular([[2, 1], [1, 2]])); // true
// console.log(isCircular([[2, 1], [1, 2], [2, 1], [1, 3, 1], [1, 4, 4]])); // false
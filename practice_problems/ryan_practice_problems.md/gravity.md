# Gravity

```js
/*        
Given a 2D array of some suspended blocks (represented as hastags), return another 2D array which shows the end result once gravity is switched on.

Notes: Each block falls individually, meaning there are no rigid objects. Think about it like falling sand in Minecraft as opposed to the rigid blocks in Tetris.

-----------------------------------------------

Input: 1 array (of nested arrays)
- each subarray will contain a combination of '-' and '#' characters only
- each nested array will be of equal length
- the nested arrays can be of any length
- the number of nested arrays can fluctuate

Output: 1 array (of nested arrays)
- each subarray will contain '-' and '#' characters `dropped`
  - for each '#' character found at a given index, the new array of arrays should populate the arrays at that index with the appropriate number of '#' characters starting from the end

Rules:
- write a function that takes one array as an argument
  - the given array contains a number of nested arrays
  - each nested array will contain '#' and '-' characters
- this function should return a new nested array with all of the '#' characters dropped
- 

Example:
[
  ["-", "#", "#", "#", "#", "-"],
  ["#", "-", "-", "#", "#", "-"],
  ["-", "#", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"]
]

idx0 -> 1
idx1 -> 2
idx2 -> 1
idx3 -> 2
idx4 -> 2
idx5 -> 0

["#", "#", "#", "#", "#", "-"]
["-", "#", "-", "#", "#", "-"],
["-", "-", "-", "-", "-", "-"],
["-", "-", "-", "-", "-", "-"],

reversed

[
  ["-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"],
  ["-", "#", "-", "#", "#", "-"],
  ["#", "#", "#", "#", "#", "-"]
]

DS:
- object to collect the instances of '#' characters at each index

Goal: take an array of arrays containing '-' and '#' characters and droop each of the '#' characters to the bottom most nested arrays depending on the number of occurrences found.

Abstractions:
- iterate over nested arrays to return the number of occurrences of '#' 
- map over the given array and each nested array to populate with the correct number of '#' characters

Algo:
- declare a new variable set to an empty object (objCount)
- iterate over the given array 
  - iterate through the nested array with index
    - increment the value of the index key in objCount by 1, or set it to 1
- map over the given array
  - Note: can I use the index of this inner map method to access objCount?
  - map over each character of the nested array with index
    - if the value of objCount at current index is > 1
      - decrement the value of objCount 
      - return '#'
    - otherwise
      - return '-'
- reverse the array of arrays and return
*/

function switchGravityOn(array) {
  let objCount = {};
  array.forEach((nestedArr, idx) => {
    nestedArr.forEach((el, idx) => {
      if (el === '#') {
        objCount[idx] = objCount[idx] + 1 || 1;
      }
    });
  });
  
  return array.map(nestedArr => {
           return nestedArr.map((_, idx) => {
                     if (objCount[idx] > 0) {
                       objCount[idx] -= 1;
                       return '#';
                     }
                     return '-';
                   });
         }).reverse();
}

console.log(switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"]
])); // [
//   ["-", "-", "-", "-"],
//   ["-", "-", "-", "-"],
//   ["-", "-", "-", "-"],
//   ["-", "#", "#", "-"]
// ]

console.log(switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "#", "-"],
  ["-", "-", "-", "-"],
])); // [
//   ["-", "-", "-", "-"],
//   ["-", "-", "#", "-"],
//   ["-", "#", "#", "-"]
// ]

console.log(switchGravityOn([
  ["-", "#", "#", "#", "#", "-"],
  ["#", "-", "-", "#", "#", "-"],
  ["-", "#", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"]
])); // [
//   ["-", "-", "-", "-", "-", "-"],
//   ["-", "-", "-", "-", "-", "-"],
//   ["-", "#", "-", "#", "#", "-"],
//   ["#", "#", "#", "#", "#", "-"]
// ]

// Gianni's Approach

// Approach 1:
// I can go bottom up: Columnn for column I would start in the lowest row,
// Checking if I have air in the current cell. If I do, I can check the column above.
// As soon as I find an element, I can exchange the elements.

// Then I move on to the column on the right
// Then I move on to the row on top.
// I don't need to do the last row.


// function switchGravityOn(inputArr) {
//   let groundedArr = inputArr.slice();
//   for (let currentRow = groundedArr.length - 1, currentRow > 0; currentRow--) {
//     for (let currentColumn = 0, currentColumn < groundedArr[0].length, currentColumn++) {
//       let currentCell = groundedArr[currentRow][currentColumn];
//       if (currentCell === "-") {
//         for (let checkIndex = currentColumn - 1, checkIndex >= 0, checkIndex--) {
//           if (groundedArr[currentRow][checkIndex] === "#") {
//             groundedArr[currentRow][currentColumn] = "#";
//             groundedArr[currentRow][checkIndex] = "-";
//             break;
//           }
//         }
//       }
//     }
//   }
//   return groundedArr;
// }
```

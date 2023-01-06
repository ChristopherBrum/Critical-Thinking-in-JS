# Get Pairs

```js
/*
Create a function that returns all pairs of numbers in an array that sum to a target. 

Input: 1 array and 1 number
- array will only contain numbers
- array will always have two or more elements

Output: 1 array, of nested arrays

Rules:
- return all of the pairs of numbers in the given array that sum to the number argument
- each arr element can only be used once
- each subarray will be sorted in ascending order
- the returned array will be sorted in ascending order by the first value of each subarray
- the number arg will always be positive

DS/Abstractions:
ins: 1 array and 1 number
outs: 1 nested array
intermediate:
- iterating through the given array to collect pairs
- filter out pairs that do not sum to the target
- sort the individual pairs and the returned array in decscending order

Algo:
- devcalre a pairs variable to empty array
- iterate over the given array for the startIdx
  - iterate over the given array for the endIdx (startIdx + 1)
    push each pairs to pairs
- filter out any pair that does not sum to the target
  - reduce each pairs subarray to get the sum
- map over pairs and sort each individual pair
- sort paits based on the first element
- return pairs
*/

function getPairs(arr) {
  let pairs = [];

  for (let startIdx = 0; startIdx < arr.length; startIdx += 1) {
    for (let endIdx = startIdx + 1; endIdx < arr.length; endIdx += 1) {
      pairs.push([arr[startIdx], arr[endIdx]]);
    }
  }

  return pairs;
}

function filterPairs(pairs, target) {
  return pairs.filter(pair => {
    let sum = pair.reduce((sum, digit) => sum + digit, 0);
    return sum === target;
  })
}
 
function sortPairs(pairs) {
  return pairs.map(pair => pair.sort((a, b) => a - b));
}

function allPairs(arr, target) {
  let pairs = getPairs(arr);
  let targetPairs = filterPairs(pairs, target);
  let sortedPairs = sortPairs(targetPairs);
  return sortedPairs.sort((pair1, pair2) => pair1[0] - pair2[0])
}

console.log(allPairs([4, 2, 4, 5, 3, 3], 7)); //➞ [[2, 5], [3, 4], [3, 4], [3, 4], [3, 4]]
console.log(allPairs([2, 4, 5, 3, 3], 7)); //➞ [[2, 5], [3, 4], [3, 4]]
console.log(allPairs([2, 4, 5, 3], 7)); //➞ [[2, 5], [3, 4]]
console.log(allPairs([5, 3, 9, 2, 1], 3)); //➞ [[1, 2]]
console.log(allPairs([4, 5, 1, 3, 6, 8], 9)); //➞ [[1, 8], [3, 6], [4, 5]]
console.log(allPairs([5, 5, 2], 14)) // []
```

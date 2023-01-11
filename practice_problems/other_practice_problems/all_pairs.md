# All Pairs

```js
/*
Create a function that returns all pairs of numbers in an array that sum to a target. Sort the pairs in ascending order with respect to the smaller number, then order each pair in this order: [smaller, larger].

allPairs([2, 4, 5, 3], 7) ➞ [[2, 5], [3, 4]]
// 2 + 5 = 7, 3 + 4 = 7

allPairs([5, 3, 9, 2, 1], 3) ➞ [[1, 2]]

allPairs([4, 5, 1, 3, 6, 8], 9) ➞ [[1, 8], [3, 6], [4, 5]]
// Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]

Notes
If no pairs are found, return an empty array [].
You are only allowed to use each number once in a pair.
See Comments for a hint.

------------------------------------
Input: 1 array, 1 number
- the array will contain number elements
- the number will represent the target sum

Output: 1 array
- the array will contain nested 2 element arrays
- these 2 element arrays reprersent all of the number pairs of the given array that sum to the target sum

Rules:
- find all pairs of the given array where the pairs summed together equal the number argument
- the returned array will contain each of these pairs in a nested array
- the values in the nested arrays will be sorted in ascending order
- the returned array will be sorted by the lower value of each pair

- the numbers in the array can be 0 but not negative
- the number arg cvan be 0 but not negative
- of the given array is empty, return an empty array

Questions:
- will we always have 2 arguments passed in?
- will the first arg always be an array? If not how do we handle this?
- will the second arg always be a number? If not how do we handle this?
- will the given array only contain numbers?
- will the numbers ever be 0 or negative?
- will the numbers ever be decimals?
- will the numbers ever be NaN or Infinity?
- will the array ever be sparse?
- can the array be empty?
- will the number ever be NaN infinity or a decimal?
- will the number ever be 0 or negative?

DS:
- collecting pairs of given array into their own arrays
- reducing arrays to find their sum 
- filtering to ensure we only have array pairs that sum to the target
- sorting arrays

Algo:
- declare a pairs var set to an empty arr
- iterate through the indexes of the given array (firstIdx)
  - iterate through the indexes of the given starting from firstIdx + 1 to the end (secondIdx)
    - if the sum of the element at firstIdx and the elemtn at seocndIdx equals the target value
      - push to the pairs array in a nested array
- map over pairs
  - sort the values of the pair arrays in ascending order
- sort the pairs array by the lowest value in each nested array
- return pairs

*/

function findTargetPairs(array, target) {
  let pairs = [];

  for (let firstIdx = 0; firstIdx < array.length; firstIdx += 1) {
    for (let secondIdx = firstIdx + 1; secondIdx < array.length; secondIdx += 1) {
      if (array[firstIdx] + array[secondIdx] === target) {
        pairs.push([array[firstIdx], array[secondIdx]]);
      }
    }
  }

  return pairs
}

function allPairs(array, targetSum) {
  let pairs = findTargetPairs(array, targetSum);
  let sortedPairs = pairs.map(pair => pair.sort((a, b) => a - b));
  return sortedPairs.sort((pairA, pairB) => pairA[0] - pairB[0]);  
}

console.log(allPairs([], 1)); // []
console.log(allPairs([0, 1, 1, 0], 0)); // [[0,0]]
console.log(allPairs([2, 4, 5, 3], 7)); // ➞ [[2, 5], [3, 4]]
console.log(allPairs([5, 3, 9, 2, 1], 3)); // ➞ [[1, 2]]
console.log(allPairs([4, 5, 1, 3, 6, 8], 9)); // ➞ [[1, 8], [3, 6], [4, 5]]
```

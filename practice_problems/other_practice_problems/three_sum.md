# Three Sum

```js
/*
Write a function that returns all sets of three elements that sum to 0.

threeSum([0, 1, -1, -1, 2]) ➞ [[0, 1, -1], [-1, -1, 2]]
threeSum([0, 0, 0, 5, -5]) ➞ [[0, 0, 0], [0, 5, -5]]
threeSum([1, 2, 3]) ➞ []
threeSum([1]) ➞ []

Notes
The original array may contain duplicate numbers.
Each three-element subarray in your output should be distinct.
Subarrays should be ordered by the first element of the subarray.
Subarrays themselves should be ordered the same as the original array.
Return an empty array if no three elements sum to zero.
Return an empty array if there are fewer than three elements.

----------------------------------------

Input: 1 Array
- will contain numbers as elements
- may contain duplicate number values

Output: 1 array
- will contain subarrays 
- each subarray will contain exactly 3 numbers
- each subarrays numbers will sum to 0
- each subarray will be in the order they were found in the given array
- the returned array will be sorted in ascending order based on the subarrays first element

Rules:
- find each group of 3 number elements that sum to 0
- each group should be contained in a subarray
- the returned array will be sorted by the subarrays first element
- the subarrays will be in their original order
- if the given array contains less than 3 characters, return []

- if the given array is empty, return an empty array

Questions:
- will I always have 1 argument? yes
- will the argument always be an array? yes
- can the array be empty? yes, return an empty array
- can the array be sparse? no
- will the elements in the arrays always be numbers? yes
- Is there a limit to size of the number elements? no
- will the number elements ever be NaN , Infinity, or a decimal? no
- will the number elements be given in an ordered fashion? no
- does a group count as distinct if it contains the same numbers as another in different order? No, all groups should be distinct regardless of their order

[-1, 0, 1, -1]
-1, 0, 1 --> 0
0, 1, -1 --> 0

DS:
- iterating over the given array
- nested iteration to gather all groups of 3
- utilizing reducing to determine the sum of these groups
- sorting? to determine if a group is distinct?
- filtering to eliminate non 0 summing subarrays

Algo:
- if the arrays contains < 3 characters, return []

- collect all groups of 3 numbers
  - create 3 levels of iteration (idx1, idx2, idx3)
    - collect the elements at these 3 indexes and push to a new array

- filter out any sub array that doesn't sum to 0
  - iterate over the array of groups
    - check if the current groups sum is 0

- declare a var to an empty arr (usedGroups)
- filter the groups that are not unique
  - if every element in the current group is the same as every element in any of the groups in usedGroups
    - skip to next group
  - otherwise
    - push the current group to usedGroups

- sort the array by the first element of each subarray
- return

*/

function collectGroupsOfThree(array) {
  let groups = [];

  for (let idx1 = 0; idx1 < array.length; idx1 += 1) {
    for (let idx2 = idx1 + 1; idx2 < array.length; idx2 += 1) {
      for (let idx3 = idx2 + 1; idx3 < array.length; idx3 += 1) {
        groups.push([array[idx1], array[idx2], array[idx3]]);
      }
    }
  }

  return groups;
}

function selectZeroSumGroups(array) {
  return array.filter(subarray => {
    let sum = subarray.reduce((sum, num) => sum + num, 0);
    return sum === 0;
  });
}

function threeSum(array) {
  if (array.length < 3) return [];

  let groupsOfThree = collectGroupsOfThree(array);
  let zeroSumGroups = selectZeroSumGroups(groupsOfThree)

  let usedGroups = [];
  zeroSumGroups.forEach(subArray => {
    let usedGroupFound = usedGroups.some(usedGroup => {
      return subArray.every(subElement => usedGroup.includes(subElement));
    });

    if (!usedGroupFound) usedGroups.push(subArray);
    return usedGroupFound;
  });

  return usedGroups.sort((groupA, groupB) => groupA[0] - groupB[0]);
}

console.log(threeSum([-1, 0, 1, -1]));    // [[-1, 0, 1]]
console.log(threeSum([0, 1, -1, -1]));    // [[0, 1, -1]]
console.log(threeSum([0, 1, -1, -1, 2])); // [[-1, -1, 2], [0, 1, -1]]
console.log(threeSum([0, 0, 0, 5, -5]));  // [[0, 0, 0], [0, 5, -5]]
console.log(threeSum([1, 2, 3]));         // []
console.log(threeSum([1]));               // []
console.log(threeSum([]));                // []
```

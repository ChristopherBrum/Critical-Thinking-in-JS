# Majority Vote

```js
// Create a function that returns the majority vote in an array. A majority vote is an element that occurs > N/2 times in an array (where N is the length of the array).

/*
Problem
- create a funtion that takes one array arguemnt
- function will return the majority vote contained in the array
  - maj vote is an element that occurs more than half the length of the array divided by two
- if there is not maj elements return null
- if array is empty return null

Implicit Rules:
- all array elements will be upcased letters (?)
- a majority vote cannot equal half of the number of elements, it must be greater

DS
- Input: array, either empty or containing letter characters
- Output: letter character, or null
- arrays, numbers to count occurrances, null, booleans for comparison, objects for tracking occurances

Note/Question:
- Can there be more than one maj vote? no

Goal: Write a function that takes one array argument, determine if there is a value that is repeated more than half of the arrays total occurrances, and return that element, otherwise return null.

Abstractions:
- iteration, populate an object with elements and their occurrances
- 

Algo:
--> function --> majorityVote(array) --> string or null
  - return null if given array is empty
  - declare an new object (occurrances)
  - iterate through the given array
    - if current element is a valid property in occurrances
      - increment the value by 1
    - otherwise, set the element as a proprty and the value to 1
  - convert our object to a nested array
  - find the max `value` (index 1 in our nested arrays)
    - declare a variable to collect the max value set 0 (max)
    - declare maxIndex
    - iterate through occurArray
      - if value at index 1 is greater than max 
        - set max to element at index 1
        - set maxInddex to current index
  - return maxElement, or null if maxIndex is undefined

*/

function majorityVote(array) {
  if (array.length === 0) return null;
  let occurrances = {};
  
  array.forEach(element => {
    occurrances[element] = occurrances[element] || 0
    occurrances[element] += 1
  });
  
  let sortedArray = Object.entries(occurrances)
                      .sort((a,b) => b[1] - a[1]);
  
  // console.log(sortedArray);
  let maxPair = sortedArray[0];
  // console.log(maxPair);
  let maxVal = maxPair[1];
  if (maxVal < array.length / 2) return null;
  return maxPair[0];
  
  // return Object.keys(occurrances).reduce((max, vote) => {
  //   if (occurrances[vote] > occurrances[max]) {
  //     return max = vote;
  //   } else {
  //     return max;
  //   }
  // })
  
  // let occurArray = Object.entries(occurrances);
  
  // let max = 0;
  // let maxIndex;
  
  // for (let i = 0; i < occurArray.length; i += 1) {
  //   if (occurArray[i][1] > max && 
  //       occurArray[i][1] > (array.length / 2)) {
  //     max = occurArray[i][1];
  //     maxIndex = i;
  //   } 
  // }
  
  // return maxIndex !== undefined ? occurArray[maxIndex][0] : null;
}

console.log(majorityVote(["A", "A", "B"])) // "A"

console.log(majorityVote(["A", "A", "A", "B", "C", "A"])) //➞ "A"

console.log(majorityVote(["A", "B", "B", "A", "C", "C"])) //➞ null

// Notes
// The frequency of the majority element must be strictly greater than 1/2.
// If there is no majority element, return null.
// If the array is empty, return null.
```
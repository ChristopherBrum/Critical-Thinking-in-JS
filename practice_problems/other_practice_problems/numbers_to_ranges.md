# Numbers to Ranges

```js
/*
Create a function which converts an ordered number array into a array of ranges (represented as strings). Note how some arrays have some numbers missing.

numbersToRanges([1, 2, 3, 4, 5]) ➞ ["1-5"]

numbersToRanges([3, 4, 5, 10, 11, 12]) ➞ ["3-5", "10-12"]

numbersToRanges([1, 2, 3, 4, 99, 100]) ➞ ["1-4", "99-100"]

numbersToRanges([1, 3, 4, 5, 6, 7, 8]) ➞ ["1", "3-8"]

Notes
If there are no numbers consecutive to a number in the array, represent it as only the string version of that number (see example #4).
Return an empty array if the given array is empty.

--------------------------------------------------

Input: 1 array
- contains number elements
- the number elements will be ordered

Output: 1 array
- contains string elements
- the strings will represent ranges of numbers, or individual numbers

Rules:

range definition: is a series of consecutive numbers represented as the start and end numbers separated by a dash in string format.

- funtion will take on earray of numbers as an argument
- return an array that groups any consecutive numbers in the given array into a string representation of that
  - the start and end number separated by a '-' 
- an indivual value (non-consecutive number) will be represented as a string number
- the given array may be empty, if so, return [] 

Implicit Rules:
- the returned array can be all ranges, no ranges, or a mix of both
- zero is a valid number element

Questions:
- will there always be an arg passed in? yes
- will the arg always be an array? yes
- will the array only contains number elements? yes
- can the number elements be 0? yes
- can the number elements be negtive? no
- is there a value limit to the number elements? no
- is there a limit to the number of array elements? no
- will the numbers in the array ever repeat? no

DS:
in: 1 array of numbers
out: 1 array of strings
intermediate:
- working with arrays for iteration and processing

Algo:
- declare a variable set to an empty array (result)
- declare a variable set to an empty array (tempArr)
- iterate over the given array
  - if the idx is 0, push the first value to tempArr
  - if current number is equal to the last element of tempArr + 1
    - push current element to tempArr
  - otherwise
    - push the temporary array to result
    - set tempArr to an array containing the current element
- if tempArray contains values, push to result
- map over the result array
  - format the given subarray
- return the transformed array

helper: formatElement()
- if the subarray is 1 element long, return the the element as a string
- capture the first element as a string
- capture the last element as a string
- concatenate them together separted by a '-'
- return the new string
*/

function findRanges(array) {
  let result = [];
  let tempArr = [];

  array.forEach((num, idx) => {
    if (idx === 0) {
      tempArr.push(num);
      return;
    }

    if ((tempArr.at(-1) + 1) === num) {
      tempArr.push(num);
    } else {
      result.push(tempArr);
      tempArr = [num];
    }
  });

  if (tempArr.length > 0) result.push(tempArr);
  return result;
}

function formatElement(array) {
  if (array.length === 1) return String(array[0]);

  let first = String(array.at(0));
  let last = String(array.at(-1));

  return first + '-' + last;
}

function numbersToRanges(array) {
  let result = findRanges(array);
  
  return result.map(subarray => {
    return formatElement(subarray);
  });
}

console.log(numbersToRanges([])); // []
console.log(numbersToRanges([1, 3, 5])); // ["1", "3", "5"]
console.log(numbersToRanges([1, 2, 3, 4, 5])); // ["1-5"]
console.log(numbersToRanges([3, 4, 5, 10, 11, 12])); // ["3-5", "10-12"]
console.log(numbersToRanges([1, 2, 3, 4, 99, 100])); // ["1-4", "99-100"]
console.log(numbersToRanges([1, 3, 4, 5, 6, 7, 8])); // ["1", "3-8"]
console.log(numbersToRanges([0, 1, 3, 4, 5, 6, 7, 8])); // ["0-1", "3-8"]

// Completed in 34 minutes
```

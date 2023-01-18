# Flatten and Unique

```js
/*
​Write a function that takes a two-dimensional array as the argument and turns it into a flat array with all duplicated elements removed. Treat numbers and number strings (e.g., 1 and '1') as duplicates, and keep the one that comes first in the result.

Input: 1 array
- can be empty
- can contain nested arrays

Output: 1 array
- 

Rules:
- our funtion will take a two-dimensional array (nested array)
- flatten the two-dimensional array into an array of all nested elements
- remove all duplicate elements
  - number and like string-numbers will be considered duplicates ('2' and 2)
  - keep the element that appears in the array first

two-dimensional array: an array that contains arrays as elements

Implicit Rules:
- an empty array is acceptable, return an empty array in this circumstance
- the given array can 
  - be empty
  - contain non-array elements and array elements together
  - contain only array elements
- the nested arrays may be empty
- the elements in the arrays will only contain strings and numbers
- the string elements can contain any character type
- there can be any number of nested arrays
- number values and numeric strings can be negative or 0
- the returned array should be ordered by appearance

Questions:
- can we always expect there to be exactly one argument passed in? yes
- will the argument always be an array? yes
- can the given array contain a combination of elements and nested arrays? yes
- will the nested arrays always contain elements? no, they can be empty too
- will the array elements only be strings and numbers? yes
- can the string elements ever contain non-numeric characters? yes
- can the strings contain any type of character? yes
- are numeric strings and numbers the only different types that can act as duplicates? yes 
- is there a limit to the number of nested arrays that can be found within the given array? non
- can the numbers and numeric strings be negative or 0? yes
- can the number elements ever be NaN, infinity or a decimal? no
- how should the returned array be ordered? order of appearance

DS:
in: 1 array
out: 1 array
intermediate:
- processing characters with arrays

Algo:
- decalre an empty array to a var (uniques)
- flatten the given array
- iterate through the flatten array
  - determine if there is a duplicate of the current character in the uniques array
    - if the current element is found..
    - convert to 
      - string --> number
      - number --> string
    - if the current element converted is found 
  - move on to next element
  - otherwise, push the current element to the uniques array
  - return the uniques array
*/

function convertElement(el) {
  if (typeof el === 'string') {
    return Number(el);
  } else {
    return String(el);
  }
}

function flattenAndUnique(array) {
  if (array.length === 0) return [];

  let uniques = [];
  let flattened = array.flat();

  for (let i = 0; i < flattened.length; i += 1) {
    let convertedEl = convertElement(flattened[i]);

    if (!uniques.includes(flattened[i]) && !uniques.includes(convertedEl)) {
      uniques.push(flattened[i]);
    }
  }
  return uniques;
}

console.log(flattenAndUnique([]));                            // []
console.log(flattenAndUnique([1, 2, 3, '1', '2', '3']))       // [1, 2, 3]
console.log(flattenAndUnique([1, '2', 3, '1', 2, '3']))       // [1, '2', 3]
console.log(flattenAndUnique([[1, '2', 3], ['1', 2, '3']]))   // [1, '2', 3]
console.log(flattenAndUnique([[1, '2', -3], ['1', 2, '3']]))  // [1, '2', -3, '3']
console.log(flattenAndUnique([[1, '2', -3], ['1', 2, '-3']])) // [1, '2', -3]
console.log(flattenAndUnique([[1, '2', -3], []]))             // [1, '2', -3]
console.log(flattenAndUnique([[1, '2', -3], [0, 2, '3']]))    // [1, '2', -3, 0, '3']
console.log(flattenAndUnique([1, 2, 3, ['3', 4, 5, 'a']]));   // [1, 2, 3, 4, 5, 'a']
console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']])); // [1, 2, 3, 4, 5, 'a']
console.log(flattenAndUnique([[1, 'b', 3], ['3', 4, 'b', 'a']])); // [1, 'b', 3, 4, 'a']
```

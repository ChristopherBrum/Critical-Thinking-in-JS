# Merge

```js
/*
Write a function that takes two sorted arrays as arguments and returns a new array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array. You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays.

-----------------------------------

Input: 2 arrays
- the array args can be empty
- the arrays will be sorted
- they can contain number elements

Output: 1 array
- the elements from both aray args in ascending order

Rules:
- given two array arguments
  - return a new arrays that contains all of the elements from both array args in ascending order
- you cannot sue the sort() method
- do not mutate the given arrays
- the number ekements can be 0 or negative

Implicit Rules:
- the array args can be empty
- the array args will only contains number elements
- both array args can be empty
- there can be repeated numbers in the array args

Questions:
- will there always be 2 arguments passed into the function? yes
- will the arguments always be arrays? yes
- can the array args be sparse arrays? no
- can the array args contains non-number elements? no
- can the numbers ever be NaN, infinity, or a decimal? no
- can the number elements be 0? yes
- can the number elements be negative? yes
- can both args be empty? yes
- is there a maximum number of elements that can be contained in an array arg? no
- is there a max value of the number elements? no

DS:
in: 2 arrays of numbers
out: 1 array of numbers sorted
intermediate:
- working with arrays 

Algo:
- declare a var to an empty array (merged)
- create copies of arr1 and arr1
- begin a loop that will run until arr1 and arr2 are both length of 0
  - grab the first element of both arrays
  - if element 1 is less than element 2 OR element 2 is undefined
    - push element 1 to merged
    - remove element 1 from arr1
  - if element 2 is less than element 1 OR element 1 is undefined
    - push element 2 to merged
    - remove element 2 from arr2
  - if they are the same
    - push both to merged
- return merged

*/

function lesserValue(val1, val2) {
  return val1 < val2 || val2 === undefined;
}

function pushAndMerge(element, array, merged) {
  merged.push(element);
  array.shift();
}

function merge(arr1, arr2) {
  let numberArr1 = arr1.slice();
  let numberArr2 = arr2.slice();
  let merged = [];

  while (numberArr1.length > 0 || numberArr2.length > 0) {
    let element1 = numberArr1[0];
    let element2 = numberArr2[0];

    if (lesserValue(element1, element2)) {
      pushAndMerge(element1, numberArr1, merged);
    } else if (lesserValue(element2, element1)) {
      pushAndMerge(element2, numberArr2, merged);
    } else if (element1 === element2) {
      pushAndMerge(element1, numberArr1, merged);
      pushAndMerge(element2, numberArr2, merged);
    }
  }
  
  return merged;
}

console.log(merge([], []));                    // []
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]
console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([-11, 5, 9], [-2, 0, 8]));   // [-11, -2, 0, 5, 8, 9]

// Done in 31 minutes
```

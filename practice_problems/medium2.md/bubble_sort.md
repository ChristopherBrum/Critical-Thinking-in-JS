# Bubble SOrt

```js
/*
A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of each pair of consecutive elements are compared. If the first value is greater than the second, the two elements are swapped. This process is repeated until a complete pass is made without performing any swaps — at which point the array is completely sorted.

6	2	7	1	4	Start: compare 6 > 2? Yes
2	6	7	1	4	Swap
2	6	7	1	4	6 > 7? No (no swap)
2	6	7	1	4	7 > 1? Yes
2	6	1	7	4	Swap
2	6	1	7	4	7 > 4? Yes
2	6	1	4	7	Swap
2	6	1	4	7	2 > 6? No
2	6	1	4	7	6 > 1? Yes
2	1	6	4	7	Swap
2	1	6	4	7	6 > 4? Yes
2	1	4	6	7	Swap
2	1	4	6	7	6 > 7? No
2	1	4	6	7	2 > 1? Yes
1	2	4	6	7	Swap
1	2	4	6	7	2 > 4? No
1	2	4	6	7	4 > 6? No
1	2	4	6	7	6 > 7? No
1	2	4	6	7	1 > 2? No
1	2	4	6	7	2 > 4? No
1	2	4	6	7	4 > 6? No
1	2	4	6	7	6 > 7? No
1	2	4	6	7	No swaps; all done; sorted

We can stop iterating the first time we make a pass through the array without making any swaps because this means that the entire array is sorted.


Write a function that takes an array as an argument and sorts that array using the bubble sort algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. You may assume that the array contains at least two elements.

-----------------------------------------

Input: 1 array
- the array contains numbers or strings
- the array will contai like types i.e. all numbers, or all strings
- there will always be at least two elements in the given array

Output: 1 array (same array that was passed in)
- a mutated version of the given array sorted values

Rules:
- wrtie a function that takes an array and returns a mutated version of that array will elements sorted
- the function should use the bubble sort algorithm to sort the given elements

Bubble Sort:
- iterate over the array elements
- compare the first two elements
- if the first is greater, swap elements
- move on to the next two elements
- if an iteration does not result in any swapping the array is fully sorted and we can stop iteration

Questions:
- we will only have numbers and strings as array elements
- will always be passed an array

DS;
- given array will be what we iterate over

Algo
- declare a idx variable set to 0
- declare a swapped variable set to false
- loop through the array while swapped is true...
  - declare idx2 to idx + 1
  - if element1 > element2
    - save both elements to a variable and swap their places
    - set swapped to true
  
  - if swapped is true
    - reset idx to 0
    - reset swapped to false
  - otherwise
    - break
- return the arr

*/

function bubbleSort(array) {
  let idx2;
  let swapped;

  do {    
    swapped = false;

    array.forEach((el, idx1) => {
      idx2 = idx1 + 1;
    
      if (array[idx1] > array[idx2] && typeof idx2 !== 'undefined') {
        let first = array[idx1];
        let second = array[idx2];
        array[idx1] = second;
        array[idx2] = first;
        swapped = true;
      }

    })
  } while (swapped)
  
  return array;
}

const array1 = [5, 3];
console.log(bubbleSort(array1));
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
console.log(bubbleSort(array2));
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
console.log(bubbleSort(array3));
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
```

# Transpose

```js
/*
A 3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays that each contain three elements. For example, the 3x3 matrix shown below:

1  5  8
4  7  2
3  9  6

is represented by the following array of arrays:

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

An array of arrays is sometimes called a "nested array" because each inner subarray is nested inside an outer array. It also may be called a "two-dimensional array"

To access an element in the matrix, you can use bracket notation twice (such as array[][]), and include both the row index and column index within the brackets. Given the above matrix, matrix[0][2] is 8, and matrix[2][1] is 9. An entire row in the matrix can be referenced using a single index: matrix[1] is the row (subarray) [4, 7, 2]. Furthermore, given a row, we can determine the total number of columns by counting the number of elements in the row. Unfortunately, a convenient notation for accessing an entire column does not exist.

The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns of the original matrix. For example, the transposition of the matrix shown above is:

1  4  3
5  7  9
8  2  6

Write a function that takes an array of arrays that represents a 3x3 matrix and returns the transpose of the matrix. You should implement the function on your own, without using any external libraries.

Take care not to modify the original matrix — your function must produce a new matrix and leave the input matrix array unchanged.

-----------------------------------------------------------------

Input: 1 nested array
- will contain 3 nmested arrays
  - each of which will contain 3 number elements

Output: 1 nested array
- 3 nested arrays
  - each containing 3 number elements
- all nested elements of the given array at index 0 will be in the first nested array
- all nested elements of the given array at index 1 will be in the second nested array
- all nested elements of the given array at index 2 will be in the third nested array

Rules:
- given an array of arrays
- transpose the given arrays so that:
  - elementsv of the gien array at index 0 will be in the 1st nested array
  - elements of the given array at index 1 will be in the 2nd nested array
  - elements of the given array at index 2 will be in the 3rd nested array
  - in the order they appeared in the original array
- do not mutate the given array

Questions:
- will we always be given an arg? yes
- will the arg always be an array? yes
- will the array always contain 3 elements? yes
- will the 3 elements always be arrays? yes
- can the nested arrays be mutated? no
- will the arrays all contain 3 elements? yes
- will these 3 nested arrays always contain number elements? yes
- will these number elements always be between 1-9? yes
- will these number elements always be unique? yes

DS:
- utilizing arrays 

Algo:
- create a copy of the given array
  - create a copy of each of the nested array within the given array
- decalre a variable set to an empty array (transposed)
- iterate over the given arrays elements by index (outerIdx)
  - iterate over each of the nested arrays elements (innerIdx)
    - if transposed at innerIdx is undefined set it []
    - push the current element at innerIdx to the array in transposed at innerIdx
- return transposed

*/

function transpose(array) {
  array = array.map(subArray => {
    return subArray.map(el => el);
  });

  let transposed = [];

  array.forEach((subArray, outerIdx) => {
    subArray.forEach((element, innerIdx) => {
      transposed[innerIdx] = transposed[innerIdx] || [];
      transposed[innerIdx].push(element);
    });
  });

  return transposed;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

// Done in 20 minutes
```

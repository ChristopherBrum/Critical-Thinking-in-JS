# Total Square Area - Practice Problem

## Part 1

```js
// For this practice problem, we'll represent rectangles as Arrays with two elements: a height and a width.

// Write a Function named totalArea that takes an Array of rectangles as an argument. The Function should return the total area covered by all the rectangles.

/*
Problem:
- Arrays will be represented as 2 element arrays, one element is the height, the other is the width
- write a function that takes an array of rectangles (nested arrays) as an argument
- find and return the TOTAL area of ALL rectangles

Implicit Rules:
- All inputs will be valid
  - numbers greater than 0
  - two elements
  - not empty

- Examples
  [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]]
  find area of each rectangle
  [12, 36, 8, 81, 4]
  combine all areas together and return...

- Algo:
  - transform the given array by multiplying the elements of each rectangle (subarray)
  - reduce the array of areas to combine all individual areas into the total area
  - return total area 

*/

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

const totalArea = rectangles => {
  let areas = rectangles.map(([height, width]) => height * width );
  let allAreas = areas.reduce((total, value) => total + value);

  return allAreas;
}


console.log(totalArea(rectangles));    // 141
```

---

## Part 2

```js
// For this practice problem, we'll represent rectangles as Arrays with two elements: a height and a width.

// Write a Function named totalArea that takes an Array of rectangles as an argument. The Function should return the total area covered by all the rectangles.

/*
Problem:
- Arrays will be represented as 2 element arrays, one element is the height, the other is the width
- write a function that takes an array of rectangles (nested arrays) as an argument
- find and return the TOTAL area of ALL rectangles

Implicit Rules:
- All inputs will be valid
  - numbers greater than 0
  - two elements
  - not empty

- Examples
  [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]]
  find area of each rectangle
  [12, 36, 8, 81, 4]
  combine all areas together and return...

- Algo:
  - transform the given array by multiplying the elements of each rectangle (subarray)
  - reduce the array of areas to combine all individual areas into the total area
  - return total area 
*/

// Now, write a second Function named totalSquareArea. This Function should calculate the total area of a set of rectangles, just like totalArea. However, it should only include squares in its calculations: it should ignore rectangles that aren't square.

/*
Problem
- write a function that calculates the total area of a set of rectangles that are squares
  - the height and width must be equal
  - ignore non square rectangles

Algo
- write a function that take one array argument containing two element arrays
- filter the given array to contain only elements with a matching height and width
- pass the filtered array to totalArea
- return the value returned by totalArea
*/

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

const totalArea = rectangles => {
  let areas = rectangles.map(([height, width]) => height * width );
  let allAreas = areas.reduce((total, value) => total + value);

  return allAreas;
}

const totalSquareArea = (rectangles) => {
  let squares = rectangles.filter(([height, width]) => height === width )
  let squareAreas = totalArea(squares);

  return squareAreas;
}

console.log(totalArea(rectangles));    // 141
console.log(totalSquareArea(rectangles));    // 121
```

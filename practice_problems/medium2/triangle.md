# Triangle

```js
/*
A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
To be a valid triangle, the sum of the lengths of the two shortest sides must be greater than the length of the longest side, and every side must have a length greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

----------------------------------------

Input: 3 numbers, representing the 3 sides of a triangle
- 

Output: 1 string
- the returned string will be correlated with the triangle type; 
  - 'equilateral', 
  - 'isosceles', 
  - 'scalene'
- or will state the triangle is 
  - 'invalid'
- invalid input types
  - undefined

Rules:
- function will take 21 numbers representing the lengths of a triangle
- will determine whether the triangle is valid
- and then determine what type of trianbgle it is

Implicit:
- floating point numbers are acceptable as an arg
- 0 is considered a valid arg

- Valid Triangle:
  - the 2 shortest sides added together > longest side
  - each side must be > 0

- Triangle types:
  - Equilateral: All sides are of equal length
  - Isosceles: Two sides are of equal length
  - Scalene: All three sides are of different lengths

Questions:
- can we expect there to always be 3 side arguments?
  no, must check to see if there are 3 args
- how should I handle a non-number input?
  return undefined
- how should I handle a missing argument?
  return undefined
- should I expect negative numbers as arguements?
  yes, return 'invalid' if encountered
- should I expect NaN or infinity as arguments?
  should be able to detect these values, return 'invalid'

DS:
- collect the numbers into an array for easy iteration
- sort the array so I can weasily identify the smallest values

Algo:
- collect the three args into an array (sides)
- if any of the sides...
  - are not a number
    - return undefined
- if any of the sides...
  - are <= 0
  - are NaN
  - infinity
    - return 'invalid'
    
- sort the array
- if the first two sides added together are less than the third
  - return 'invalid'
  
- if all sides are equal
  - return 'Equilateral'
- if two are the same 
  - return 'Isosceles'
- if the 3 sides are different
  - return 'Scalene'
*/

function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3];
  
  if (invalidType(sides)) return undefined;
  if (invalidNumber(sides)) return 'invalid';
  
  sides.sort();
  
  if (invalidSideLengths(sides)) return 'invalid';
  
  if ((sides[0] === sides[1]) && (sides[1] === sides[2])) {
    return 'Equilateral';
  } else if ((sides[0] !== sides[1]) 
             && (sides[1] !== sides[2]) 
             && (sides[0] !== sides[2])) {
    return 'Scalene';
  } else {
    return 'Isosceles';
  }
}

function invalidType(sides) {
  return sides.some(side => typeof side !== 'number');
}

function invalidNumber(sides) {
  return sides.some(side => {
    return (side < 1) || (Number.isNaN(side)) || (!isFinite(side));
  });
}

function invalidSideLengths(sides) {
  return sides[0] + sides[1] < sides[2];
}

console.log(triangle());               // undefined
console.log(triangle('a', 'b', 'b'));  // undefined
console.log(triangle(['a', 'b', 'c']));// undefined
console.log(triangle(1, 2));           // undefined
console.log(triangle(1));              // undefined

console.log(triangle(3, 4, -5));       // 'invalid'
console.log(triangle(3, 4, Infinity)); // 'invalid'
console.log(triangle(3, 4, NaN));      // 'invalid'

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
```

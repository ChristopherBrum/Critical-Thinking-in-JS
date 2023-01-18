# Tri-Angles

```js
/*
A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
To be a valid triangle, the sum of the angles must be exactly 180 degrees, and every angle must be greater than 0. If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to worry about floating point errors. You may also assume that the arguments are in degrees.

----------------------------------------------

Input: 3 numbers, representing the 3 angles of a triangle 
- all arguments can be assumed to be in degrees
- all arguments will be whole numbers (not floating point)

Output: 1 string
- the function will determine if the triangle is;
  - 'right', 
  - 'acute', 
  - 'obtuse', 
  - or 'invalid'
- ...returning its classification
  
Rules:
- write a function that takes 3 numbers as the degrees of a triangle
- based on the degrees, determine whether the triangle is 'right', 'acute', 'obtuse', or 'invalid'

valid triangle
- the sum of the 3 angles must equal 180
- each angle must be > 0

triangle classifications:
- 'Right': only 1 angle === 90 degrees
- 'Acute': all three angles < 90 degrees
- 'Obtuse': only 1 angle is > 90 degrees

Questions:
- invalid inputs;
  - how do I handle a non-number type argument?
    return 'invalid'
  - how do I handle a missing argument?
    return 'invalid'
  - how do I handle a NaN or infinity argument?
    return 'invalid'

DS:
- collect the angles into an array for easy iteration
- numbers as the angles

Algo:
- collect angles into array (angles)
Invalid Input Handling:
  invalidType()
  - if any of the given angles...
    - are not a number type
    
  invalidValue()  
  - if any of the given angles...
    - are NaN
    - are Infinity
    - are < 1
      - return 'invalid'
    - if the combined sum of the angles !== 180 (reduce)
      - return 'invalid'
  
- if all angles are < 90 (every)
  - return 'Acute'
- if any angle is 90 (some)
  - return 'Right'
- if any angle is > 90 (some)
  - return 'Obtuse'
*/

function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];
  
  if (invalidType(angles)) return 'invalid';
  if (invalidValue(angles)) return 'invalid';
  if (invalidAngles(angles)) return 'invalid';
  
  if (angles.every(angle => angle < 90)) {
    return 'acute';
  } else if (angles.some(angle => angle === 90)) {
    return 'right';
  } else if (angles.some(angle => angle > 90)) {
    return 'obtuse';
  }
}

function invalidType(angles) {
  return angles.some(angle => typeof angle !== 'number');
}

function invalidValue(angles) {
  return angles.some(angle => {
    return Number.isNaN(angle) || !isFinite(angle) || (angle < 1)
  });
}

function invalidAngles(angles) {
  return angles.reduce((sum, angle) => sum + angle, 0) !== 180;
}

console.log(triangle());                 // 'invalid'
console.log(triangle('a', 'b', 'c'));    // 'invalid'
console.log(triangle(['a', 'b', 'c']));  // 'invalid'
console.log(triangle(90, 75, NaN));      // 'invalid'
console.log(triangle(45, 45, Infinity)); // 'invalid'
console.log(triangle(90, 75, -5));       // 'invalid'

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
console.log(triangle(80, 80, 80));       // "invalid"
```

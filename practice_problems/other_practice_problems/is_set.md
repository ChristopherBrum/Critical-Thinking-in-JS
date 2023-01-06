# Is Set

```js
/*
In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. All three cards must:

Have the same color or different colors.
Have the same number or different numbers.
Have the same shades or different shades.
Have the same shape or different shapes.
The four properties are:

Colors: red, purple, green
Numbers: 1, 2, 3
Shades: empty, lined, full
Shapes: squiggle, oval, diamond
Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid set.

Here is an example of a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]

// "Same" properties: color
// "Different" properties: numbers, shading and shapes
The following is not a set:

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "purple", number: 3, shade: "full", shape: "oval" }
]

// Colors are not all identical, but not all different.

Notes
A set cannot have 2/3 cards having the same property. Either all must share that property, or none will share that particular property.

---------------------------------------

Input: 1 array of objects
- each object will have a color, number, shade, and shape property

Output: 1 boolean
- returns true if the objects can create a valid set

Rules:
- take an array of 3 objects each with the properties color, number, shade, and shape
- determine if the objects comprise a valid set
- a valid set will consist of
  - each property being the same or all different
  - Valid properyty values:
    - Colors: red, purple, green
    - Numbers: 1, 2, 3
    - Shades: empty, lined, full
    - Shapes: squiggle, oval, diamond

Questions:
- Can I always expect an array as an argument?
- Will this array always contain 3 objects?
- Will each object have the properties listed above, and only those properties?
- Will the values of the properties fall into the valid values listed above?

DS:
- extract the keys of the objects into an array
- iterate over keys and the given array

Algo:
- declare a variable with the valid properties
- iterate through the keys (key)
  - declare tempObj
  - iterate through the given array of values (card)
    - add the value to tempObj as the prop and set to/increment by 1
  - after iteration is through for each key, find the values of tempObj
  - if 2 is found in the values arrays, return false
- return true
*/

function isSet(array) {
  const VALID_PROPERTIES = ['color', 'number', 'shade', 'shape'];

  for (let i = 0; i < VALID_PROPERTIES.length; i += 1) {
    let prop = VALID_PROPERTIES[i];
    let tempObj = {};

    for (let j = 0; j < array.length; j += 1) {    
      tempObj[array[j][prop]] = tempObj[array[j][prop]] || 0;
      tempObj[array[j][prop]] += 1;
    }
    if (Object.values(tempObj).includes(2)) return false;
  }
  return true;
}

console.log(isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
])); // ➞ true

console.log(isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
])); // ➞ true

console.log(isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
])); // ➞ false
```

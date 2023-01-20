# Split Bunches

```js
/*
You bought a few bunches of fruit over the weekend. Create a function that splits a bunch into singular objects inside an array.

Notes
The input array will never be empty.
Objects will always have a name and quantity over 0.
The returned object should have each fruit in the same order as the original.

Input: 1 array of objects
- the array will never be empty
- objects will always have a name and quantity property
- the quantity properties will always be > 0

Output: 1 array of objects
- objects will always have a name and quantity property
- the obejcts will be in the same order as in the given array of objects

Rules:
- given an array of objects where each object represents a number of objects equal to its quantity
- return an array of objects with each singluar object represented on its own in the array

Questions:
- will there always be 1 arg passded in? yes
- with this arg always be an array? yes
- can this array be sparse? no
- can this array contain non-object elements? no
- can the objects have properties besides name and quantity? no
- will the value associated with name always be a string? yes
- will the value associated with quantity always be a number? yes
- will the name property always consist of lowercase letters only? yes
- can the quantity property ever be NaN, infinity, or a decimal? no
- should we mutate the given array? doesn't matter

DS:
- primarily working with arrays to iterate over and process object data
- will be working with and creating objects as well

Algo:
- map over the given array (obj)
  - declare an empty array set to the currentArr variable
  - loop a number of times equal to the objects quantity
    - create an object with the name property of the current onj and a quantity of 1
    - push to current array
  - return array
- flatten the array and return

*/

function splitBunches(arrayOfObjects) {
  let fruit = arrayOfObjects.map(obj => {
    let currentArr = [];
    
    for (let i = 0; i < obj.quantity; i += 1) {
      let newObj = { name: obj.name, quantity: 1 };
      currentArr.push(newObj);
    }

    return currentArr;
  });

  return fruit.flat();
}

console.log(splitBunches([
  { name: "grapes", quantity: 2 }
])); // [
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 }
// ]


console.log(splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 }
])); // [
//   { name: "currants", quantity: 1},
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]

// Done in 19 mins
```

# Simplify List

```js
/*
You were tasked with making a list of every makeup item your local pharmacy had in stock. You created a very long array of each item, with each element having both a name and brand property. Now you're looking to simplify the list by combining duplicate items, and adding a count property to everything.

There will always be one or more element in the given array.
Each element will always have a brand and name property.
All duplicates will be displayed in order.

------------------------------------------------------------

Input: 1 Array of objects
- the object will have a brand and name property

Output: 1 Array of objects
- each object will have a brand, name, and count property
- the count property will have a number as a value

Rules:
- write a function that takes an array of objects as an argument
- return an object that combines duplicate products and adds a count property
- there will always be 1 or more elements in the given array
- the array objects will always have a brand and name property, and only these properties
- the values to these properties will always be strings
- the string values will never be empty
- the strings are case insensitive when determining whether they are the same products
- each of word of a property value should be capitalized

Questions:
- will an argument always be passed in? yes
- will the argument always be an array? yes
- will the elements in the array always be objects? yes
- will the objects in the array always contain a brand and name property? yes
- will the objects in the array only contain a brand and name property? yes
- will the brand and name properties always have a string as a value? yes
- when determining if a brand is the same as another products brand, does case matter? no
- when determining if a name is the same as another products name, does case matter? no
can the string values be empty? no
- if the case is different, how shouold we return the property valuess case?

DS:
in: 1 array of objects
out: 1 array of objects (simplified)
in-function:
- iterating through arrays
- utilizing objects and creating new objects

Algo:
- decalre a simplified var to an empty array
- iterate over the given array
  - if the simplified has a prop brand and name that match the current obj
    - increment the count prop by 1
  - otherwise
    - set brand, name, and count as properties in simplified
    - brand and name will be that of the current object
    - count will be 1
- return simplified
*/

function simplifyList(array) {
  let simplified = [];

  array.forEach(obj => {
    let simpleObjFound = simplified.some(simpleObj => {
      return simpleObj.brand === obj.brand && simpleObj.name === obj.name
    });

    if (simpleObjFound) {
      simplified.forEach(simpleObj => {
        if (simpleObj.brand === obj.brand && simpleObj.name === obj.name) {
          simpleObj.count += 1;
        }
      })
    } else {
      let newObj = { brand: obj.brand,
                     name: obj.name,
                     count: 1,
                   }
      simplified.push(newObj)
    }
  });
  return simplified;
}

console.log(simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" }
])); // ➞ [
//   { brand: "Nars", name: "Cosmetics Voyageur Pallete", count: 2 },
//   { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
//   { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
// ]
```

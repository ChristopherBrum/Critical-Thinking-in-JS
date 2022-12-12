# Get Object 

```js
/*
Create a function that takes an object and returns an object of all entries having unique marks. If the marks are the same, take who is eldest.

Notes
Check the examples above for clarification.

-----------------------------------------------------

Input: 1 object
- keys numberic string
- values objects
  - the objects contain an age, name, and marks property
- property values of given objects are not all unique

Output: 1 object
- objects of the given argument with unique marks properties
- if arg is invlaid log 'invalid input' and return undefined

Rules:
Explicit:
- take an object as an argument
- return a new object containing the objects with a unique marks property 
  - if the marks property is not unique, take the object with the greater age

Implicit:
- the names of the returned objects do not nbeed to be unique

Questions:
- what do we do if argument is invalid because
  - it is empty
  - is not an object type
  - does not contain the appropriate keys
- does it matter if the object being returned is the given object? 
- how do I habdle an empty object as arg?

DS:
- in: object
- out: object

- arrays to collect/iterate through object keys

Abstractions:
- filter over the given object 
- iterate over the remaining property keys within the filter loop

Algo:
- return undefined if the argument, log message
  - is not an object type
  - is an array

- collect the keys of the given property into an array
- declare a new object variable
- iterate over the given object using the array of keys (outerKey)
  - iterate over the object keys again (innerKey)
    - if outerKey === innerKey
      - skip to next iteration
    - if outerKey marks === innerKey marks
      - compare if outerKey age is greater than innerKey age 
        - set the key and value for the new objectv
    - otherwise
      - set the key and value for the new object
- return the new object
*/

function getObject(obj) {
  if (typeof obj !== 'object' || Array.isArray(obj)) {
    console.log('Invalid input.');
    return undefined;
  }
  
  let keys = Object.keys(obj);
  let filteredObj = {};
  
  for (let outerIdx = 0; outerIdx < keys.length; outerIdx += 1) {
    let outerObj = obj[keys[outerIdx]];
    if (markExistInFiltered(filteredObj, outerObj)) continue;
    
    for (let innerIdx = 0; innerIdx < keys.length; innerIdx += 1) {
      let innerObj = obj[keys[innerIdx]];
      
      if (outerIdx === innerIdx) {
        continue;
      } else if (outerObj.marks === innerObj.marks && outerObj.age > innerObj.age) {
        filteredObj[keys[outerIdx]] = obj[keys[outerIdx]];
      } else {
        filteredObj[keys[outerIdx]] = obj[keys[outerIdx]];
      }
    }
  }
  return filteredObj;
}

function markExistInFiltered(filteredObj, outerObj) {
  return Object.keys(filteredObj).some(key => {
           return filteredObj[key].marks === outerObj.marks
         });
}

console.log(getObject()); // undefined log: 'invalid input'
console.log(getObject(1234)); // undefined log: 'invalid input'
console.log(getObject([])); // undefined log: 'invalid input'
console.log(getObject('HI')); // undefined log: 'invalid input'

console.log(getObject({})); // {}

console.log(getObject({
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 17, name: "julie", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" }
})); // ➞ {
//   "0": { age: 18, name: "john", marks: "400" },
//   "1": { age: 16, name: "Robin", marks: "200" },
//   "2": { age: 16, name: "Bella", marks: "300" }
// }

console.log(getObject({
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 17, name: 'julie', marks: '400'},
  2: {age: 16, name: 'Robin', marks: '200'},
  3: {age: 16, name: 'Bella', marks: '300'},
  4: {age: 16, name: 'john', marks: '250'},
  5: {age: 15, name: 'julie', marks: '250'}
})); // ➞    {
//   0: {age: 18, name: 'john', marks: '400'},
//   1: {age: 16, name: 'Robin', marks: '200'},
//   2: {age: 16, name: 'Bella', marks: '300'},
//   3: {age: 16, name: 'john', marks: '250'}
// }
```

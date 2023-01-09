# Crop Dehydrated

```js
/*
You're given a 2D array / matrix of a crop field. Each crop needs to be hydrated. Each water source hydrates the 8 tiles around it. With "w" representing a water source, and "c" representing a crop, is every crop hydrated?

Input: 1 array of arrays
- nested arrays will contain the string characters 'w' and 'c'
- 'w' represents water
- 'c' represents a crop

Output: 1 boolean value
- represents whether each crop in the array of arrays is 'watered'
- being watered means being within onbe 'space' of a 'w' character

Rules:
- write a function that takes an array of arrays as an argument
- determine whether each 'c' character in the nested arrays is 1 element away from a 'w' character
  - a 'w' character is +- 1 element from a 'c' character in the same array
  - a 'w' character is +- 1 element from a 'c' character in the nested array before or after the array containing the 'c' character

- when a 'c' character is encounter
  - check to see if a 'w' charcter is located...
    - in the same arr at index - 1 and index + 1
    - in the nested array before and after the current array
      - at index, index - 1, and index + 1
  - return false if not 'w' is found

Questions:
- Can I always expect a single arg to be passed in?
- Will this argument alwyas be an array?
- Will this array always contain nested arrays?
- Will each nested array contain elements?
- Will those elements always be 'w' and 'c' characters?
- Will those characters always be lowercase?
- WIll the nested arrays always be of the same length?

DS:
- ins: array of arrays
- outs: boolean
- intermediate:
  - working with arrays

Algo:
- iterate over the given array (outerIdx)
  - iterate over each subarray (innerIdx)
    - if the current character is 'c'
      - determine if there is a 'w' character one element away
      - if the characters (innderIdx - 1) or (innerIdx + 1) are not 'w'
        - and if the characters at innerIdx or innerIdx +- 1, of outerIdx +- 1, are not 'w'
      - return false
- return true

*/

function collectElements(nestedArr, innerIdx) {
  if (!Array.isArray(nestedArr)) return [];
  let startIdx = innerIdx - 1 < 0 ? 0 : innerIdx - 1;
  return nestedArr.slice(startIdx, innerIdx + 2);
}

function noWater(array) {
  return !array.includes('w');
}

function cropHydrated(array) {
  for (let outerIdx = 0; outerIdx < array.length; outerIdx += 1) {
    for (let innerIdx = 0; innerIdx < array[outerIdx].length; innerIdx += 1) {
      let nestedArr = array[outerIdx]
      if (nestedArr[innerIdx] === 'c') {
        let nextdoorElements = collectElements(nestedArr, innerIdx);
        
        if (noWater(nextdoorElements)) {
          let previousElements = collectElements(array[outerIdx - 1], innerIdx);
          let nextElements = collectElements(array[outerIdx + 1], innerIdx);

          if (noWater(previousElements) && noWater(nextElements)) return false;
        }
      }
    }
  }

  return true;
}

console.log(cropHydrated([
  [ "w", "c" ],
  [ "w", "c" ],
  [ "c", "c" ]
])); // ➞ true

console.log(cropHydrated([
  [ "c", "c", "c" ]
])); // ➞ false
// There isn"t even a water source.

console.log(cropHydrated([
  [ "c", "c", "c", "c" ],
  [ "w", "c", "c", "c" ],
  [ "c", "c", "c", "c" ],
  [ "c", "w", "c", "c" ]
])); // ➞ false
```

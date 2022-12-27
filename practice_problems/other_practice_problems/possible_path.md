# Possible Path

```js
/*
A floor plan is arranged as follows:

You may freely move between rooms 1 and 2.
You may freely move between rooms 3 and 4.
However, you can enter the hallway to move between rooms 2 and 4.

Create a function that validates whether the route taken between rooms is possible. The hallway will be given as the letter "H".

Notes
A route may begin or end in any room (including the hallway).
All inputs are either numbers 1-4 or the letter "H".
No rooms will repeat.

-----------------------------------
Input: 1 array
- will contain the characters 1-4 and 'H'
- will always be an array with a combination of the above characters 

Output: 1 boolean
- determines whether the route given in array form is possible

Rules:
- write a funtion that determines whether a 'route' is possible 
- a route may begin an any room, including the 'H'allway
- no rooms will repeat consecutively

Floor plan:
- rooms 1 and 2 connect
- rooms 3 and 4 connect
- rooms 2 and 4 connect with 'H'

- room 1 can connect with room 2 ONLY
- room 3 can connect with room 4 ONLY
- room 2 can connect with room 1 and 'H' ONLY
- room 4 can connect with room 3 and 'H' ONLY
- 'H' can connect with room 3 and 4 ONLY

- if no arg is passed in, or if a different type is passed in, or if array is empty...
  - return undefined and log 'no path provided'
- if an invalid element is passed in...
  - return undefined and log 'invalid path'

DS:
- keep working the given for easy iterate
- utilize a object to operate as a 'valid moves' tables

Algo:  
- return undefined and log 'no path provided' if
  - if no arg is passed in
  - if a different type is passed in
  - if array is empty
- return undefined and log 'invalid path' if
  - an invalid element is found within the given array

- define a validMoves object to a constant
- iterate through the array
  - if idx is 0
    - set current element to currentRoom
  - otherwise
    - if the current value is within the valid moves of the current room
      - set current value to current room
    - otherwise return false
- return true

*/

const VALID_MOVES = { 
  1: [2],
  2: [1, 'H'],
  3: [4],
  4: [3, 'H'],
  'H': [2, 4],
}

function possiblePath(arr) {
  if (invalidType(arr)) {
    console.log('no path provided');
    return undefined;
  }

  if (invalidElement(arr)) {
    console.log('invalid path');
    return undefined;
  }

  let currentRoom;
  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0) {
      currentRoom = arr[i];
      continue;
    }
    
    if (VALID_MOVES[currentRoom].includes(arr[i])) {
      currentRoom = arr[i];
    } else {
      return false;
    }
  }

  return true;
}

function invalidType(arg) {
  return (!Array.isArray(arg) || arg.length === 0);
}

function invalidElement(arr) {
  const validElements = [1, 2, 3, 4, 'H'];

  return arr.some(el => !validElements.includes(el));
}

console.log(possiblePath()); // undefined, log: 'no path provided'
console.log(possiblePath([])); // undefined, log: 'no path provided'
console.log(possiblePath({})); // undefined, log: 'no path provided'
console.log(possiblePath(123)); // undefined, log: 'no path provided'

console.log(possiblePath([1, 2, 'W', 'H'])); // undefined, log: 'invalid path'
console.log(possiblePath(['2', 'H', 3])); // undefined, log: 'invalid path'

console.log(possiblePath([1, {a: 'apple'}, "H", 4, 3])); // true
console.log(possiblePath([1, 2, "H", 4, 3])); // true
console.log(possiblePath(["H", 1, 2])); // false
console.log(possiblePath([4, 3, 4, "H", 4, "H"])); // true
```

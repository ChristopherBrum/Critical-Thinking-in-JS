# Light Switch

```js
/*
You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

-------------------------------------------

Input: 1 number
- represents the total number of switches

Output: 1 array
- represnets the total number of swirches that are on at the end

Rules:
- each switch starts in the 'off' position
- on the first iteration, toggle every single switch
- on the second iteration toggle every 2 switches
- on the third iteration toggle every 3 switches
- etc.
- continue this process until you'vve gone through 'n'  iterations

Example:
lightsOn(5)

Detailed result of each round for `5` lights
Round 1: all lights are on
Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

returns --> [1, 4]

Pattern:

- if we start at 0, we add 1 to first iteration
-  we then add 2 to the second iteration
-  we then add 3 to the second iteration
-  we then add 4 to the second iteration

iteration 1
- starts at index 0
- toggles every index (0, 1, 2, 3)

iteration 2
- starts at index 1
- toggles over every 2 indexes (1, 3, 5, 7)

iteration 3
- starts at index 2
- toggles pver every 3 indexes (2, 5, 8, 11)

iteration 4
- starts at index 3
- toggles over every 4 indexes (3, 7, 11, 15)

starting index --> increments by 1 each iteration
toggles at every iteration number

Questions:
- Will we always be supplied with one argument of the type number? 
  - no, if any other input type is supplied, return false
- Will the input number always be positive? If not, how do we deal?
  no, return an empty array
- Should I take into account NaN and Infinity?
  yes, if they are supplied return, an empty array
- How should I handle 0 input? 
  return an empty array

Algo:
- return false if the supplied argument is not a number
- return an empty array if...
  - the arg is less than 1
  - is NaN
  - is Infinity or -Infinity

- create an array of a length equal to the given number (switches)
  - each element should be set to false
  
- iterate over 'switches' using a for loop (switch, idx)
  - iterate over the entire array
    - starting at idx
    - toggle each element if its index + 1 is evenly divisible by count + 1
- map over the given array and return the index value + 1 for any element that is true
- selectr all truthy values from the array
- return the array

*/

function lightsOn(number) {
  if (invalidType(number)) return false;
  if (invalidNumber(number)) return [];

  let switches = [...Array(number)].map(el => false);

  for (let i = 0; i < switches.length; i += 1) {
    for (let index = i; index < switches.length; index += (i + 1)) {
      switches[index] = (switches[index] ? false : true);
    }
  }

  return switches.map((el, idx) => el ? (idx + 1) : undefined)
                 .filter(el => typeof el !== 'undefined');

}

function invalidType(value) {
  return typeof value !== 'number';
}

function invalidNumber(num) {
  return ((num < 1) || (Number.isNaN(num)) || !isFinite(num));
}

console.log(lightsOn());             // false
console.log(lightsOn('123'));        // false
console.log(lightsOn({}));           // false
console.log(lightsOn(true));         // false

console.log(lightsOn(0));           // []
console.log(lightsOn(-1));          // []
console.log(lightsOn(NaN));         // []
console.log(lightsOn(Infinity));    // []
console.log(lightsOn(-Infinity));   // []

console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(10));       // [1, 4, 9]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

## Alternate Solution

```js
/*
You have a bank of switches before you, numbered from 1 to n. Every switch is connected to exactly one light that is initially off. You walk down the row of switches and toggle every one of them. You walk back to the beginning of the row and start another pass. On this second pass, you toggle switches 2, 4, 6, and so on. On the third pass, you go back to the beginning again, this time toggling switches 3, 6, 9, and so on. You continue to repeat this process until you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and returns an array of the lights that are on after n repetitions.

Examples:

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

lightsOn(100);      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

------------------------------------------------------------

Input: 1 number
- representing the number of switches we're working with

Output: 1 array
- each number represents the switches that are on after toggling n number of switches

Rules:
- taking 1 array as an argument
- determine which switches are on after toggling every n switches up untl we reach the given number
  - for example
  - if given 6
    - rd 1: every switch is toggled (all switches on) --> 1, 2, 3, 4, 5, 6 all ON
    - rd 2: every two switches are toggled (2, 4, 6 toggled) --> 1, 3, 5 all ON
    - rd 3: every 3 switches toggled (3, 6 toggled) --> 1, 5, 6 all ON
    - rd 4: every 4 switches toggle (4 toggled) --> 1, 4, 5, 6 all ON
    - rd 5: every 5 switches toggled (5 toggled) --> 1, 4, 6 all ON
    - rd 6: every 6 switches toggled (6 toggled) --> 1, 4 all ON
    return [1, 4]
  
Implicit Rules:
- the number arg will always be given
- the number arg will always be a positive number
- the given number will be > 0

Pattern:
- starting with 1 as a incrementer, increment by ascending odd numbers
- while the value is <= the given number
  - add the incrementor to the last value passed to the return array, and push to the return array


Questions:
- will there always be 1 arg? yes
- will the arg always be a number? yes
- will the number ever be 0 or negative? no
- can the number eber be NaN , infinity or a decimal? no
- is there a limit to the size of the number? no

DS:
- working with arrays as a means of collection number values

Algo:
- declare a switchesOn variables set to an empty array
- set a increment variable to 1
- begin a while loop that breaks while increment is <= to the number passed in
  - if switchesOn length is 0, 
    - push increment to the switchesOn array
  - otherwise
    - add the last value of switchesOn to increment (sum)
    - if sum is <= to the number passed in 
      - push to switchesOn
  - increment the increment variable by 2
- return switchesOn
*/

function lightsOn(switches) {
  let switchesOn = [];
  let increment = 1;

  while (increment <= switches) {
    if (switchesOn.length === 0) {
      switchesOn.push(increment);
    } else {
      let sum = switchesOn.at(-1) + increment;
      if (sum <= switches) switchesOn.push(sum);
    }

    increment += 2;
  }

  return switchesOn;
}

console.log(lightsOn(1));        // [1]
console.log(lightsOn(3));        // [1]
console.log(lightsOn(4));        // [1, 4]
console.log(lightsOn(5));        // [1, 4]
console.log(lightsOn(8));        // [1, 4]
console.log(lightsOn(9));        // [1, 4, 9]
console.log(lightsOn(15));       // [1, 4, 9]
console.log(lightsOn(16));       // [1, 4, 9, 16]
console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn(121));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121]
```

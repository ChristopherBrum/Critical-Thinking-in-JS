# Star

```js
/*Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).

Input: 1 number
- the number will dictate the size and number of strings logged

Output: a series of strings logged to the console
- each string will consist of ' '  and '*' characters

Rules:
- write a function that takes a number and creates an 8 pointed star by logging multiple strings to the console
- the number passed in will determine the
  - length of the longest string (maxLength)
  - the number of messages to be logged
- other than the middle string, each string will contain exactly 3 '*' characters

Example:
num passed in --> 7 
- max string length --> 7
- num of strings logged --> 7
- middle string --> 7 '*' characters
- starting ' ' characters --> 0, 1, 2
- 1 '*' character
- ' ' characters between stars --> 2, 1, 0
- 1 '*' character
- ' ' characters between stars --> 2, 1, 0
- 1 '*' character

*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

patterns:
- starting blank space chars will always be 0, and increment 1 each string
- starting blank spaces between stars will be (n - 3) / 2, then decrement by 1 each string

DS:
- in: string
- out: series of strings logged
- iterating over a range of numbers
- constructing strings within the iteration
- collect strings into an array

Algo:
- construct the top of the star strings
  - declare a star var to an empty array
  - determine the max spaces (n - 3) / 2
  - set startingSpaces to 0
  - set middleSpaces to maxSpaces
  - declare a message variable
  - concat a number of blanks to message equal to startingSpaces, and concat a '*'
  - iterate two rounds
    - concat a number blank spaces equal to middleSpaces, concat a '*'
  - push message to star
  - reset star to an empty string
- construct the middle string
  - build a string consisting of n number of '*' characters
- copy and reverse top of star to create bottom of star
  - slice the star array
  - reverse the star array
- collects all strings into one array to allow for easy logging

*/

function star(n) {
  let middleSpaces = (n - 3) / 2;

  let topOfStar = createTopOfStar(middleSpaces);
  let middleOfStar = createMiddleOfStar(n);
  let bottomOfStar = topOfStar.slice().reverse();

  let star = topOfStar.concat(middleOfStar).concat(bottomOfStar);
  
  star.forEach(line => console.log(line));
}

function createMiddleOfStar(n) {
  let str = '';

  for (let i = 0; i < n; i += 1) {
    str += '*';
  }

  return str;
}

function createTopOfStar(middleSpaces) {
  let topOfStar = [];
  let startingSpaces = 0;
  let row = '';

  while (middleSpaces >= 0) {
    for (let i = 0; i < startingSpaces; i += 1) {
      row += ' ';
    }

    row += '*';

    for (let j = 0; j < 2; j += 1) {
      for (let i = 0; i < middleSpaces; i += 1) {
        row += ' ';
      }

      row += '*';
    }

    startingSpaces += 1;
    middleSpaces -= 1;
    topOfStar.push(row)
    row = '';
  }
  
  return topOfStar;
}


star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *
console.log('')
star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *
```

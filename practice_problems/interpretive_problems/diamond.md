# Diamond

```js
/*
Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.
--------------------------------------
Input: 1 number
- n will always be odd
- 

Output: a series of outputs forming a diamond
- the outputs will consist of '*' and ' ' characters
- the diamond will be n lines long
- the longest message will be n characters in length

Rules:
- write a function that takes a number as an argument and log a diamond shape based
- the diamond will consist of n lines
- the middle line will contain all 'star' characters and be n characters in length
- the first and last lines will have a single '*' charcter and ' ' characters as filler
- each line after the first will contain 2 additional '*' characters

Example:
diamond(5);

max line length --> 5
min string length --> 5 / 2 --> 2.5, rounded up to --> 3

//   *      --> 2 spaces on left, 1 star centered (3 chars total)
//  ***     --> 1 space on left, 3 stars centered (4 chars total)
// *****    --> 0 spaces, 5 stars centered        (5 chars total)
//  ***     --> 1 space on left, 3 stars centered (4 chars total)
//   *      --> 2 spaces on left, 1 star centered (3 chars total)

first iteration will have 
- 1 star
- number of spaces equal to min string length - number of stars (2)

each iteration after
- stars will increment by 2
- spaces will decrease by 1

Questions:

DS:
- an array of strings that we build through iteration

Algo:
- declare:
  - empty array (diamondLines)
  - max string length
  - min string length

- iterate from 1 up to the max string length incrementing by 2 (stars)
  - concatenate a number of ' ' characters together equal to min string length - stars value
  - concatenate a number of '*' characters together equal stars value
  - concat these two strings together and push to diamondLines
- slice all strings except for the last of diamondLines
- reverse sliced elements
- concat to diamondLines
- iterate through diamondLines and log each line to the console

*/

function diamond(n) {
  let diamondLines = [];
  let spaces = Math.ceil(n / 2) - 1;

  for (let stars = 1; stars <= n; stars += 2) {
    let spaceStr = repeatChar(spaces, ' ')
    let starStr = repeatChar(stars, '*')
    let string = spaceStr + starStr;
    diamondLines.push(string);
    spaces -= 1;
  }

  let diamondTop = diamondLines.slice(0, diamondLines.length - 1);
  diamondLines = diamondLines.concat(diamondTop.reverse());

  diamondLines.forEach(str => console.log(str));
}

function repeatChar(times, char) {
  let str = '';

  for (let i = 0; i < times; i += 1) {
    str += char;
  }

  return str;
}

diamond(1);
// *

diamond(3);
//  *
// ***
//  *

diamond(5);
//   *
//  ***
// *****
//  ***
//   *

diamond(9);
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
```

# Diamond

```js
/*
Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied as an argument to the function. You may assume that the argument will always be an odd integer.

Input: 1 number
- argument will always be a number
- argument will always be odd

Output: series of messages logged to the console
- this series of messages will constuct a diamoand pattern
  - will be comprised of '*' and ' ' characters
  - the diamond messages will be n characters in length maximum
  - the diamond characters start with 1 '*' centered and end the same way
  - each massge will increase by 2 '*' characters 
  - output will consist of one message logged for each n value
  
Rules:
- function will take one number argument
- it will contruct a diamond staring with a single '*' character with ' ' characters padding it to the center
  - center will always be the nth character / 2 rounded up
- each message will increase the number of '*' characters by 2
  - each '*' will pad the center '*' character
- continue padding '*' characterws until the entire mesage is comprised of '*' characters
- then decrease the '*' character by 2, until there is a single star character


- the start and end messages will always contain 1 '*' characters and be padded to the center space
- each subsequent message will add 2 additional '*' characters padding each side of the center '*' character
- once a message contains all '*' characters, the sunbsequent messages will begin decreasing the start characters by 2 for each message


Questions:
- arg will always be a whole number
- arg will never be negative
- NaN will not be passed in
- if arg is Infinity, output 'this diamonds is too big'

Examples:

diamond(5);
// logs
//   *
//  ***
// *****
//  ***
//   *

first -> 2 spaces, 1 star
second -> 1 space, 3 stars
third -> 0 spaces, 5 stars

DS:
- utilize an array to contain either strings or subarrays of string characters 

Algo:
- if the arg is Infinity, log message and return 

- declare an messages var set to an empty array
- determine the place of the center char of the given argument (center)
  - divide arg by 2 and round up
- iterate a number of times equal to center
  - add center - 1 number of spaces
  - add 1 star
  
  - for each additional iteration
    - substract 1 from. the number of spaces
    - add 2 star characters
- slice the messages array from the beginning  but not including the last element
- reverse this sliced arr
- concat reversed arr to message array
- iterate through the message array and output each string

*/

function diamond(size) {
  if (!isFinite(size)) {
    console.log('this diamonds is too big');
    return;
  }
  
  let messages = [];
  let shortestStr = Math.round(size / 2);
  let spaces = shortestStr - 1;
  let stars = 1;
  
  for (let i = 0; i < shortestStr; i += 1) {
    let spaceStr = Array(spaces).fill(' ').join('');
    let starStr = Array(stars).fill('*').join('');
    messages.push(spaceStr + starStr);
    spaces -= 1;
    stars += 2;
  }
  
  let top = messages.slice(0, messages.length - 1);
  let diamondArr = messages.concat(top.reverse());
  
  diamondArr.forEach(line => console.log(line));
}

// diamond(Infinity); // log 'this diamonds is too big'
diamond(1);
// logs
// *

  
diamond(3);
// logs
//  *
// ***
//  *
   
diamond(9);
// logs
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

# Friday the Thirteenths

```js
/*
Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year. You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.

Input: 1 numnber, representing a year
- years given will be > 1752

Output: 1 numbner, representing the number of friday the 13ths in that year
- 

Rules:
- write a funtion that takes a number (year) as an argument
- function determines how many fridays fell on the 13th day of the month within the year
- assume that the same calendar will be used for dates in the future

Implicit:
- will need to use the Date class

Questions:
  - how do we handle non-number arguments?
    return undefined
  - how do we handle missing arguments?
    return undefined
  - is there a maximum year we can expect to handle?
    no
*/

function fridayThe13ths(year) {
  let thirteenths = [];

  for (let i = 0; i < 13; i += 1) {
    thirteenths.push(new Date(year, i, 13))
  }

  return thirteenths.reduce((count, date) => {
    return date.getDay() === 5 ? count + 1 : count
  }, 0);
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
```

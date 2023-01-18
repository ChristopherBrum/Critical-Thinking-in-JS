# Lettercase Percentage Ratio

```js
/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

-----------------------------------------------
Input: 1 string
- the given string will always contain one or more characters
- 

Output: 1 object
- the object should contain the following properties:
  - lowercase: the percentage of chars in the given string that are lowercase
  - uppercase: the percentage of chars in the given string that are uppercase
  - neither: the percentage of chars that are not letter characters

-----------------------------------------------
Rules:
- function should take 1 string as an argument
- determine the percentage of lowercase and uppercase letter characters, and the characters that are not letters
- return an object that contains the percentages of each

Implicit:
- the property values of the returned object are all floating point values in string form
- the percentages all contain two digits to the right of the decimal point
- if there are no instances of any of the categories, that category should return '0.00' still

-----------------------------------------------
Questions:
- are there any characters not allowed in the given string?
  no, all characters are allowed in given string
- how should I handle invalid input?
  return undefined and log a message to the console
- how should I handle no value being passed in?
  return undefined and log a message to the console
- how should I handle rounding in the case of a long decimal point?
  round to the closest 100th
- is an empty string considered invalid input?
  yes, return undefined and log a message to the console

-----------------------------------------------
DS:
- given string will be split into an array of chars for easy iteration
- object will be used to collect each property type in a value array, and transform the value as needed (an object with arrays as values, initially)

-----------------------------------------------
Goal: write a function that takes a string as an argument and returns an object with the percentage of lowercase, uppercase, and non-letter characters found in the given string.

-----------------------------------------------
Algo:
- if invalidInput
  - return undefined
- declare a categories variable set to an empty object
- collect all uppercase letters and assign to uppercase property
- collect all lowercase letters and assign to lowercase property
- collect all other characters and assign to neither property

- iterate through the keys of categories
  - calcPercentage of values
  - convert to a string with 2 digits after the decimal
  
- return the object

- invalidInput(arg)
  - if arg is not a string OR is a string with a length of 0
    - log 'Invalid Input'
    - return false
  - otherwise return true

- collectChars(regex, chars)
  - find all matches of the given array with the regex provided
  - if this returns null, return []
  - otherwise return the match array

- calcPercentage(array, chars)
  - divide the array length by chars length, then multiply by 100

- convertToString(num)
  - parse the number to a float
  - call toFixed(2)
*/

function letterPercentages(string) {
  if (invalidInput(string)) return undefined;
  let categories = {};

  categories.lowercase = collectChars(/[a-z]/g, string);
  categories.uppercase = collectChars(/[A-Z]/g, string);
  categories.neither = collectChars(/[^a-z]/ig, string);

  for (let category in categories) {
    let percentage = calcPercentage(categories[category], string);
    categories[category] = convertToString(percentage);
  }

  return categories;
}

function invalidInput(arg) {
  if (typeof arg !== 'string' || arg.length === 0) {
    console.log('Invalid input.');
    return true;
  }
  return false;
}

function collectChars(regex, string) {
  let matches = string.match(regex);
  if (matches) return matches;
  
  return [];
}

function calcPercentage(array, string) {
  return (array.length / string.length) * 100;
}

function convertToString(num) {
  return Number.parseFloat(num).toFixed(2);
}

console.log(letterPercentages()); // undefined log: 'Invalid input'
console.log(letterPercentages([])); // undefined log: 'Invalid input'
console.log(letterPercentages(1234)); // undefined log: 'Invalid input'
console.log(letterPercentages({})); // undefined log: 'Invalid input'
console.log(letterPercentages('')); // undefined log: 'Invalid input'

console.log(letterPercentages('aB?'));
//  { lowercase: "33.33", uppercase: "33.33", neither: "33.33" }
console.log(letterPercentages('aaaaaaB??'));
//  { lowercase: "66.67", uppercase: "11.11", neither: "22.22" }
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }
console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
```

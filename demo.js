/*
The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

Counting from the rightmost digit and moving left, double the value of every second digit
For any digit that thus become 10 or more, subtract 9 from the result
1111 becomes 2121
8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
Add all these digits together
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.

========================================

Input: 1 string (representing a number needing validation i.e., SSN or CC number)
- a series of numbers
- can contain non-number characters
- we can ignore all non-numeric characters

Output: Boolean value (represents whether the given number is valid according to the Luhn formula)

Luhn Formula:
- counting from right to left
  - double the value of every SECOND digit
  - for each digit that becomes > 10, subtract 9
  - add all digits together (checksum)
- if the checksum is evenly divisible by 10, it is valid according to the Luhn formula

Rules:
- write a function that takes one argument (1 string)
- our function should take the givens string and, ignoring non-number characters,determine whether the string number passes the Luhn forumla
- if it does, return true
- otherwise, return false
- see above for Luh formula

Example:
given --> 8763 
8763 becomes 7733 
starting from right to left:
- 3 is skipped
- 6 * 2 = 12 
  because 12 > 10 we subtract 9 --> 12 - 9 = 3 
- skip 7
- 8 * 2 = 16 
  because 16 > 10 we subtract 9 --> 16 - 9 = 7

we add each digits value together: 7 + 7 + 3 + 3 is 20
The given numbers new value is: 20

20 is evenly divisible by 10, therefore, it passes the Luhn formula
the function will return true

Questions:
- Do we need to consider non-string arguments being passed in?
  return false if given arg is not a string
- If so, how do we respond?
  return false if given arg is not a string
- Do we need to consider negative values?
  should not come up
- How do we handle no argument being passed in?
  return false
- How do we handle an empty string/string with no digits being passed in? 
  return false

Goal:

*/

function checksum(numberString) {

}

console.log(checksum(0)); // false
console.log(checksum("1111")); // false
console.log(checksum("8763")); // true
console.log(checksum("2323 2005 7766 3554")); // true
console.log(checksum("")); // false
console.log(checksum("ABCDEF")); // false
console.log(checksum("0")); // false

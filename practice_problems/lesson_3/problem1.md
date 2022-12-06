# Problem 1

```js
// Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:

// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.

/*
Input: 1 string
- can contain any number or special character
- parenthesis (spaces, dots, parenthesis, etc.) should be ignored
- can be non-string type

Output: 1 string
- clean non-numeric characters from the given string 
- should be a ten digit string of numbers
- in the case of an invalid type passed in the function will also log a message to the console

Rules:
- write a function that takes one string as an argument
- the function should determine whether the given string contains the appropriate amount of numbers to be considered a valid phone number
- all non-numeric characters will be ignored
- any non-string input will log a message to the console.
- any argument that is not a valid phone number will return '0000000000'
- a valid phone number will have:
  - 10 digits
  - if the phone number has 11 digits
    - and the first digit is 1, remove the first digit and return the remaining 10 digits as a valid phone number
  - otherwise, the phone number is invalid

Questions:
- What data type should we be expecting to be passed in to this function?
  a string 
  any other type passed in and '0000000000' will be returned and we should log 'invalid phone entry'
- What type should we return the formatted phone number?
  string
- If we have a valid phone number how should we format it? 
  numbers only as a string
- What character types are valid in the given phone number? 
  any
- does a phone number require any specific characteristics? i.e. can it start with 0?
  a phone number can consist of ten digits in any order

Algo:
function --> formatPhoneNumber(string (other types considered invalid)) --> string
  - if argument is not a string type, return '00000000000' and log message
  - collect all of the digit characters from the given string into an array (digits)
  - if digits is ten characters long
    - join digits and return
  - if digits is eleven characters long AND the first digit is 1
    - remove the first digit, join, and return
  - return '0000000000'

*/

function formatPhoneNumber(phoneNumber) {
  const INVALID_ENTRY = '0'.repeat(10);

  if (typeof phoneNumber !== 'string') {
    console.log('invalid phone entry');
    return INVALID_ENTRY;
  }

  let digits = phoneNumber.replace(/\D/g, '');

  if (digits.length === 10) {
    return digits;
  } else if (digits.length === 11 && digits[0] === '1') {
    return digits.slice(1);
  }

  return INVALID_ENTRY;
}

console.log(formatPhoneNumber(1234567890) === '0000000000'); // log 'invalid phone entry'
console.log(formatPhoneNumber('') === '0000000000');
console.log(formatPhoneNumber('1 2 3 4 5 6 7 8 9 0') === '1234567890');
console.log(formatPhoneNumber('(555)123-4567') === '5551234567');
console.log(formatPhoneNumber('987 654 3210') === '9876543210');
console.log(formatPhoneNumber('987.654.3210') === '9876543210');
console.log(formatPhoneNumber('1A2B3C4D5E6F7G8H9I0J') === '1234567890');
console.log(formatPhoneNumber('1A2B3C4D5E6F7G8H9I0J0K') === '2345678900');
console.log(formatPhoneNumber('12345') === '0000000000');
console.log(formatPhoneNumber('1234567890') === '1234567890');
console.log(formatPhoneNumber('12345678900') === '2345678900');
console.log(formatPhoneNumber('98765432100') === '0000000000');
console.log(formatPhoneNumber('123456789000000') === '0000000000');

```
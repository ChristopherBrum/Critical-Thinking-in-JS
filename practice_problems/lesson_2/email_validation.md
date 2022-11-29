# Email Validation

```js
// Implement a function that checks whether an email address is valid. An email address has two parts: A "local part" and a "domain part." An @ sign separates the two parts: local-part@domain-part. The local part is the name of the mailbox; this is usually a username. The domain part is the domain name (e.g., gmail.com, yahoo.com.ph, or myCompanyName.com). The domain name contains a server name (sometimes called the mail server name) and a top-level domain (.com, .ph, etc.).

// For this practice problem, use the following criteria to determine whether an email address is valid:

// There must be one @ sign.
// The local part must contain one or more letters (A-Z, a-z) and/or digits (0-9). It may not contain any other characters.
// The domain part must contain two or more components with a single dot (.) between each component. Each component must contain one or more letters (A-Z, a-z) only.
// To keep things simple, you don't need to check whether the domain part or top-level domain is "real" or "official".

// Note: don't use this criteria for real email validation logic in your programs. We are using greatly simplified criteria to let you concentrate on the fundamentals of JavaScript, and not on the specifics of email addresses.

/*
Problem:
Explicit Rules:
- create a function that takes one string as an argument
- the function should check to see if the string is a valid email
- a valid email consists of:
  - a local part (the name of the mailbox, generally the username)
  - a '@'
  - a domain part/name
    - the server name (gmail, yahoo, etc.)
    - a top-level domain (.com, .ph, etc.)

- In our function we will determine whether an email is valid using this criteria:
  - There must be one '@'
  - the local part must contain one or more letters and/or digits, no other character types
  - the domain part must contain two, or more, components separated by a '.' between each component.
  - each component must contain one or more letter characters, only!
  - domain part does not need to be real

Implicit Rules:
- arguments will not be empty

DS:
Input: 1 string
Output: 1 boolean
Intermediate:
- splitting strings into arrays
- using numbers to track indexes
- using RegEx to process strings
- using booleans for comparisons

Goal: write a function that takes a string as an argument and determines whether its a valid email. It will return true if it is a valid email, otherwise false.

Abstractions:
- using interrogation to determine whether the components of the given string meet the validation requirements

Algo:
--> function --> isValidEmail(string) --> boolean
  - return false if given string does not
    - contain 1 '@' character
    - contain 1 or more characters before and/or after the '@' character
  - split the given string at the '@' character
  - return false if array does not have a length of 2
  - pass element at index 0 to validLocalPart
  - pass element at index 1 to validDomainPart
  - if either function returns false, return false
  - otherwise, return true

--> helper function --> validLocalPart(string) --> boolean
  - return false if
    - if given string does not contain one or more letters and/or digits
    - or, if it contains other character types
  - otherwise, return true

--> helper function --> validDomainPart(string) --> boolean
  - return false if the given string does not contain at least 1 '.' character
  - split the string using '.' as the delimiter
  - iterate through the array
    - return false if
      - the arrays length is less than 2
      - any element is empty or contains any non-letter characters
  - otherwise return true

*/

function isValidEmail(email) {
  if (!email.includes('@')) return false;
  let emailParts = email.split('@');
  if (emailParts.length < 2) return false;

  if (!validLocalPart(emailParts[0]) || !validDomainPart(emailParts[1])) {
    return false;
  }

  return true;
}

function validLocalPart(string) {
  if (/[^a-z0-9]/ig.test(string)) return false;
  return true;
}

function validDomainPart(string) {
  if (!string.includes('.')) return false;
  
  let splitStr = string.split('.');
  let words = (splitStr).filter(el => el)
  
  if (words.length !== splitStr.length) return false;
  if (splitStr.some(word => /[^a-z]/i.test(word))) return false;  
  return true;
}

// Alternate solution

function isValidEmail(email) {
  return /^[a-z0-9]+@([a-z]+\.)+[a-z]+$/i.test(email);
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false
```

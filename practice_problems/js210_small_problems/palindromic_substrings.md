# Palindromic Substrings

```js
// Write a function that returns a list of all substrings of a string that are palindromic. That is, each substring must consist of the same sequence of characters forwards as backwards. The substrings in the returned list should be sorted by their order of appearance in the input string. Duplicate substrings should be included multiple times.

// You may (and should) use the substrings function you wrote in the previous exercise.

// For the purpose of this exercise, you should consider all characters and pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, assume that single characters are not palindromes.

/*
Problem
Explicit Rules:
- write a function that finds all of the substrings of a given string that are are palindromes
  - palindromes are words that read the same backwards as forwards
- maintain the order of the substrings
- duplicate substrings should be included if applicable
- use the substrings function previously created
- all characters considered when determining if a substring is a palindrome
- case sensitive when determining if a substring is a palindrome

Implicit Rules:
- all character types are valid
- return an empty array if no substrings are palindromes
substrings must be greater than 1 in length

DS
Input: 1 string
Output: 1 array, containing all substrings that are palindromes
Intermediate:
- converting strings to arrays
- numbers for indexes
- booleans values for comparison

Goal: create a function that takes a string as an argument and returns an array containing all substrings of the given string that are palindromes

Abstractions:
- filtering through our array of substrings to identify palindromic strings

Algo:
--> function --> palindromes(string) --> array
  - pass the given string to the substrings function, assign returned value to `subs`
  - filter the array of substrings 
    - pass each substring to isPalindrome function
  - return the filtered array 

--> function(helper) --> isPalindrome(string) --> boolean
  - convert given string into an array, reverse, and join
  - convert both arrays into strings and compare for equality (value)
*/

function leadingSubstrings(string) {
  let arr = string.split('');
  return arr.map((_, index) => arr.slice(0, index + 1).join('') );
}

function substrings(s) {
  return s.split('')
          .map((_, index) => leadingSubstrings(s.substring(index)))
          .flat();
}

function isPalindrome(string) {
  let reversedStr = string.split('').reverse().join('');
  return string === reversedStr && string.length > 1;
}

function palindromes(s) {
  let subs = substrings(s);
  return subs.filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]
console.log(palindromes('hello-madam-did-madam-goodbye'));
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]
console.log(palindromes('knitting cassettes'));
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
```

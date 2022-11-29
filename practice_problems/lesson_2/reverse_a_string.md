# Reverse a String

```js
// Implement a function that takes a string as an argument and returns a new string that contains the original string in reverse.

/*
Problem
Explicit Rules:
- write a function that takes on string as an argument
- return a new string that is the characters of the given string in reverse

Implicit Rules:
- seems as though all character types will be allowed
- must maintain character case
- given string will not be empty

DS
Input: string
Output: String (new)
- split string into an array
- use numbers for indexes

Goal: create a function that takes a string and returns a new string that is the reverse of the givens string

Abstractions: 
- use transformation to return a new string the given string

Algo:
- split the string
- reverse the array
- join the array
- return new string
*/

function reverse(string) {
  return string.split('').reverse().join('');
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"
```

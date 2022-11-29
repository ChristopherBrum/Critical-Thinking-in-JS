# Matching Parenthesis

```js
// Write a function that takes a string as an argument and returns true if the string contains properly balanced parentheses, false otherwise. Parentheses are properly balanced only when '(' and ')' occur in matching pairs, with each pair starting with '('.

/*
Problem:
Explicit Rules:
- write a function that takes one string argument
- the function will return true if the given string contains properly balanced parenthesis, false otherwise
- balanced parenthesis means '(' and ')' occur inn matching pairs

Implicit Rules:
- parenthesis can be nested within one another
- must have an equal amount of  opening and closing parenthesis
- string can have no parenthesis
- the opening parenthesis must be before the closing parenthesis

DS:
Input: String
Output: boolean
Intermediate:
- string split into an array
- numbers for indexes
- booleans for comparison

Goal: write a function that takes a string as an argument and determines whether the strings contains evenly balanced parenthesis within.

Abstractions:
- string processing to identify opening and closing parenthesis characters
 
Algo:
--> function --> isBalanced(string) --> boolean
  - split given string into an array (chars)
  - declare an empty container array
  - iterate through chars
    - if current character is '('
      - push to container array
    - if current character is ')' and container array is empty
      - return false
    - if current character is ')' and container array is not empty
      - remove last element of container array
  - return true if container is empty, false otherwise
*/

function isBalanced(string) {
  let container = [];
  let chars = string.split('');

  for (let i = 0; i < chars.length; i += 1) {
    if (chars[i] === '(') {
      container.push(chars[i]);
    } else if (chars[i] === ')' && container.length > 0) {
      container.pop();
    } else if (chars[i] === ')' && container.length === 0) {
      return false;
    }
  }

  return container.length === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
```

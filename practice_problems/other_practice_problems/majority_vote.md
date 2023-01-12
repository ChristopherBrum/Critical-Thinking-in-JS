# Majority Vote

```js
/*
Create a function that returns the majority vote in an array. A majority vote is an element that occurs > N/2 times in an array (where N is the length of the array).

majorityVote(["A", "A", "B"]) ➞ "A"
majorityVote(["A", "A", "A", "B", "C", "A"]) ➞ "A"
majorityVote(["A", "B", "B", "A", "C", "C"]) ➞ null

Notes
The frequency of the majority element must be strictly greater than 1/2.
If there is no majority element, return null.
If the array is empty, return null.

--------------------------------------------
Input: 1 array
- should contain strings (letter characters)

Output: 1 string (or null)

Rules:
- given an array of letter characters
  - determine if one element is found for more than half of the given elements
  - n is the number of elements in the array
  - if an element occurs > n/2 times, return that element
- if there is no element that meets this critetia, return null
- if the array is empty, return null

- the elements will be strings
- the elements will be letter characters only
- the letter characters are case insensitive
- if a majority character is found, it should always be return uppercased

Questions:
- Can we always expect 1 argument? Yes
- Will the argument always be an array? Yes
- Will the array always have elements? No, return null if the array is empty
- Will the elements always be letter characters? yes
- Will the letter characters always be uppercase? no
- Do upper and lowercase letters count as the same character? yes
  - If so, which case should be returned? uppercase
- Is there a minimum number of elements that will be in the given array? no

DS:
- utilizing arrays primarily
- use an object to tally characters and their occurences

Algo:
- return null if the arrays length is 0
- declare a tally var to an empty object
- iterate over the given array 
  - add or increment the character (upcased) by to 'tally'
- determine what half of the given arrray elements is (midpoint)
- iterate over the values of tally
  - if any value is greater than the midpoint
    - return the key at the same index
- return null
*/

function tallyChars(array) {
  let tally = {};

  array.forEach((el, idx) => {
    el = el.toUpperCase();
    tally[el] = tally[el] || 0;
    tally[el] += 1;
  });

  return tally;
}

function majorityVote(array) {
  if (array.length === 0) return null;

  let tally = tallyChars(array);
  let midpoint = array.length / 2;
  
  let chars = Object.keys(tally);
  let charOccurences = Object.values(tally);

  for (let i = 0; i < charOccurences.length; i += 1) {
    if (charOccurences[i] > midpoint) return chars[i];
  }
  
  return null;
}

console.log(majorityVote([])); // ➞ null
console.log(majorityVote(["a"])); // ➞ "A"
console.log(majorityVote(["A"])); // ➞ "A"
console.log(majorityVote(["a", "a", "b", "B"])); // ➞ null
console.log(majorityVote(["a", "a", "a", "b", "B"])); // ➞ "A"
console.log(majorityVote(["A", "A", "B"])); // ➞ "A"
console.log(majorityVote(["A", "A", "A", "B", "C", "A"])); // ➞ "A"
console.log(majorityVote(["A", "B", "B", "A", "C", "C"])); // ➞ null
```

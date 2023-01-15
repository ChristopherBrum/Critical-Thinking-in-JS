# Can Form

```js
/*
Write a function that returns true if all the strings in an array can be formed by using only the characters from the longest string.

Examples
canForm(["mast", "manifest", "met", "fan"]) ➞ true
canForm(["may", "master", "same", "reams"]) ➞ false
canForm(["may", "same", "reams", "mastery"]) ➞ true

There will only be one unique longest string.

------------------------------
Input: 1 array
- will contain string elements
- strings will consist of lowercase letter characters
- one string will always be longer than the rest
- the array strings can be empty

Output: 1 boolean

Rules:
- given an array of strings
- identify the longest string in the array and...
- determine if the remaining strings can all be formed using the characters of the longest string
- there will always be one distinct longest string
- the array will always contain 1 or more string elements
- an array arg with one empty string should return true

Questions:
- Does 'one unique longest string' mean one string will be longer than the others?
- Can we always expect 1 argument to be passed in? yes
- Will that argument always be an array? yes
- Is there a minimum number of elements that will be passed into the array?
  there will always be at least one string in the array
- Can the given array be empty? no
- can the array be a sparse array? no
- will the elements in the array always be strings? yes
- will the characters in the array strings always be lowercase letters? yes 
- will there always be one string longer than the rest? yes
- will any of the strings ever contain non lowercase letter characters? no
- Can the strings be empty? yes, treat them as a valid string element
- is a 1 element array with an empty string valid input? yes, should return true
- can letters be repeated?

DS:
- IN: 1 array
- OUT: 1 boolean
- Intermediate:
  - splitting strings into array for easy iteration and element comparison
  - map over the array and return the length of each string as the transformed element
  - perform intergation over the remaining string to determine if their can be created using the longest strings characters

Algo:
- return true if the array is 1 in length
- sort the array by string length, and grab the first string (longest)
- iterate over the string array to determine if EVERY string can be comprised of the characters in the longest string
  - iterate over the array of string using every
    - duplicate the longest word
    - iterate over the current word by each character
    - if the current character is found within the longest array, remove from longest
    - return true if all characters are found
*/

function canForm(array) {
  if (array.length === 1) return true;
  
  let longest = array.slice(0).sort((a, b) => b.length - a.length)[0];

  return array.every(word => {
    let tempLongest = longest.split('');
    return word.split('').every(char => {
      if (tempLongest.includes(char)) {
        let idx = tempLongest.indexOf(char);
        tempLongest.splice(idx, 1);
        return true;
      }
      
      return false;
    });
  });
}

console.log(canForm([''])); // true 
console.log(canForm(['word'])); // true
console.log(canForm(['word', 'wordy', 'wood'])); // false
console.log(canForm(["mast", "manifest", "met", "fan"])); // true
console.log(canForm(["may", "master", "same", "reams"])); // false
console.log(canForm(["may", "same", "reams", "mastery"])); // true
```

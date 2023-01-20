# Same Vowels

```js
/* 
Write a function that selects all words that have all the same vowels (in any order and/or number) as the first word, including the first word.

Examples
sameVowelGroup(["toe", "ocelot", "maniac"]) ➞ ["toe", "ocelot"]

sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]) ➞ ["many"]

sameVowelGroup(["hoops", "chuff", "bot", "bottom"]) ➞ ["hoops", "bot", "bottom"]

Notes
Words will contain only lowercase letters, and may contain whitespaces.
Frequency does not matter (e.g. if the first word is "loopy", then you can include words with any number of o's, so long as they only contain o's, and not any other vowels).

Input: 1 array of strings
- will contain lowercaser letter characters and whitespace only
- 

Output: 1 array of strings
- the strings in the given array that contain the same vowels that the first strings does

Rules:
- given an array of strings, return a new array containing only the strings that contain the same vowels as the first element
- the first element will always be included in the returned array
- the number of occurences of the vowels does not matter
- the order that the vowels are found does not matter
- the string elements won't always have to have vowels
- the array can contain 1 

Questions:
- will there be one arg? yes
- will it always be an array? yes
- will it ever be empty? no
- will it ever contain non-string elements? no
- will the strings always contain vowels? no
- can the strings be empty? yes
- is there a minimum number of elements that the array can contain? yes, 1 minimum
- is there a maximum numbner of strings the array can contain? no

DS:
working with arrays for iteration and processing of strings

Algo:
findUniqVowels(string) --> array
- declare a vowels var to an empty array
- match all letters that are vowels
- create a set of these vowels
- reassign vowels to the set converted to an array
- sort and return vowels

sameVowelGroup(array of strings) --> array of strings
- declare firstVowels to the return value of findUniqValues with the first element passed in
- filter over the given array of strings
  - find the unique values of the current string
  - stringify the firstVowels array and the current strings vowels
  - return the compairson value
- return the transformed 

*/

function uniqueVowels(string) {
  let vowels = string.match(/[aeiou]/g) || [];
  let set = new Set(vowels);
  vowels = Array.from(set);
  return vowels.sort();
}

function sameVowels(control, current) {
  return JSON.stringify(control) === JSON.stringify(current);
}

function sameVowelGroup(array) {
  let controlVowels = uniqueVowels(array[0]);

  return array.filter(string => {
    let currentVowels = uniqueVowels(string);
    return sameVowels(controlVowels, currentVowels);
  });
}

console.log(sameVowelGroup(["many"])); // ["many"]
console.log(sameVowelGroup(["", "ocelot", "maniac"])); // [""]
console.log(sameVowelGroup(["mmmm", "ocelot", "maniac"])); // ["mmmm"]
console.log(sameVowelGroup(["toe", "hoops", "maniac"])); // ["toe"]
console.log(sameVowelGroup(["toe", "ocelot", "maniac"])); // ["toe", "ocelot"]
console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"])); // ["many"]
console.log(sameVowelGroup(["hoops", "chuff", "bot", "bottom"])); // ["hoops", "bot", "bottom"]
console.log(sameVowelGroup(["eeaaoouuii", "chuff", "bot", "bottom"])); // ["eeaaoouuii"]

// DOne in 25 minutes
```

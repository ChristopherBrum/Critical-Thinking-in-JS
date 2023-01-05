# Make Anagram

```js
/*
Given two strings, that may or may not be of the same length, determine the minimum number of character deletions required to make an anagram. Any characters can be deleted from either of the strings.

makeAnagram("cde", "abc") ➞ 4
// Remove d and e from cde to get c.
// Remove a and b from abc to get c.
// It takes 4 deletions to make both strings anagrams.

Input: 2 strings
- can be different lengths

Output: 1 number
- represents the minimum number of character deletions to create anagrams of the two strings

Rules:
- function takes two string args
- determine the number of deletions of both strings to create anagrams
- case insensitive when determining if we have anagrams
- strings can contain other characters

Questions:
- Ask for clarification on what an anagram is
  two words that contain the same characters
- will we always get 2 args?
  always two
- will the args always be strings?
  always be strings
- will strings contain other characters?
  yes, can contain letters and digits
- how to handle empty string arguments
  if string is empty process as normal
- upper and lowercase letters considered same when determining an anagram

DS:
- splitting strings into arrays
- filter the arrays for like characters

Algo:
- set a 'deletions' variable to 0
- create copies of the two downcased string arrays

- split the given strings into arrays
- iterate over the first array 
  - if current character is found within the other array 
    - delete that character from both arrays
  - otherwise
    - delete the current character 
    - incrermemnt deletions by 1

- repeat with the seocnd mutated string 
- return deletions
*/

function makeAnagram(str1, str2) {
  let deletions = 0;
  let arr1 = str1.toLowerCase().split('');
  let arr2 = str2.toLowerCase().split('');

  str1.toLowerCase().split('').forEach(char => {
    if (arr2.includes(char)) {
      arr1.splice(arr1.indexOf(char), 1);
      arr2.splice(arr2.indexOf(char), 1);
    } else {
      arr1.splice(arr1.indexOf(char), 1);
      deletions += 1;
    }
  });

  let arr2Copy = arr2.slice();
  arr2Copy.forEach(char => {
    if (arr1.includes(char)) {
      arr2.splice(arr2.indexOf(char), 1);
      arr1.splice(arr1.indexOf(char), 1);
    } else {
      arr2.splice(arr2.indexOf(char), 1);
      deletions += 1;
    }
  });

  return deletions;
}

makeAnagram("", "")       //➞ 0
makeAnagram("cde", "")    //➞ 3
makeAnagram("cde", "abC") //➞ 4
makeAnagram("cde", "abc1") //➞ 5
makeAnagram("cde", "abc") //➞ 4
makeAnagram("cde", "abc") //➞ 4
makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke") //➞ 30
makeAnagram("showman", "woman") //➞ 2
```

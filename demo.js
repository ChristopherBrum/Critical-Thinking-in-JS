/*
Connecting Words

Write a function that connects each previous word to the next word by the shared letters. Return the resulting string (removing duplicate characters in the overlap) and the minimum number of shared letters across all pairs of strings.

Input: 1 array of strings
- will always have 1 array passed in

Output: 1 array, with 2 elements
- the resulting strings
- the minimum number of shared letters between strings

Rules:
- take an array and concateate each word together removing any 'overlapping' character between the two Words
- keep track of the minimum length of the overlapping characters
- if words have no overlapping characters return 0 for the second element

overlap:
- this is the shared characters at the end of the preceding string and the begining of second string

- given arr will always contian elements
- arr elements will always be strings
- strings will only contain letter characters
- always lowercase letter characters
- strings will never be empty
- no limit on the number of array elements

DS:
- iterating with arrays

Algo:
- declare a var to an empty arr (overlaps)
- decalre an empty string to a var (resultStr)
- iterate over the given array 
  - decalre a match variable set to false
  - lastSub will be decalred
  - collect the substring of the second word starting at length of 1
  - if current current word endsWith the current substring 
    - set match to true
    - set lastSub to current substring
  - otherwise
    - if match is true 
      - push a lastSub to overlaps
      - break
  - concat current string to resultStr
  - mutate the second string, removing the overlapping characters
- find the minimum length within the 

  ["oven", "vier", "erase", "serious"]

  oven, envier
  iteration 1 --> oven and 'e' to see if oven endsWith 'e' --> false
  iteration 2 --> oven to see if it endsWith 'en' --> true
  iteration 3 --> oven to see if it endsWith 'env' --> false 

  'aa', 'aaa' -> 'aaaa'  // overlaps only the sequence of 1
  'aa', 'aaa' -> 'aaa'   // overlaps the maximum length sequence of 2

*/


console.log(join(["oven", "envier", "erase", "serious"])); // ➞ ["ovenvieraserious", 2]
console.log(join(["move", "over", "very"])); // ➞ ["movery", 3]
console.log(join(["aaa", "bbb", "ccc", "ddd"])); // ➞ ["aaabbbcccddd", 0]
console.log(join(["to", "ops", "psy", "syllable"])); // ➞ ["topsyllable", 1]
// "to" and "ops" share "o" (1)
// "ops" and "psy" share "ps" (2)
// "psy" and "syllable" share "sy" (2)
// the minimum overlap is 1

/* possible test cases I can think of:
- only one string in array?
- all characters of 2 strings overlap? ("aaa", "aaa")
- string 2 fully contained in string 1? ("bat", "at")
- whitespace
*/
# Remove Last Vowel

```js
/*
Edabit - Remove the Last Vowel (https://edabit.com/challenge/rEyBNGafoHLYmyKfj)

Write a function that removes the last vowel in each word in a sentence.

Examples
removeLastVowel("Those who dare to fail miserably can achieve greatly.")
➞ "Thos wh dar t fal miserbly cn achiev gretly."
 
removeLastVowel("Love is a serious mental disease.")
➞ "Lov s  serios mentl diseas"

removeLastVowel("Get busy living or get busy dying.")
➞ "Gt bsy livng r gt bsy dyng"

--------------------------------
Input: 1 string
- considered out sentence of words

Output: 1 string
- the given sentence with last vowel in each word removed

Rules:
- given a string that comprises a sentence
  - remove the last vowel in word of the sentence

- we will always have one arg passed in, a string
- string will never be empty
- can have a sentence that is comprised of one word
- can have a word that contains no vowels
- a word can be one letter lomg and a vowel
- a vowel can be upper or lowercase
- words will always be delimited by a single space
- retain any existing puncutation

- What is a word?
  - any grouping of characters separated by a space character

- Vowels: a, e, i, o, u

DS:
- ins and outs: strings
- splitting the sentence into an array of words

Algo:
- split given string into an array of words
- map over the array of words
  - iterate over the word by index starting from the back, going towards the front of the word
  - if the current character is a vowel
    - splice the current character from the word and return the spliced word
  - if the iteration completes without returning, return the current word
- join the transformwed array and return
*/

function removeLastVowel(sentence) {
  let words = sentence.split(' ');
  let transformedWords = words.map(word => {
    for (let i = word.length - 1; i >= 0; i -= 1) {
      if (/[aeiou]/i.test(word[i])) {
        let wordArr = word.split('')
        wordArr.splice(i, 1)
        return wordArr.join('');
      }
    }
    return word;
  });

  return transformedWords.join(' ');
}

console.log(removeLastVowel("A") === '');
console.log(removeLastVowel("A sentence") === ' sentenc');
console.log(removeLastVowel("Hi there zzz") === 'H ther zzz');
console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly.") === "Thos wh dar t fal miserbly cn achiev gretly.");
console.log(removeLastVowel("Love is a serious mental disease.") === "Lov s  serios mentl diseas.");
console.log(removeLastVowel("Get busy living or get busy dying.") === "Gt bsy livng r gt bsy dyng.");
console.log(removeLastVowel("If you want to live a happy life, tie it to a goal, not to people.") === "f yo wnt t liv  hppy lif, ti t t  gol, nt t peopl.");
```

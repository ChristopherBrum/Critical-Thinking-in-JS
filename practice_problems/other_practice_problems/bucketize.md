# Bucketize

```js
/*
Write a function that divides a phrase into word buckets, with each bucket containing n or fewer characters. Only include full words inside each bucket.

Input: 1 string, 1 number
- string will consists of words and spaces
- the nbumber represents the max length of a word 'bucket'

Output: 1 array
- contain substrings of the given string up to the number arg in length

Rules:
- a 'substring' consists of full words found in the given string separated by a single space
- a substring length may not be longer than the given number

Questions:
- there may be more or less args than 2
  - log 'invalid input' if less than 2 args
  - ignore any additional args
- if the first arg is not a string, log 'invalid input'
- if the second arg is not a number, log 'invalid input'
- if the first arg is an empty string return []
- if second arg is 0 return []
- if second arg negative, NaN, or not finite, log 'invalid input'

DS:
- in: string, numeber
- out: 1 array
- splitting given string into an array for easy iteration

Algo:
- log 'invalid input' if...
  - there aere less than 2 args
  - if the first arg is not a string
  - if the second arg is not a number

  - if second arg negative, NaN, or not finite

- return an empty array if...
  - if the first arg is an empty string
  - if second arg is 0

- declare an empty array to a var (container) "she sells sea shells by the sea", 10
- decalare 'tempStr' to an empty string
- split given string into words (delimited by spaces)
- iterate over the array of words
  - split tempStr, push current word to this array of words, join by ' '
  - if this words length > n
    - push tempStr to container
    - set tempstring to current word
  - otherwise
    - set tempStr + current word to tempStr
- push value of tempStr to container if not empty
- return container
*/

function invalidType(string, number) {
  if ((typeof string !== 'string') || (typeof number !== 'number')) {
    console.log('invalid input');
    return true;
  }
  return false;
}

function invalidNumber(number) {
  if ((!isFinite(number)) || (Number.isNaN(number)) || (number < 0)) {
    console.log('invalid input');
    return true;
  }
  return false;
}

function invalidValue(string, number) {
  return ((string.length === 0) || (number === 0));
}

function bucketize(string, maxSize) {
  if (invalidValue(string, maxSize)) return [];
  if (invalidType(string, maxSize)) return;
  if (invalidNumber(maxSize)) return;

  let container = [];
  let tempStr = '';
  let words = string.split(' ');

  words.forEach(word => {
    let tempArr = tempStr.length === 0 ? tempStr.split('') : tempStr.split(' ');
    tempArr.push(word);
    tempArr = tempArr.join(' ');

    if (word.length >= maxSize) {
    } else if (tempArr.length > maxSize) {
      container.push(tempStr);
      tempStr = word;
    } else {
      tempStr = tempArr;
    }
  });

  if (tempStr.length !== 0) container.push(tempStr);
  return container;
}
 
console.log(bucketize("she")); // invalid input
console.log(bucketize(123, 123)); // invalid input
console.log(bucketize('she', true)); // invalid input

console.log(bucketize('', 1)); // []
console.log(bucketize('hello', 0)); // []

console.log(bucketize('hello', NaN)); // invalid input
console.log(bucketize('hello', Infinity)); // invalid input
console.log(bucketize('hello', -Infinity)); // invalid input
console.log(bucketize('hello', -1)); // invalid input

console.log(bucketize("she sells sea shells by the sea", 10, [])); // ["she sells", "sea shells", "by the sea"]
console.log(bucketize("she sells sea shells by the sea", 10)); // ["she sells", "sea shells", "by the sea"]
console.log(bucketize("the mouse jumped over the cheese", 7)); // ["the", "mouse", "jumped", "over", "the", "cheese"]
console.log(bucketize("fairy dust coated the air", 20)); // ["fairy dust coated", "the air"]
console.log(bucketize("a b c d e", 2)); // ["a", "b", "c", "d", "e"]
console.log(bucketize("she sells sea shells by the sea", 2)); // []
```

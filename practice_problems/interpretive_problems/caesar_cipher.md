# Caesar Cipher

```js
/*
Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

---------------------------------------------------

Input: 1 string, 1 number
- the string represents the test to be encrypted
- the number represents the 'key', or the number of places each character will be shifted
- only alphabetical characters will be shifted
- non-letter characteres will remain unchanged

Output: 1 string
- the text after the letter characters have been shifted/encrypted
- retain the letter characters case

Rules:
- take two arguments, a string and a number, and shift all of the letter characters to the right a number of times equal to the number argument
- if a letter is being shifted beyond the length of the alphabet, loop it back around to the beginning of the alphabet
- 0 is an acceptable key value
- 

Questions:
- Will there always be two arguments passed in?
  no, return undefined
- Will the two arguments always be a string (first) and a number?
  no, if anything but a string and then a number, return undefined
- Can the key value passed in be negative?
  yes, return undefined if key is negative
- Can the key value passed in be NaN or Infinity?
  yes, return undefined if this is the case

DS:
- split the string text into an array of characters for iteration
- create an array of alphabetical characters

Algo:
- return undefined if...
  - if the first arg is not a string AND the secoind arg is not a number
  - if the second arg is NaN
  - if the second arg is Infinity/-Infinity
  - if second arg is < 0

- declare an 'alpha' array of letter characters
- if 'key' is 0, return 'text'

- split text into array of characters with index (chars) [A B Z]
- map over chars
  - declare 'upcase' to false 
  - if current character is NOT a letter character 
    return current char
  - otherwise
    - if current character is uppercase, set upcase to true
    - find index of char, add to key (charValue) 0 + 3(3), 1 + 3(4), 25 + 3(28) --> 28 - 26 = 2
    - if charValue > 25, subtract 26 until it is
    - find the alpha character at the new charValue
    - if upcase is true, upcase the letter and return
    - otherwise return new char
- join array and return

*/

function caesarEncrypt(text, key) {
  if (invalidArgs(text, key)) return undefined;
  if (invalidNumber(key)) return undefined;
  if (key === 0) return text;

  const ALPHA = createAlphabet();
  let chars = text.split('');

  let encryptedChars = chars.map(char => {
    let upcase = false;
    
    if (/[^a-z]/i.test(char)) {
      return char;
    } else {
      if (char === char.toUpperCase()) upcase = true;
      
      let charValue = ALPHA.indexOf(char.toLowerCase()) + key;
      charValue = calcCharValue(charValue);

      let newChar = ALPHA[charValue];

      return char === char.toUpperCase() ? newChar.toUpperCase() : newChar;
    }
  });

  return encryptedChars.join('');
}

function calcCharValue(num) {
  if (num < 26) return num;

  while (num >= 26) {
    num -= 26;
  }

  return num;
}

function invalidArgs(text, key) {
  return typeof text !== 'string' || typeof key !== 'number';
}

function invalidNumber(key) {
  return (key < 0) || (!isFinite(key)) || (Number.isNaN(key));
}

function createAlphabet() {
  let alphabetValue = 97;
  return [...Array(26)].map(el => {
           let currentChar = String.fromCharCode(alphabetValue);
           alphabetValue += 1;
           return currentChar;
         });
}

console.log(caesarEncrypt('ABZ', 3));       // "DEC"
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25) === "ZABCDEFGHIJKLMNOPQRSTUVWXY");
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5) === "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!");
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2) === "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?");

console.log(caesarEncrypt());           // undefined
console.log(caesarEncrypt('hi'));       // undefined
console.log(caesarEncrypt(3));          // undefined
console.log(caesarEncrypt([]));         // undefined
console.log(caesarEncrypt({}));         // undefined
console.log(caesarEncrypt(true));       // undefined
console.log(caesarEncrypt('hi', -1));   // undefined
console.log(caesarEncrypt('hi', NaN));   // undefined
console.log(caesarEncrypt('hi', Infinity));   // undefined\
```

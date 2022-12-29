# Vigenere Cipher

```js
/*
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:

Copy Code
plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!
Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').

For a quick lookup of a ciphertext per character, you may consult this tabula recta. Each row of the table corresponds to a Caesar Cipher encryption using the columns' character letter as a shift value.

--------------------------

Input: 2 srtrings (text and a key)
- the 'text' is the string to be encrypted
- the 'key' is the string that we will pull character values from to know how many characters to shift

Output: 1 string
- the encrypted text

Rules:
- write a function that encrypts the text given
- each character will be shifted a number of times according to the keywords character values
- the first letter character in 'text' will be shifted a umber of times equal to the first 'key's character value
- the second will be shifted according to the second key's character value
- and so on...
- the key letters are case insensitive
- non-letter characters are ignored

Algo:
- create an array of all alphabetical characters
- split the key into an array of characters, map over the characters to get their values (shiftVals)
- split the given text into an array of characters
- map over the arrays of characters
  - if current character is not a letter character
    - return current character
  - otherwise
    - set upcase variable to false
    - if current character is uppercase, reassign upcase to true
    - add the current value of shiftVals to the current characters alpha value
    - if current shiftVal is > 25, subtract 26 until it is
    - if upcase is true
      - upcase and return new value
    - otherwise
      - return new value

*/

function vigenereCipher(text, key) {
  const ALPHA = createAlphabet();
  let chars = text.split('');
  let shiftValues = key.split('').map(el => ALPHA.indexOf(el));
  let shiftIdx = 0;

  let encryptedChars = chars.map(char => {
    let upcase = false;

    if (/[^a-z]/i.test(char)) {
      return char;
    } else {
      if (char === char.toUpperCase()) upcase = true;
      
      let shift = shiftValues[shiftIdx] + ALPHA.indexOf(char.toLowerCase());
      
      while (shift > 25) {
        shift -= 26;
      }

      let newChar = upcase ? ALPHA[shift].toUpperCase() : ALPHA[shift];

      ((shiftIdx + 1) >= shiftValues.length) ? shiftIdx = 0 : shiftIdx += 1;

      return newChar;
    }
  });

  console.log(encryptedChars.join(''));
}

function createAlphabet() {
  let alphabetValue = 97;
  return [...Array(26)].map(el => {
           let currentChar = String.fromCharCode(alphabetValue);
           alphabetValue += 1;
           return currentChar;
         });
}

vigenereCipher('Pineapples don\'t go on pizzas!', 'meat') // Bmnxmtpeqw dhz'x gh ar pbldal!
```

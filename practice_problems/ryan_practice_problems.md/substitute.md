# Substitute

```js
/*
Algo:
- declare a variable set to all alphabetical characters (alpha)
- split given string into an array of characters (chars)
- declare a count var to 0
- iterate through the alphabetical array
- while chars includes the current alpha character 
  - AND count === 0
    - increment count by 1
  - AND count === 1
    - replace the first instance of character char with its next iteration (alpha[index  + 1])
    - replace the second instance of the char in chars with ''
    - reset count to 0 if at end of iteration
- join and return chars array
*/

function substitute(str) {
  if (typeof str !== 'string') return '';
  let alpha = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));
  let chars = str.split('');
  let count = 0;
  let substituted;

  do {
    substituted = false;
    alpha.forEach(letter => {
      for (let i = 0; i < chars.length; i++) {
        if (chars[i] === letter && count === 0) {
          count += 1;
        } else if (chars[i] === letter && count === 1) {
          let firstIdx = chars.indexOf(letter);
          chars.splice(firstIdx, 1, nextLetter(alpha, letter));
          let nextIdx = chars.indexOf(letter);
          chars.splice(nextIdx, 1, '');
          substituted = true;
          count = 0;
        }
      };
      count = 0;
    });
  } while (substituted === true);

  return chars.sort().join('');
}

function nextLetter(alpha, letter) {
  if (letter === 'z') {
    return 'a'
  } else {
    let idx = alpha.indexOf(letter);
    return alpha[idx + 1];
  }
}

console.log(substitute() === '');
console.log(substitute('') === '');
console.log(substitute('abaa') === 'ac');
console.log(substitute('abaa', 'zzab') === 'ac');

console.log(substitute('zzab') === 'c');
console.log(substitute('assevwe') === 'aftvw');
console.log(substitute('hvlaywy') === 'ahlvwz');
```

# Octal to Decimal - Practice Problem

```js
// Write a Function named octalToDecimal that performs octal to decimal conversion. When invoked on a String that contains the representation of an octal number, the Function returns a decimal version of that value as a Number. Implement the conversion yourself: do not use something else to perform the conversion for you.

/*
Octal use powers of 8 rather than powers of 10 (and is called a base-8 system as a result):

  233                          // octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1
= 128   + 24    + 3
= 155                          // decimal

Problem
- create a function that performs octal to decimal conversion
- the function will take a string containing number characters representing an octal number
- calculate and return the decimal version of that number

Examples
'130'
1, 3, 0
1*8^2 + 3*8^1 + 0*8^1
  64  +  24   +  0  ==> 88

DS
Input: string, representing octal number
Output: number, representing decimal version
- string split to array

Abstractions
- transformation of number characters to decimal values
- reduction to sum all of the decimal values 

Algo:
- split given string into array (digits)
- reverse array
- iterate over digits to perform transformation
  - using index plus 1 as exponent
  - convert current element to a number
  - multiply number by 8 to the current exponent
- perform reduction by adding all values together
- return total value
*/

function octalToDecimal(numberString) {
  let numArr = numberString.split('').reverse()

  return numArr.map((num, exponent) => {
    let decimal = Number(num) * (8 ** exponent)
    return decimal;
  }).reduce((total, value) => total + value );
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
```

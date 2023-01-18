# Prime Number Printer

```js
/*
Write a function, primeNumberPrinter, that prints all prime numbers present as substrings in a given string.

Input: 1 string
- 

Output: 1 array 
- the array will contain all prime numbers found within the given string

Rules:
- Prime number: Is a number that is only divisible by 1 and itself (that's > 1)
- given a string, return all of the prime numbers found within the given string

Implicit Rules:
- if the given string is empty, return an empty array
- the given string can contain any character type
- given string can be any length
- numbers will be separated by other character types in the given string
- if there are no number characters in the given str, return an empty array
- if there are no prime number in the given str, return an empty array
- the array of prime numbers should be sorted in ascending order

Questions:
- will there always be 1 argument passed in? yes
- will that argument always be a string? yes
- will the string ever be empty? yes, return an empty array
- will the given string only contain alphanumeric characters? no, it can contain anyt character type
- is there a limit to the length of the given string? no
- will numbers always be separated by other character types? yes
- will the numbers ever be negative? no
- will the numbers ever be 0? no
- will consecutive numbers be considered one number only?  yes
- will there always be number character within the given string? no
- what do we return if there are no number characters in the string arg? return an empty array
- what order should the prime numbers be arranged in in the returned array? sorted in ascending order

DS:
in: 1 string
out: 1 array
intermediate: 
- splitting the given string into an array for easy iteration

Algo:
- return [] if the string is empty
- replace all non-number characters with a space
- split the given string delimited by spaces
- filter out any non-numeric characters
- map over the existing string number and convert to numbers
- filter outn any non-prime numbers
- sort the primes in ascending order and return

isPrime()
- starting from 2 upto and not including the given number...
- iterate over each consecutive number 
  - if the given number is evenly divisible by the current number
    - return false
- return true

*/

function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
}

function primeNumberPrinter(string) {
  if (string.length === 0 ) return [];

  let numberStr = string.replace(/[^0-9]/g, ' ');
  return numberStr.split(' ')
                  .filter(char => char !== '')
                  .map(char => Number(char))
                  .filter(num => isPrime(num))
                  .sort((a, b) => a - b);
}

console.log(primeNumberPrinter(""));           // []
console.log(primeNumberPrinter("abckd"));      // []
console.log(primeNumberPrinter("a4bck1d"));    // []
console.log(primeNumberPrinter("a4bc0k1d"));   // []
console.log(primeNumberPrinter("a2 37 41"));   // [2, 37, 41]
console.log(primeNumberPrinter("37abc41, 2")); // [2, 37, 41]
console.log(primeNumberPrinter("a4bc2k13d"));  // [2, 13]

// completed in 40 mins
```

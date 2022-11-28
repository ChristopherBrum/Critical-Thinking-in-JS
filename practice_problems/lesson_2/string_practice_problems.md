# Strings - Practice Problems

1. Create a variable named firstName and set it equal to your first name. Set another variable named lastName to your last name. Join the two together, separated by a space, and store the result in a variable named fullName. Log the value of fullName.

```js
let firstName = 'Chris';
let lastName = 'Brum';
let fullName = firstName + ' ' + lastName;

console.log(fullName)
```

2. Call concat on firstName using lastName as an argument. Log the return value.

```js
let firstName = 'Chris';
let lastName = 'Brum';
let fullName = firstName.concat(' ', lastName);

console.log(fullName)
```

3. Split the fullName variable into an array that contains the first and last names as separate strings. Log the value of the array.

```js
let firstName = 'Chris';
let lastName = 'Brum';
let fullName = firstName.concat(' ', lastName);

console.log(fullName.split(' '));
```

4. Create a variable named language and set it equal to 'JavaScript'. Find the index of the first occurrence of the letter 'S' and save it to a variable named idx variable. Log the value of idx.

```js
let language = 'JavaScript';
let idx = language.indexOf('S');

console.log(idx);
```

5. Call charCodeAt on the language variable with an argument of idx. Save the return value to a variable named charCode, then log the value of charCode.

```js
let language = 'JavaScript';
let idx = language.indexOf('S');
let charCode = language.charCodeAt(idx);

console.log(charCode);
```

6. Log the return value of String.fromCharCode when you pass it charCode as an argument.

```js
let language = 'JavaScript';
let idx = language.indexOf('S');
let charCode = language.charCodeAt(idx);

console.log(String.fromCharCode(charCode));
```

7. Find the index of the last occurrence of the letter 'a' in the language variable and log the result.

```js
let language = 'JavaScript';
let idx = language.lastIndexOf('a');

console.log(idx);
```

8. Create two variables, a = 'a' and b = 'b'. Log a "greater than" comparison between the two variables. Reassign the value 'B' to variable b, then compare the two variables again, and log the comparison value.

```js
let a = 'a';
let b = 'b;';

console.log(a > b);

b = 'B';

console.log(a > b);
```

9. Call the language.slice method with arguments 1 and 4. Next, call the method with arguments 2 and 4. Log the return values.

```js
let language = 'JavaScript';
let val1 = language.slice(1, 4);
let val2 = language.slice(2, 4);

console.log(val1); // 'ava'
console.log(val2); // 'va'
```

10. Repeat the previous problem, but this time use substring instead of slice. Do the results differ in any way?

```js
let language = 'JavaScript';
let val1 = language.substring(1, 4);
let val2 = language.substring(2, 4);

console.log(val1); // 'ava'
console.log(val2); // 'va'
```

11. Call the language.slice method with arguments 1 and -1. Next, call the method with arguments 2 and -1. Log the return values.

```js
let language = 'JavaScript';
let val1 = language.slice(1, -1);
let val2 = language.slice(2, -1);

console.log(val1); // 'avaScrip'
console.log(val2); // 'vaScript'
```

12. Repeat the previous problem, but this time use substring instead of slice. Do the results differ in any way?

```js
let language = 'JavaScript';
let val1 = language.substring(1, -1);
let val2 = language.substring(2, -1);

console.log(val1); // 'J'
console.log(val2); // 'Ja'
```

13. Create variables named fact1 and fact2 and set them equal to 'JavaScript is fun' and 'Kids like it too', respectively. Combine the values of the two variables with the string ' and ' between them, and store the result in a variable named compoundSentence. Make sure the first letter of fact2 shows up as lowercase in compoundSentence. Log the value of compoundSentence.

```js
let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';
let compoundSentence = fact1.concat(' and ', fact2.toLowerCase());

console.log(compoundSentence); // JavaScript is fun and kids like it too
```

14. Log the first letter of fact1 and fact2 using bracket notation.

```js
let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';

console.log(fact1[0]); // J
console.log(fact2[0]); // K
```

15. Create a variable named pi and set it to the result of 22 / 7. Convert pi to a String using the toString method. Search the resulting string for the final occurrence of '14', and log its index position.

```js
let pi = 22 / 7;
let piString = pi.toString();
console.log(piString); // 3.142857142857143
console.log(piString.lastIndexOf('14')); // 14
```

16. Create a variable named boxNumber and set it to the result of calling 356.toString(), and log the result. Before moving on, try to run your program.

```js
let boxNumber = 365.toString(); // SyntaxError
console.log(boxNumber);
```

One way to avoid this is to use two periods instead of one. Replace 356.toString() with 356..toString(), and try running it again.

```js
let boxNumber = 365..toString();
console.log(boxNumber); /// 365
```

Some "linter" programs reject this usage, and instead suggest that you use parentheses. Update your program again: eliminate the second period, and place 356 in parentheses, then run the program again.

```js
let boxNumber = (365).toString();
console.log(boxNumber); // 365
```

17. Convert the boxNumber variable back to a number using parseInt. To make sure the result is a number, you can log typeof boxNumber to verify the type of the result. Now convert the number back to a String by using the String function and log the typeof of the result to verify it is now a String.

```js
let boxNumber = (365).toString();
console.log(boxNumber); // 365

let backToNum = Number.parseInt(boxNumber);
console.log(backToNum);
console.log(typeof backToNum);

backToStr = String(backToNum);
console.log(backToStr);
console.log(typeof backToStr);
```

18. Write a program that asks for a user's name, then greets the user with that name. If the user appends a ! to his name (e.g., 'Bill!'), the computer should "yell" its greeting: that is, it should log everything to the console in uppercase. You can check whether the name ends with a ! using String.prototype.endsWith (ES6 only). You can remove the ! from the user's name with String.prototype.slice.

```js
let name = prompt('What\'s your name? ');

if (name.endsWith('!')) {
  let formattedName = name.toUpperCase().slice(0, name.length - 1)
  console.log(`HELLO ${formattedName}. WHY ARE WE SCREAMING?`);  
} else {
  console.log(`Hello ${name}.`);
```
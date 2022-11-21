Write a function named myOwnEvery that's similar to the Array.prototype.every method. It should take an array and a function as arguments, and return true if every element passed to the function evaluates as truthy.

```js
function myOwnEvery(array, func) {
  // ...
}

let isAString = value => typeof value === 'string';
myOwnEvery(['a', 'a234', '1abc'], isAString);       // true
```

**Answer**:

```js
function myOwnEvery(array, func) {
  let allElements = true;

  array.forEach(function(element) {
    if (!func(element)) allElements = false;
  });

  return allElements;
}

// OR....

function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i +=1) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true
console.log(myOwnEvery(['a', 'a234', '1abc', 123], isAString));  // false
```

**Additional**;

```js
function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i +=1) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}

function areAllNumbers(array) {
  return myOwnEvery(array, isANumber);
}

let isAString = value => typeof value === 'string';

function isANumber(value) {
  return typeof value === 'number' && !Number.isNaN(value);
}

console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true
console.log(myOwnEvery(['a', 'a234', '1abc', 123], isAString));  // false

console.log(areAllNumbers([1, 5, 6, 7, '1']));             // false
console.log(areAllNumbers([1, 5, 6, 7, 1]));               // true
console.log(areAllNumbers([1, 5, 6, 7, NaN]));             // false
```

# Iteration Problem

Write a Function named myForEach that is similar to the built-in Array.prototype.forEach method. Your Function should take an array and another Function as arguments. The Function passed to myForEach should reassign a variable in the outer scope. For instance, in the code fragment below, the Function passed to myForEach reassigns the min variable.

```js
function myForEach(array, func) {
  // ...
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);                        // 3
```

**Answer**:

```js
function myForEach(array, func) {
  for (let i = 0; i <= array.length; i++) {
    func(array[i]);
  }
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);                        // 3
```

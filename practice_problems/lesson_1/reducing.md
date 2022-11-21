# Reducing

Write a function named myReduce that's similar to the Array.prototype.reduce method. It takes an array and a function as arguments, and optionally, a third argument that serves as an initial value. If the caller omits the initial value, myReduce should use the first element of the Array as the initial value. myReduce should return the value returned by the last invocation of the callback function.

```js
function myReduce(array, func, initial) {
  // ...
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

myReduce([5, 12, 15, 1, 6], smallest);           // 1
myReduce([5, 12, 15, 1, 6], sum, 10);            // 49
```

**Answer**:

```js
function myReduce(array, func, initial) {
  let result;

  array.forEach( (value, index) => {
    if (initial !== undefined && index === 0) {
      result = initial;
      result = func(result, value);
    } else if (initial === undefined && index === 0) {
      result = value;
    } else {
      result = func(result, value);
    }
  });
  
  return result;
}
```

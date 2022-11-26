# Multiply All Pairs

```js
// Write a function that takes two array arguments, each containing a list of numbers, and returns a new array containing the products of all combinations of number pairs that exist between the two arrays. The returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

function multiplyAllPairs(arr1, arr2) {
  let productArr = [];

  arr1.forEach( outerNum => {
    arr2.forEach( innerNum => {
    let product = outerNum * innerNum;
    productArr.push(product);
    });
  });

  return productArr.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
```
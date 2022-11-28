# Grocery List

```js
// Write a function that takes a grocery list in a two-dimensional array and returns a one-dimensional array. Each element in the grocery list contains a fruit name and a number that represents the desired quantity of that fruit. The output array is such that each fruit name appears the number of times equal to its desired quantity.

// In the example below, we want to buy 3 apples, 1 orange, and 2 bananas. Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

/*
Problem
- write a function that takes one nested array as an argument
  - each subarray will consist of a fruit (string) and a quantity
- return a new array containing each fruit string a number of times equal to their 'quantity'

DS
Input:1 nested array
Output: 1 array
Intermediate:
- Strings as fruit elements
- numbers to represent the quantity

Goal: Write a function that takes a grocery list of fruit names and their quantity and return a new array consisting of each fruit name repeated a number of times equal to their quantity

Abstractions:
- transforming the array of fruit name and quantity to an array of the fruit name repeated a number of times equal to the quantity

Algo:
--> function --> buyFruit(array) --> array
  - map over the given array
    - declare an empty array (tempArr)
    - iterate a number of times equal to quantity
      - push fruit to tempArr for each iteration
    - return tempArr
  - flatten transformed array and return
*/

function buyFruit(groceryList) {
  let cart = groceryList.map(item => {
               let shoppingCart = [];
               for (let i = 0; i < item[1]; i += 1) {
                 shoppingCart.push(item[0]);
               }
               return shoppingCart;
             });

  return cart.flat();
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
```

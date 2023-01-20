# Vending Machine

```js
/*
Your task is to create a function that simulates a vending machine.

Given an amount of money (in cents ¢ to make it simpler) and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.

The coins used for the change are the following: [500, 200, 100, 50, 20, 10]

The return value is an object with 2 properties:

product: the product name that the user selected.
change: an array of coins (can be empty, must be sorted in descending order).

Examples
vendingMachine(products, 200, 7) ➞ { product: "Crackers", change: [ 50, 20, 10 ] }

vendingMachine(products, 500, 0) ➞ "Enter a valid product number"

vendingMachine(products, 90, 1) ➞ "Not enough money for this product"

Notes
The products are fixed and you can find them in the Tests tab.
If productNumber is invalid (out of range) you should return the string: "Enter a valid product number".
If money is not enough to buy a certain product you should return the string: "Not enough money for this product".
If there's no change, return an empty array as the change.

-------------------------------------------------------

Input: 1 array of objects, 2 numbers
- array of objects is the available vending machine products
- the first number is the amount of money paid
- the second number is the desired product number

Output: 1 object, or a string
- an object will be returned if the transaction is valid
  - the object will have two keys: product and change
    - product will be a string and describe the product purchased
    - the change will be an array and is the change given (in descending order)
  
Rules:
- given an array of objects, and two numbers
- determine if the desired product is available
  - if not, return "Enter a valid product number"
- determine if the amount paid is sufficient
  - if not, return "Not enough money for this product"
- if so, return an object describing the product and the change being returned

change: will given in increments of: 500, 200, 100, 50, 20, 10
- if no change necessary, return an empty array
- change increments should be in decreasing order 

Implicit Rules:
- the 3rd arg passed in can be 0 or negative, return the appropriate string if not valid
- the change required will always be exact (no remainders)

Questions:
- will we always have 3 args? yes
- will the args always be 1 array of objects and 2 numbers? yes
- will the array of objects ever be empty? no
- with the array of objects always have a number, price, and name property? yes
- will number and proce properties always be numbers? yes
- will name properties always be strings? yes
- will there ever not be even change to return? no
- will 2nd two argements ever be 0, negative, NaN, infinity, or a decimal? no, except that the 2nd can be 0 or negatve

DS:
- working with both arrays and objects

Algo:
- decalre a variable 'register' to an array of change increments
- if desiredProduct is invalid return appropriate string
- if moneyPaid is not enough for desiredProduct return approipriate string
- declare a purchase variable set to an object
- decalre a change variable set to an empty array
- decalre a change variable set to the product and the amount paid (changeTotal)
- while changeTotal > 0 loop
  - iterate over the register array
  - for loop starting from 0 up to the length of register
    - if current register amount <= changeTotal
      - push register amount to change array
      - subtract register amount from change total
      - reset index to 0
- set the product name property to the purchase obj
- set to change property to the change array
- return obj
*/

const products = [
  { number: 1, price: 100, name: 'Orange juice' },
  { number: 2, price: 200, name: 'Soda' },
  { number: 3, price: 150, name: 'Chocolate snack' },
  { number: 4, price: 250, name: 'Cookies' },
  { number: 5, price: 180, name: 'Gummy bears' },
  { number: 6, price: 500, name: 'Condoms' },
  { number: 7, price: 120, name: 'Crackers' },
  { number: 8, price: 220, name: 'Potato chips' },
  { number: 9, price: 80,  name: 'Small snack' },
];

function invalidProduct(productId) {
  return !products.some(product => product.number === productId);
}

function fetchProduct(productId) {
  for (let i = 0; i < products.length; i += 1) {
    if (products[i].number === productId) return products[i];
  }
}

function vendingMachine(products, amountPaid, productId) {
  const register = [500, 200, 100, 50, 20, 10];

  if (invalidProduct(productId)) return "Enter a valid product number";
  let product = fetchProduct(productId);
  if (product.price > amountPaid) return "Not enough money for this product";

  let purchase = {};
  let change = [];
  let owed = amountPaid - product.price;

  while (owed > 0) {
    for (let i = 0; i < register.length; i += 1) {
      if (register[i] <= owed) {
        change.push(register[i]);
        owed -= register[i];
        i = 0;
      }
    }
  }

  return { product: product.name, change: change };
}

console.log(vendingMachine(products, 500, 6)); // { product: "Condoms", change: [] }
console.log(vendingMachine(products, 120, 7)); // { product: "Crackers", change: [] }
console.log(vendingMachine(products, 200, 7)); // { product: "Crackers", change: [ 50, 20, 10 ] }
console.log(vendingMachine(products, 500, 9)); // { product: "Crackers", change: [ 200, 200, 20 ] }
console.log(vendingMachine(products, 500, 0)); // "Enter a valid product number"
console.log(vendingMachine(products, 90, 1)); // "Not enough money for this product"
console.log(vendingMachine(products, 90, -1)); // "Enter a valid product number"

// Done in 47 minutes
```

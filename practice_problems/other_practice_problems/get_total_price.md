# Get Total Price

```js
/*
Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:

{
  "product": "Milk",
  "quantity": 1,
  "price": 1.50
}

There might be a floating point precision problem in here...

------------------------------------------------------------------

Input: 1 Array
- the array contains a collection of objects
- each object represents a product from the grocery store
- each product will have these properties
  - product --> string
  - quantity --> number
  - price --> decimal number

Output: 1 number
- a decimal number representing the total price of the products in the given array

Rules:
- given an array of objects
- return the total cost of all products, based on their price and their quantity

- if the given array is empty, return 0
- 

Questions:
- will we always have 1 arg passed in? yes
- will the arg always be an array? yes
- will the array only contains objects? yes
- will the array always contain objects? no, it can be empty
- what do i do if the array is empty? return 0
- will the array objects always have the 3 listed properties? yes
- will they ever have additional properties? no
- the the types listed above always be the same? yes
- can the quantity ever be 0? no
- can the quantity ever NaN, infinity, a decimal, or negative? no
- can the price ever be 0? no
- can the price ever NaN, infinity, a decimal, or negative? no

DS:
in: 1 array of objects
out: 1 number (float)
intermediate:
- working with the given array of objects
- working with each object to collect the total cost of the product

Algo:
- declare a variable to 0 (total)
- iterate over the given array
  - multiply the quantity by the price
  - reduce to 2 decimal points
  - convert toa number
  - add to total
- return total

*/

function formatNumber(num) {
  return Number((num).toFixed(2));
}

function getTotalPrice(products) {
  let total = 0;

  products.forEach(product => {
    let subTotal = formatNumber(product.quantity * product.price);
    total += subTotal;
  });

  return formatNumber(total);
}

console.log(getTotalPrice([])); // 0
console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 }
])); // 1.5

console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
])); // 4

console.log(getTotalPrice([
  { product: "Milk", quantity: 3, price: 1.50 }
])); // 4.5

console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
])); // 10.4

console.log(getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
])); // 0.3
```

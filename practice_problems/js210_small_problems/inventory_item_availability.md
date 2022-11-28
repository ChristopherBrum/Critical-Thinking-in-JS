# Inventory Item Availability

```js
// Building on the previous exercise, write a function that returns true or false based on whether or not an inventory item is available. As before, the function takes two arguments: an inventory item and a list of transactions. The function should return true only if the sum of the quantity values of the item's transactions is greater than zero. Notice that there is a movement property in each transaction object. A movement value of 'out' will decrease the item's quantity.

// You may (and should) use the transactionsFor function from the previous exercise.

/*
Problem
Explicit Rules:
- create a function that takes two arguments
  - an inventory ID
  - an array of transaction objects
- the function should return true or false based on whether the quantity of the particular item is greater than zero or not
- each transaction has movement property which dictates whether its quantity is being added or subtracted

Implicit Rules:
- we will need to determine the current quantity of any transaction when determining whether or not the quantity exists (greater than zero)
- will need to use transactionsFor function to group all transactions of a particular ID
- 

DS
Input: one number (ID), and an array of objects
Output: a boolean
Intermediate:
- the objects will contains number and string values
- we'll use number for indexes
- booleans for comparison

Goal: create a function that takes an ID and an array of transaction objects and returns true or false based on whether the quantity of each transaction is greater than zero

Abstractions:
- existing function we created will use filtering
- reduction to determine current quantity

Algo:
--> function --> isItemAvailable(number(id), array(of objects)) --> boolean
  - collect the transaction objects of the ID passed in (transactions)
  - reduce the list of transactions
    - if transaction movement is 'in'
      - add quantity to total
    - if transaction movement is 'out'
      - subtract quantity to total
  - if transactions total i greater than zero, return true
  - otherwise return false

*/

function transactionsFor(id, transactions) {
  return transactions.filter(transaction => transaction.id === id);
}

function isItemAvailable(id, allTransactions) {
  let transactions = transactionsFor(id, allTransactions);
  let currentQuantity = transactions.reduce((quantityTotal, transaction) => {
                          if (transaction.movement === 'in') {
                            return quantityTotal + transaction.quantity;
                          } else {
                            return quantityTotal - transaction.quantity;
                          }
                        }, 0);

  return currentQuantity > 0;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
```

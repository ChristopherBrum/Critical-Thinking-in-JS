# Inventory Item Transactions

```js
// Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item.

/*
Problem
Explicit Rules:
- create a function that takes two arguments:
  - inventory item's ID
  - list of transactions
- return an array that contains the transactions corresponding to the given ID's

Implicit Rules:
- ID values will NOT be unique, multiple transactions will correspond to one ID
- the given array will contains only objects
- each object will contain these properties
  - id
  - movement
  - quantity

DS
Input: one number (ID), and an array of objects
Output: an array of objects
Intermediate:
- the objects will contains number and string values
- we'll use number for indexes
- booleans for comparison

Goal: Create a function that takes an ID and an array of transaction objects, return a new array of all the transaction objects that match the given ID

Abstractions:
- filtering to match the transaction objects with the given id

Algo:
--> function --> transactionsFor(number, array) --> array
  - iterate over the given array while filtering
    - check if the current objects ID matches the ID passed in
  - return the filtered array

*/

function transactionsFor(id, transactions) {
  return transactions.filter(transaction => transaction.id === id);
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

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
``

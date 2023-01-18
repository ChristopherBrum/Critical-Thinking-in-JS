# Vodka Bottle

```js
/*
The insurance guy laughs, he's just kidding. He just needs an updated list. You just need one of those Rammstein Vodka bottles.

Given an object with alcoholic drinks and a number, return a string with the name of the Rammstein bottle that matches the given number.

Examples
{ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein A"
// number = 100

{ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 } ➞ "Rammstein B"
// number = 50

{ whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 } ➞ "Rammstein D"
// number = 70

Notes
There will always be a corresponding Rammstein bottle for the number given.
There will never be 2 Rammstein bottles with the same number.
You always return one Rammstein bottle.

------------------------------------------------------

Input: 1 object, 1 number
- object will represent the selection of alcoholic beverages
- the number will represent the number associated with the desired rammsteiin vodka

Output: 1 string
- the (property) name of the desired rammstein vodka

Rules:
- given 1 object of alcoholic beverages and their price(?)
- return the rammstein beverage that matches the given number/price
- there will always be a valid rammstein beverage in the object
- there will never be a rammstein bottle with the same number
- 

Implicit Rules:
- there can be more than one property name with 'Rammstein' in it
- there can be more than one beverage matching the target number/price
- there can be additional beverages not associated with rammstein

Questions:
- will we always have two arguments passed in? yes
- will the first arg always be an object? yes
- will the second arg always be a number? yes
- will the obj values always be numbers? yes
- will there always be exactly on beverage that matches the number and has the word rammstein in the property name? yes
- can the number be 0? no
- can the number be negative? no
- can the number be NaN or infinity or a decimal? no

DS:
in: 1 object and 1 number
out: 1 string
intermediate:
- may collect the keys and values of the object as arrays
- utilizing the given object for easy/quick selection

Algo:
- iterate over the given object using a for/in loop
  - if the property name contains rammstein and the number matches the target number
    - return the property name

*/

function getVodkaBottle(obj, targetNum) {
  for (let prop in obj) {
    if (/rammstein/i.test(prop) && targetNum === obj[prop]) return prop;
  }
}

console.log(getVodkaBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 100)); // "Rammstein A"
console.log(getVodkaBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 50)); // "Rammstein B"
console.log(getVodkaBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 }, 70)); // "Rammstein D"
```

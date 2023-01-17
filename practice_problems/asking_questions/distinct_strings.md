# Distinct Strings

```js
/*
A distinct string is a string that is present only once in an array.​Given an array of strings, arr, and an integer, k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".​Note that the result string is the one encountered earliest in the array.

----------------------------------------
Input: 1 array(arr) and 1 number(k)
- arr contains a series of strings
- k represents the kth distinct string to be identified

Output: 1 string
- the kth distinct string or an empty string

Rules:
- Distinct String: means it's a string that only occurs once within the given array
- return the kth distinct strings within the given array
- the kth distinct strings will be selected from order of appearence in the given array
- return '' if there is no kth distinct string

- given array can be empty, return an empty string in this case
- string elements in arr can be any length
- uppper and lowercase letters are distinct from one another
- string elements can be empty

Questions:
- will there always be 2 arguments passed in to the function? yes
- will the first arg always be an array? yes
- will the array only contain strings? yes
- can the array be sparse? no
- can the array be empty? yes, return an empty string
- are alphabetical characters the only characters within the strings elements? yes
- will string elements always be 1 character in length? no, can be any length
- will letter characters always be lowercase? no
- when determining if a string is distinct, does an uppercase and lowercase character count as the same, or different? they are case sensetive
- will the string elements ever be empty? yes
- will k ever be NaN, infinity, ir a fractional number? no
- will k ever be 0 or negative? no
- will k always be a number? yes

DS:
ins: 1 array and 1 number
outs: 1 string
in between:
- utilizing arrays for iterative purposes
- utilize a set to identify distinct strings

Algo:
- return an empty string if...
  - the given arr is empty

- declare a stringCount variable set to an object
- iterate over the given array
  - set or increment the value by 1 to the current string as a property name

- declare a distinct variable set to an empty array
- find the keys and values of the stringCount object in array form
- iterate over the values array with index
  - if the current value is 1
    - push the value at the current index from keys to the distinct array

- set a variable to 0 (count)
- iterate over the given array
  - incremenmt count each time the current string is found within the distinct array
  - if count === k
    - return the current string
*/

function collectStringCount(arr) {
  let stringCount = {};

  arr.forEach(key => {
    stringCount[key] = stringCount[key] || 0;
    stringCount[key] += 1;
  });

  return stringCount;
}

function collectDistinctString(obj) {
  let distinct = [];

  let keys = Object.keys(obj);
  let values = Object.values(obj);

  values.forEach((value, idx) => {
    if (value === 1) distinct.push(keys[idx]);
  });

  return distinct;
}

function distinctString(arr, k) {
  let stringCount = collectStringCount(arr);
  let distinct = collectDistinctString(stringCount);

  let count = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (distinct.includes(arr[i])) count ++;
    if (count === k) return arr[i];
  }
  
  return '{empty}';
}

console.log(distinctString([], 2)); // ""
console.log(distinctString(['abc', 'defxyz', 'abc', 'gh'], 2)); // "gh"
console.log(distinctString(['gh', 'abc', 'defxyz', 'abc', 'gh'], 2)); // ""
console.log(distinctString(['abc', 'defxyz', '', 'gh'], 2)); // "defxyz"
console.log(distinctString(['ABC', 'defxyz', 'abc', 'gh'], 3)); // "abc"
console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
console.log(distinctString(['a', 'b', 'c', 'd', 'a', 'b', 'e', 'f'], 5)); // ""

// Done in 38 minutes
```

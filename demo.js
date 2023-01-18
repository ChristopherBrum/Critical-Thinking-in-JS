/*
Edabit - Does the Cargo Fit? (https://edabit.com/challenge/yX8HRSfdHjKji8ikf)

A ship has to transport cargo from one place to another, while picking up cargo along the way. Given the total amount of cargo and the types of cargo holds in the ship as arrays, create a function that returns true if each weight of cargo can fit in one hold, and false if it can't.

"S" means 50 cargo space.
"M" means 100 cargo space.
"L" means 200 cargo space.

Examples
willFit(["M", "L", "L", "M"], [56, 62, 84, 90]) ➞ true

willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70 , 80, 90, 200]) ➞ false

willFit(["L", "L", "M"], [56, 62, 84, 90]) ➞ true

Input: 2 arrays
- first arr will represent the cargo space avaialble using string codes
- second arr will represent the weight to be picked up

Output: 1 boolean value
- represents whether the cargo will fit in the transport

Rules:
- the transport space will be given in strings:
  - "S" means 50 cargo space.
  - "M" means 100 cargo space.
  - "L" means 200 cargo space.

Implicit Rules:
- the second array may contain more elements than the first
- there may be situations where multiple cargo can be stored in one transport space
- there can be as little as 1 element in either array arg
- there is no limit to the number of elements in either array arg
- the number elements in array 2 will be whole numbers > 0
- the second array may be shorter than the first
- the second array may be longer than the first
- the numbers can be combined to fit into a single transport space

Questions:
- will there always be 2 args passed in? yes
- will these two args always be arrays? yes
- can either of the given array ever be empty? no

DS:
- utilizing arrays for processing

Algo:
- transform the cargo space array into an array of numberic values
- sort both arrays in ascending order
- iterate over the space array
  - decalre a temp array
  - iterate over the cargo array
    - if the first element of the cargo array + the remaining values in the temp array > the current space value || the next iteration is undefined
      - remove the previous elements of the cargo array
    - move on to the next iteration

- if the cargo array is not empty, return false
- otherwise, return true
*/

function transformSpaceValues(arr) {
  return arr.map(code => {
    if (code === "L") {
      return 200;
    } else if (code === "M") {
      return 100;
    } else {
      return 50;
    }
  });
}

function tempArrSum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function willFit(space, cargo) {
  let spaceValues = transformSpaceValues(space);
  spaceValues.sort((a, b) => a - b);
  let cargoValues = cargo.slice().sort((a, b) => a - b);
  
  spaceValues.forEach(spaceVal => {
    let tempArr = [];
    let i = 0;

    while (cargoValues.length > 0 && i < cargoValues.length) {
      let tempSum = tempArrSum(tempArr);

      if ((cargoValues[i] + tempSum) > spaceVal) {
        let size = tempArr.length;
        cargoValues.splice(0, size);
        tempArr = [cargoValues[0]];
      } else {
        tempArr.push(cargoValues[i]);
      }

      i += 1;
    }

    // issue here
    if (tempArr.length > 0) {
      let size = tempArr.length;
      cargoValues.splice(0, size);
    }

    i = 0;
  });

  console.log(cargoValues)
  return cargoValues.length === 0 ? true : false;
}

// console.log(willFit(["L"], [50, 50, 84])); // true
// console.log(willFit(["M"], [56, 62, 84])); // false
// console.log(willFit(["M", "L", "L", "M"], [56, 90])); // true
// console.log(willFit(["M", "L", "L", "M"], [56, 62, 84, 90])); // true
console.log(willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70 , 80, 90, 200])); // false
// console.log(willFit(["L", "L", "M"], [56, 62, 84, 90])); // true
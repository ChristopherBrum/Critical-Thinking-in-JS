# Formatting Bands

```js
// We have the following Array of information for some popular bands:

// let bands = [
//   { name: 'sunset rubdown', country: 'UK', active: false },
//   { name: 'women', country: 'Germany', active: false },
//   { name: 'a silver mt. zion', country: 'Spain', active: true },
// ];

// There are problems with this data, though, so we first have to clean it up before we can use it:

// The band countries are wrong: all the bands should have 'Canada' as the country.
// The band name should have all words capitalized.
// Remove all dots from the band names.
// Write a function that can process the input band Array and return an Array that contains the fixed information:

/*
Problem
- create a function that takes in an array of objects as an argument
- the array contains objects of bands information
- the data in the band objects needs to be updated
  - the countries should all be 'Canada'
  - the the band names should have all words capitalized
  - all dots from band names should be removed
- the function should return a new array with the band data corrected

Examples
- 

DS
Input: an array of objects
Output: an array of objects (corrected)
- working with string data
- 

Abstractions
- transformation should be used to update the band objects
- transform each band name sso each word is capitalized

Algo:
- iterate through the elements of the given array, transforming them
  - replace the current country with 'Canada'
  - capitalize each word in the band names
  - replace all dots in the band names with empty strings
  - return modified band object
*/

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function updateCountry(band) {
  band.country = 'Canada';
}

function capitalizeBandName(band) {
  band.name = band.name
                  .split(' ')
                  .map( word => capitalizeString(word))
                  .join(' ');
}

function capitalizeString(word) {
  let firstLetter = word[0].toUpperCase()
  let restOfWord = word.slice(1);
  return firstLetter + restOfWord;
}

function removeDotsInBandName(band) {
  band.name = band.name.replaceAll('.', '');
}

function processBands(data) {
  return bands.map(band => {
    updateCountry(band);
    capitalizeBandName(band);
    removeDotsInBandName(band);
    return band;
  });
}

console.log(processBands(bands));
// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
```

## Without Side Effects

```js
// We have the following Array of information for some popular bands:

// let bands = [
//   { name: 'sunset rubdown', country: 'UK', active: false },
//   { name: 'women', country: 'Germany', active: false },
//   { name: 'a silver mt. zion', country: 'Spain', active: true },
// ];

// There are problems with this data, though, so we first have to clean it up before we can use it:

// The band countries are wrong: all the bands should have 'Canada' as the country.
// The band name should have all words capitalized.
// Remove all dots from the band names.
// Write a function that can process the input band Array and return an Array that contains the fixed information:

/*
Problem
- create a function that takes in an array of objects as an argument
- the array contains objects of bands information
- the data in the band objects needs to be updated
  - the countries should all be 'Canada'
  - the the band names should have all words capitalized
  - all dots from band names should be removed
- the function should return a new array with the band data corrected

Examples
- 

DS
Input: an array of objects
Output: an array of objects (corrected)
- working with string data
- 

Abstractions
- transformation should be used to update the band objects
- transform each band name sso each word is capitalized

Algo:
- iterate through the elements of the given array, transforming them
  - replace the current country with 'Canada'
  - capitalize each word in the band names
  - replace all dots in the band names with empty strings
  - return modified band object
*/

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function capitalizeBandName(bandName) {
  return bandName.split(' ')
                 .map( word => capitalizeString(word))
                 .join(' ');
}

function capitalizeString(word) {
  let firstLetter = word[0].toUpperCase()
  let restOfWord = word.slice(1);
  return firstLetter + restOfWord;
}

function removeDotsInBandName(bandName) {
  return bandName.replaceAll('.', '');
}

function processBands(data) {
  return bands.map(band => {
    let bandName = capitalizeBandName(band.name);
    let newBandName = removeDotsInBandName(bandName);

    return {
      name: newBandName,
      country: 'Canada',
      active: band.active
    }
  });
}

console.log(processBands(bands));
// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
```

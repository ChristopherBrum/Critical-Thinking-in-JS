# Processing Releases - Practice Problem

## Step 1

```js
// Write a Function named processReleaseData that processes the following movie release data:

let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

// The Function should generate an Array of Objects that contain only the id and title key/value pairs. You may assume that id and title, when existing, is an integer greater than 0 and non-empty string respectively. Here are the rules:

// Keep only releases that have both id and title property present.
// Keep only the id and title data for each release.

/*
Problem
- write a function that processes movie data
- it will take one array of objects as an argument
- it will return an array of objects
  - each containing the movies is and title key/value pairs
- you may assume 
  - the given id will be a number grater than 0
  - the title will be a non-empty string

- Only keep releases that have an id and title 
- Only keep the id and title data for each release

DS:
- an array of objects for input and output
- strings, numbers, arrays, and objects as data within the given \array of objects
- booleans for comparison

Algo:
- filter the given array to return a new array of the releases with a valid title and id
  - within filtering method iteration we filter each objects key/value pairs to select the key/values where the key is is or title
  - can use interrogation to determine if the current object has a valid id and title
*/

function processReleaseData(data) {
  return data.filter( obj => obj.id && obj.title )
             .map( obj => {
               return {
                 id: obj.id, 
                 title: obj.title, 
               }
             });
}

console.log(processReleaseData(newReleases));

// should return: [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];
```

## Further Exploration

```js
let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 0,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

// The current solution assumes that the value of id will be an integer value greater than 0. If it was possible to have a value of 0 for id, what would the implications be to the current solution? What changes, if any, would need to be made in order to handle the 0 value?

function processReleaseData(data) {
  return data.filter( obj => obj.id >= 0 && obj.title )
             .map( obj => {
               return {
                 id: obj.id, 
                 title: obj.title, 
               }
             });
}

console.log(processReleaseData(newReleases));

// should return: [{ id: 70111470, title: 'Die Hard'}, { id: 0, title: 'Fracture' }];
```

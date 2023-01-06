# Nearest Chapter

```js
/*
Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.

Notes
All page numbers in the dictionary will be valid integers.
Return the higher page number if ever two pages are equidistant (see last test case).

Input: 1 object, 1 number
- the object properties will be chapters/chatper titles
- the object values will be their page numbers
- the number is the page number we are currently on

Output: 1 string
- the chapter title

Rules:
- given an object containing chapter titles and the pages those chapters begin on, and  given a current page number that we are on...
- determine which chapter title page is closest to our current page number
- return the chapter title closest
- if two chapter titles are equidistant, return the chapter title with the greaterm page number
- return undefined if a different number of args is passed in or a different type from the ones designated are passed in

Questions:
- are the object properties chapters/chapter titles?
- are the object values the page numbers the chapter begins on?
- do we want to find the chapter start page thats closest to our current page? 
- can we always exepect 2 argument passed in?
- will the first arg always be an object?
- will the second arg always be a number? 
- if any args are not included or are of the wrong type, how would I handle that?
  return undefined
- will the object passed in ever contain different properties than the chapter title/page number?
  no
- what do I do if the object pased in is empty?
  return undefined
- will the number ever be 0 or negative?
  yes, return undefined if so
- will the number ever be a fraction?
  no  

DS:
- intermediate
  - extracting the values of the object into an array for iteration
  - extract the keys into an array for easy selection

Example:
[1, 15, 37], 10
1 - 10 --> -9 --> 9
15 - 10 --> 5 --> 5
37 - 10 --> 27 --> 27

[9, 5, 27]

Algo:
- return undefined if...
  - either arg is the wrong type
  - the object is empty
  - any value in the object is < 0

- extract the keys and values of the object into arrays
- map over the array of values 
  - subtract currentPageNum from each chapterPage and get absolute value
- find the lowest values idx from the beginning 
- find the lowest values idx from the end
- they are different
  - return the key at the index of the higher of the two page numbers
- otherwise
  - return the key at the index
*/

const invalidObj = obj => {
  return typeof obj !== 'object' || Array.isArray(obj) || Object.keys(obj).length === 0;
}

const invalidNum = num => {
  return typeof num !== 'number' || num <= 0;
}

function nearestChapter(obj, num) {
  if (invalidObj(obj) || invalidNum(num)) return undefined;

  let keys = Object.keys(obj);
  let values = Object.values(obj);

  let pagesToChapter = values.map(pageNum => Math.abs(pageNum - num));
  let lowestVal = Math.min(...pagesToChapter);

  let firstIdx = pagesToChapter.indexOf(lowestVal);
  let lastIdx = pagesToChapter.lastIndexOf(lowestVal);

  if (firstIdx !== lastIdx) {
    return firstIdx > lastIdx ? keys[firstIdx] : keys[lastIdx];
  } else {
    return keys[firstIdx];
  }
}

console.log(nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10)); // ➞ "Chapter 2"

console.log(nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200)); // ➞ "The End?"

console.log(nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3)); // ➞ "Chapter 1b"

console.log(nearestChapter());         // undefined
console.log(nearestChapter({'a': 1})); // undefined
console.log(nearestChapter([], 12));   // undefined'
console.log(nearestChapter({'a': 1}, 0));   // undefined
console.log(nearestChapter({'a': 1}, -5));  // undefined
console.log(nearestChapter({}, 5));  // undefined
```

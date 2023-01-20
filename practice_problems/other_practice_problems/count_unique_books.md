# Count Unique Books

```js
/*
Suppose a pair of identical characters serve as book ends for all characters in between them. Write a function that returns the total number of unique characters (books, so to speak) between all pairs of book ends.

The function will look like:

countUniqueBooks("stringSequence", "bookEnd")

Notes
No book characters will be identical to the bookend character.
There will always be an even number of bookends.
Once a bookend is used to complete a pair, a new bookend must be found to create another pair.
Return 0 if bookends contain zero books.

--------------------------------------------------------

Input: 2 strings
- first string will represent a bookshelf
- each character that is not a 'bookend' will represent an individual book
- the second arg represents a bookend

Output: 1 number
- represents the number of unique books found between pairs of bookends

Rules:
- given two string arguments
- find all characters located between pairs of bookend characters and...
  - determine how many distinct characters there are
- there will always be an even number of bookend characters
- there will be no regular characters identical to bookend characters
- bookend characters cannot be reused
- if there are no distinct charaacters between bookends, return 0


Implicit Rules:
- the booshelf string may be empty, return 0 in this case
- letter characters are case sensetive when determining distinct characters

Questions:
- will there always be 2 args passed in? yes
- will these two args always be strings? yes
- can the bookshelf string be empty? yes, return 0 if so
- can the bookends string be empty? no
- what type of string characters can both args accept? any
- when letters are found within the booksehlf, is case taken into consideration when determining dinstinct characters? yes, case sensitive

DS:
in: 1 strings
out: 1 number
in between:
- utilize arrays to collect and process string characters
- use an object to collect characters and their count

Algo:
toggleCollectBooks(boolean)
- if value is true return false
- otherwise return true

filterOutDuplicates(array) 
- declare an object to a count variable
- iterate over the array
  - set the count object at the current characters property name to 0 or its current count
  - increment the characters count
- create a keys and values array of count
- filter over the keys array with index
  - if the current idx of the vlaues array is 1, keep this key
- return the filtered keys array

countUniqueBooks()
- declare a books variable set to an empty array
- decalre a collectBooks variable set to false
- iterate over the characters of the bookshelf arg
  - if current character is equal to the bookend character
    - toggle collectBooks
  - otherwise, if collectBooks is truthy
    - push current character to books
- filterOutDuplicates and save to unques variable
- return uniques length
*/

function toggleCollectBooks(collectBooks) {
  return collectBooks ? false: true;
}

// filterOutDuplicates(array) 
// - declare an object to a count variable
// - iterate over the array
//   - set the count object at the current characters property name to 0 or its current count
//   - increment the characters count
// - create a keys and values array of count
// - filter over the keys array with index
//   - if the current idx of the vlaues array is 1, keep this key
// - return the filtered keys array

function filterDuplicates(array) {
  let set = new Set(array);
  array = Array.from(set);
  return array;
}

function countUniqueBooks(bookshelf, bookend) {
  let books = [];
  let collectBooks = false;

  bookshelf.split('').forEach(char => {
    if (char === bookend) {
      collectBooks = toggleCollectBooks(collectBooks);
    } else if (collectBooks) {
      books.push(char);
    }
  });

  let uniqueBooks = filterDuplicates(books);
  return uniqueBooks.length;
}

console.log(countUniqueBooks("", "Z")); // 0
console.log(countUniqueBooks("ZzdefcZ", "Z")); // 5
console.log(countUniqueBooks("$AA$BBCATT$C$$B$", "$")); // 3
console.log(countUniqueBooks("ZZABCDEF", "Z")); // 0
console.log(countUniqueBooks("AZYWABBCATTTA", "A")); // 4
// 1st bookend group: "AZYWA" : 3 unique books: "Z", "Y", "W"
// 2nd bookend group: "ATTTA": 1 unique book: "T"
// "ABBCA" not included since the first "A" was used in the 1st bookend group.

// Done at 40 mins
```

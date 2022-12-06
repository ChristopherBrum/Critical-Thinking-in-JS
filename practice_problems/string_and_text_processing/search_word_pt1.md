# Search Word Part 1

```js
// Write a function that takes two arguments, a word and a string of text, and returns an integer representing the number of times the word appears in the text.

// You may assume that the word and text inputs will always be provided, and that all word breaks are spaces. Thus, some words will include punctuation such as periods and commas.

/*
Input: 2 strings, a word and a string of text
- a 'word' and 'text' will always be supplied to the function
- the 'text' will consist of a number of 'words' that are delimited by are a single space
- some words within the 'text will contain punctuation 

Output: a number
- the number represents the number of times that the given 'word' appears in the 'text'

Explicit Rules:
- write a function that takes two words: a 'word' and a string of 'text'
- return the number of times that the 'word' is found in the 'text'

Implicit Rules:
- case insensitive when searching for occurrences of the word

Questions:
- do we consider the word to be case sensitive?
- does it count if the word is found within a larger word in the text?

DS:
- splitting the text into an array of words may be the appropriate solution
- we can also use regex to return an array of the occurrences of the word

Algo:
--> function --> searchWord(string, string) --> number
  - match all of the instances of 'word' within 'text' case-insensitively
  - return the length of the matched array
*/

function searchWord(word, text) {
  let regex = new RegExp(`\\b${word}\\b`, 'gi');
  let matches = text.match(regex);

  return matches?.length || 0
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));      // 3
console.log(searchWord('qui', text));      // should return 4, NOT 13
console.log(searchWord('zzz', text));      // 0
```

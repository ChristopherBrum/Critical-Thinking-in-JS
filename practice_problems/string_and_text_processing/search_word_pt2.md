# Search Word Part 2

```js
// The function from the previous exercise returns the number of occurrences of a word in some text. Although this is useful, there are also situations in which we just want to find the word in the context of the text.

// For this exercise, write a function that takes a word and a string of text as arguments, and returns the text with every instance of the word highlighted. To highlight a word, enclose the word with two asterisks ('**') on each side and change every letter of the word to uppercase (e.g., '**HIGHLIGHTEDWORD**').

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

/*
Input: 2 strings, a word and a string of text
- a 'word' and 'text' will always be supplied to the function
- the 'text' will consist of a number of 'words' that are delimited by are a single space
- some words within the 'text will contain punctuation 

Output: a number
- the number represents the number of times that the given 'word' appears in the 'text'

Explicit Rules:
- write a function that takes two words: a 'word' and a string of 'text'
- return the text with all occurrences of the word highlighted
- highlighted means all of the letters of the word are capitalized and there are double asterisks '**' prepended and appended to the word

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
  - split the given string into an array of words delimited by a blank space
  - map over the array of 'textWords' 
    - if the current word matches the 'word' case insensitively
      - upcase the string and prepend/append a double asterisk, then return
    - otherwise
      - return the current word
  - join the transformed array and return
*/

function searchWord(word, text) {
  return text.split(' ')
             .map(currentWord => {
               if (currentWord.toLowerCase() === word.toLowerCase()) {
                 return '**' + currentWord.toUpperCase() + '**';
               } else {
                 return currentWord;
               }
             }).join(' ');
}

// ALTERNATE SOLUTION

function searchWord(word, text) {
  let regex = new RegExp(`\\b${word}\\b`, 'gi');
  let highlight = '**' + word.toUpperCase() + '**';
  return text.replace(regex, highlight); 
}

let expectedOutput = "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

console.log(searchWord('sed', text) === expectedOutput);
```

# Longest Sentence

```js
let longText1 = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

let longText2 = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced.';

/*
Write a program that determines the sentence with the most words in some text. Sentences may end with periods (.), exclamation points (!), or question marks (?). Sentences always begin with a word character. You should treat any sequence of characters that are not spaces or sentence-ending characters, as a word. Log the longest sentence and its word count to the console. Pay attention to the expected output. Note that this problem is about manipulating and processing strings. As such, every detail about the string matters (e.g., case, punctuation, tabs, spaces, etc.).

Problem:
Explicit:
- write a function that takes one string argument
- the function should find the longest sentence within the given string
  - a sentence is delimited by periods, exclamation marks, or question marks
  - sentences always begin with a word character
- any sequence of characters that are not empty spaces or sentence ending characters will be treated as a word
- log the longest sentence and its word count to the console.
- all string related detail is important (e.g., case, punctuation, tabs, spaces, etc.).

Implicit:
- logging the word count will be in this format: 
  - The longest sentence has __ words.
- all characters except empty spaces and sentence ending characters are valid word characters

DS:
Input: 1 string
Output: longest sentence of given string, and word count logged to the console
Intermediate:
- numbers for determining the word count 
- splitting string into an array of sentences
- splitting sentences into an array of words

Goal: create a function that takes a string as an argument. Find the longest sentence within the string and log to the console. Log the word count to the console

Abstractions:
- map over the array of sentences to create a hash with a words array and a word count
- sort the hash by word count to find longest sentence

Algo:
--> function --> longestSentence(string) --> log 2 strings to console (side effects)
  - split the given string into an array of strings (sentences)
    - a sentence always starts with a word character
    - a sentence always ends with . ! ?
  - map over sentences
    - declare an empty object (sentenceInfo)
    - set sentence to the 'text' property on 'sentenceInfo'
    - split 'text' into words delimited by an empty space
    - find the length of 'words' and set to the 'wordCount' property on sentenceInfo
    - return object
  - sort the sentences by word count
  - find sentence with longest word count
  - log 'text' to console
  - log wordCount interpolated into: 'The longest sentence has __ words.'
*/

function longestSentence(text) {
  let sentences = text.match(/\w[^.!?]*(\.|\!|\?)/g)
  
  sentences = sentences.map(sentence => {
                          let sentenceInfo = {};
                          sentenceInfo.text = sentence;
                          sentenceInfo.count = sentence.split(' ').length;
                          return sentenceInfo;
                        });

  sentences.sort((sentenceA, sentenceB) => sentenceB.count - sentenceA.count);
  
  let longest = sentences[0];
  console.log(longest.text);
  console.log(`The longest sentence has ${longest.count} words.`);
}

longestSentence(longText1);

// console output
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

// The longest sentence has 86 words.


// Assuming the last sentence is removed:

longestSentence(longText2);

// console output
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

// The longest sentence has 30 words.

```

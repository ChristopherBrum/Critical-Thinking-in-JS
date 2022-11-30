# Sentiment Analysis 1

```js
let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';
/* 
Problem:
Explicit Rules:
- write a function that takes one string as an argument
- the function should perform sentiment analysis on the given test
- it will determine whether the given text is positive, neutral, or negative based on the number of positive or negative words in the text
- positive and negative words given as arrays

Implicit Rules:
- the function will output a message that shows
  - the number of positive words
  - the positive words used
  - the number of negative words
  - the negative words used
  - the sentiment of the given text

DS:
Input: A string
Output: A series of console outputs
Intermediate:
- splitting the given text into an array of words (?)
- using RegEx to match positive/negative words
- booleans for comparisons

Goal: Create a function that takes a body of text as an argument, identify the positive and negative words used and determine the sentiment of the text

Abstractions:
- iteration to collect all positive and negative words

Algo:
- declare positives and negatives variables to empty arrays
- split the given text into an array of strings delimited by whitespace
- iterate through the array
  - if the current word is in the positive words arrays, add to positive
  - if the current word is in the negative words arrays, add to negative

// - declare positiveMatches and negativeMatches variables to empty arrays
// - iterate over the length of the positive and negative words arrays
//   - find all matches of the current element from the positive words array
//     - push the matches to the positives array
//   - find all matches of the current element from the negative words array
//     - push the matches to the negatives array

- log the positive words total (array length)
- log the individual and unique positive words
- log the negative words total (array length)
- log the individual and unique negative words
- subtract the length of the negative matches from positive matches
- log whether the texts sentiment is pos, neg, or neutral
*/

let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

function sentiment(text) {
  let words = text.toLowerCase().match(/[a-z']+/g);

  let positives = words.filter(word => positiveWords.indexOf(word) >= 0);
  let negatives = words.filter(word => negativeWords.indexOf(word) >= 0);

console.log(`There are ${positives.length} positive words in the text.`);
console.log(`Positive sentiments: ${positives.join(', ')}.`);

console.log(`There are ${negatives.length} negative words in the text.`);
console.log(`Negative sentiments: ${negatives.join(', ')}.`);

let sentiment;
if (positives.length > negatives.length) {
  sentiment = 'Positive'
} else if (positives.length < negatives.length) {
  sentiment = 'Negative'
} else if (positives.length === negatives.length) {
  sentiment = 'Neutral'
}

console.log(`The sentiment of the text is ${sentiment}.`);
}

sentiment(textExcerpt);
// console output
// There are 5 positive words in the text.
// Positive sentiments: fortune, dream, respect, love, resolution

// There are 6 negative words in the text.
// Negative sentiments: die, heartache, die, death, weary, death

// The sentiment of the text is Negative.
```

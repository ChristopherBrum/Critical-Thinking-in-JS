# Study Guide

## Understand the Problem

**Purpose**: Formulate an understanding of what is required based on all available information.

- Restate the problem in your own words -> translate into a set of *definitions* and *rules*
- Ask clarifying questions
- Extract any explicit rules or requirements into a clear format that you can refer back to
- Describe any implicit rules shown in the examples using computational language
- Make notes about anything you already know about the problem (i.e. from an external source) into a clear set of rules/requirements
- Define any important terms or concepts that are given in the problem description

## Examples and Test Cases

**Purpose**: Help to understand the problem and verify your solution

- *Happy paths* -> use any requirements noted above to produce obvious results using standard input.
- *Edge Cases* -> Input that doesn't conform to what we expect, empty input, boundary conditions, repeat or duplicate values, data-type specific considerations. Ask clarifying questions to determine anything not defined in the requirements
- *Failure cases / bad input* -> Validating input and responding to bad input.

### Test Cases

- What types of data is the function expected to handle? 
- Data Type-Specific Concerns:
  - *Numbers* -> Watch out for `0`, negative numbers, fractional vs integer values, and special values (`NaN`, `Infinity`)
  - *Strings* -> Case sensitive vs case insensitive, what characters are and are not allowed, define ambiguous terms (i.e. "word", "sentence"), what to do with empty string?
  - *Arrays / Objects* -> What kind of data can the array contain? Can we assume we have no sparse arrays or arrays with object properties? How to handle an empty array?
- What is "valid" input? How do we handle "invalid" input?
  - Handle cases where arguments are omitted.
  - Handle cases where arguments are in a different order.
- Include a test case for each requirement in the breakdown of the rules.
  - Conditional requirements should cover both sides of the condition.
  - Don't forget about edge cases/boundary areas.

## Data Structures

**Purpose**: Formulate a plan for how to represent data from input to output, representing the rules/requirements as data.

- *String* -> Good for when you want to utilize Regex for operations like removing, replacing, or matching characters
- *Array* ->
  - Iteration processing abstractions
  - Utilizing an index number, or needing ordered data
  - Working with a list
- *Object* ->
  - Representing problem rules as data
  - Working with a lookup table or dictionary
  - Parsing data for more efficient access
- *Number* ->
  - Math operations
  - Keep in mind the advantages of using numbers as strings (i.e. when dealing with a series of digits)
- *Compound Data Structures* ->
  - Array of arrays -> good for x-axis, y-axis coordinate systems
  - Hash with array/object values

## Algorithm

**Purpose**: Get a map of the steps you are going to take to solve the problem, from input to output.

- Use the language of your chosen data structure
- Break bigger problems into smaller problems
- Come up with 1-2 sentence solution -> high-level abstractions can be broken down into smaller sub-steps
- Too much detail right away leads to logical mistakes

## Code

### Arrays and List Processing

| Abstraction         | Use Case                                                 | Returns      | Array Methods           | Callback Fn Args          |
| ------------------- | -------------------------------------------------------- | ------------ | ----------------------- | ------------------------- |
| Iteration           | Perform an operation on each element in an Array         | `undefined`  | `forEach`               | `value`, `index`, `array` |
| Filtering/Selection | Select a subset of elements                              | new Array    | `filter`                | `value`, `index`, `array` |
| Transformation      | Compute a new value from each element                    | new Array    | `map`                   | `value`, `index`, `array` |
| Ordering            | Rearrange elements by sorting the Array in place         | sorted Array | `sort`                  | `item1`, `item2`          |
| Reducing/Folding    | Iteratively compute a result based on all element values | single value | `reduce`, `reduceRight` | `accumulator`, `element`  |
| Interrogation       | Determine whether an Array's elements meet a condition   | boolean      | `every`, `some`         | `value`, `index`, `array` |

### Strings and RegExp

- `String` -> built in `search`, `match`, `replace` methods
- `RegExp` -> built in `exec` and `test` methods, opportunity to construct `RegExp` object from given string.

#### RegExp Quick Guide

| RegExp     | Meaning                                                   |
| ---------- | --------------------------------------------------------- |
| `[abc]`    | A single character of: `a`, `b`, or `c`                   |
| `[^abc]`   | Any single character *except*: `a`, `b`, or `c`           |
| `[a-z]`    | Any single character in the range `a-z`                   |
| `[a-zA-Z]` | Any single character in the range `a-z` or `A-Z`          |
| `/[a-z]/i` | Any single character in the range `a-z` case insensitive  |
| `^`        | Start of line                                             |
| `$`        | End of line                                               |
| `\A`       | Start of string                                           |
| `\z`       | End of string                                             |
| `.`        | Any single character                                      |
| `\s`       | Any whitespace character                                  |
| `\S`       | Any non-whitespace character                              |
| `\d`       | Any digit                                                 |
| `\D`       | Any non-digit                                             |
| `\w`       | Any word character (letter, digit, underscore)            |
| `\W`       | Any non-word character                                    |
| `\b`       | Any word boundary                                         |
| `(...)`    | Capture everything enclosed                               |
| `(a\|b)`   | `a` or `b`                                                |
| `a?`       | Zero or one of `a`                                        |
| `a*`       | Zero or more of `a`                                       |
| `a+`       | One or more of `a`                                        |
| `a{3}`     | Exactly 3 of `a`                                          |
| `a{3, }`   | 3 or more of `a`                                          |
| `a{3, 6}`  | Between 3 and 6 of `a`                                    |
| `/a/g`     | Global match - match all instances of `a` in given string |

### Tips

- Working code is better than fancy code
- Use the REPL to check any assumptions you have
- Run your code often to check lower level abstractions
- Debug locally and test building block before you put them together
- **Test, test, test, test, test**
- It's okay to rework the Algorithm once you start coding.

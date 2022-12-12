# Stack Machine Interpretation

```js
/*
A stack is a list of values that grows and shrinks dynamically. A stack may be implemented as an Array that uses two Array methods: Array.prototype.push and Array.prototype.pop.

A stack-and-register programming language is a language that uses a stack of values. Each operation in the language operates on a register, which can be thought of as the current value. The register is not part of the stack. An operation that requires two values pops the topmost item from the stack (i.e., the operation removes the most recently pushed value from the stack), operates on the popped value and the register value, and stores the result back in the register.

Consider a MULT operation in a stack-and-register language. It removes the value from the stack, multiplies the removed stack value with the register value, then stores the result back in the register. For example, if we start with a stack of [3, 6, 4] (where 4 is the topmost item in the stack) and a register value of 7, the MULT operation mutates the stack to [3, 6] (the 4 is removed), and the result of the multiplication, 28, is left in the register. If we do another MULT at this point, the stack is mutated to [3], and the register is left with the value 168.

Write a function that implements a miniature stack-and-register-based programming language that has the following commands (also called operations or tokens):

n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
POP : Remove the topmost item from the stack and place it in the register.
PRINT : Print the register value.
All operations are integer operations (which is only important with DIV and REMAINDER).

Programs will be supplied to your language function via a string argument. Your function may assume that all arguments are valid programs — i.e., they will not do anything like trying to pop a non-existent value from the stack, and they will not contain any unknown tokens.

Initialize the stack and register to the values [] and 0, respectively.

--------------------------------------------------------

Input: 1 string, represents a string of commands and values
- the string can always be considered a valid command program

Output: log the number values according to the input command
- the logged output will be determined by the specific commands of the input string

Rules:
Explicit:
- write a function that takes one string argument
- the argument will be a combination of number values(in string form) and command words
- take the number values and perform the specified operations
- this should mimic stack and register data structure
  - use Array.prototype.push and Array.prototype.pop to perform operations on our array (stack) and number value (register)

  
Implicit:
- the given string command will consist of number values and word values that correspond to a command/behavior
- all input strings will be valid
- each number and word value will be separated by a space character
- number values can be positive or negative
- number values appear to all be whole numbers
- only inputs that contain a command to output a value will have a value logged top the console.

Example:
  given --> '5 PUSH 3 MULT PRINT'
  
  default: stack = [], register = 0
  command --> 5 (places this value in the register)
  command --> PUSH (pushed the register value to the end of the stack, leaves value in register)
  command --> 3 (places the value in the register)
  command --> MULT (pop value from stack and multiply is by the register, store result in register)
  command --> print (print the register value)
  
  output --> 15
  
  DS:
  - given string will be split into array of words delimited by space character
  
Commands:
  n: Place a value, n, in the register. Do not modify the stack.
  PUSH: Push the register value onto the stack. Leave the value in the register.
  ADD: Pop a value from the stack and add it to the register value, storing the result in the register.
  SUB: Pop a value from the stack and subtract it from the register value, storing the result in the register.
  MULT: Pop a value from the stack and multiply it by the register value, storing the result in the register.
  DIV: Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
  REMAINDER: Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
  POP: Remove the topmost item from the stack and place it in the register.
  PRINT: Print the register value.
  

Algo:
- declare 'stack' var to an empty array
- declare 'register' var to 0
- split given string into array of words delimited by spaces (commands)
- iterate over the array of commands
  - match each command
  - perform the expected behavior
*/

function minilang(statement) {
  let stack = [], register = 0;
  
  let commands = statement.split(' ');
  for (let command of commands) {
    if (/\d/.test(command)) {
      register = Number(command);
    } else {
      switch (command) {
        case 'PUSH':
          stack.push(register);
          break;
        case 'ADD':
          register += stack.pop();
          break;
        case 'SUB':
          register -= stack.pop();
          break;
        case 'MULT':
          register *= stack.pop();
          break;
        case 'DIV':
          register = Math.floor(register / stack.pop());
          break;
        case 'REMAINDER':
          register = Math.floor(register % stack.pop());
          break;
        case 'POP':
          register = stack.pop();
          break;
        case 'PRINT':
          console.log(register);
          break;
      }
    }
  }
}

minilang('PRINT'); // 0
minilang('5 PUSH 3 MULT PRINT'); // 15
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');// 5, 3, 8
minilang('5 PUSH POP PRINT');// 5
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'); // 5, 10, 4, 7
minilang('3 PUSH PUSH 7 DIV MULT PRINT'); // 6
minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT'); // 12
minilang('-3 PUSH 5 SUB PRINT'); // 8
minilang('6 PUSH'); // (nothing is printed because the `program` argument has no `PRINT` commands)
```

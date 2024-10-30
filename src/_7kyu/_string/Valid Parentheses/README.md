# Solution for problem:

[Valid Parentheses](https://www.codewars.com/kata/539de388a540db7fec000642)

**Description:**

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

### Examples

```plaintext
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
```

### Constraints

0 <= length of input <= 100

All inputs will be strings, consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid), and will be tested.
For languages with mutable strings, the inputs should not be mutated.

Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you!

### Sample Tests

```plaintext
const chai = require("chai");
const assert = chai.assert;

function runTest(expected, input) {
  assert.strictEqual(validParentheses(input), expected, `Test failed for input: "${input}"`);
}

describe("Sample tests", function() {
  it("Should return true for valid parentheses", function() {
    runTest(true, "()");
    runTest(true, "((()))");
    runTest(true, "()()()");
    runTest(true, "(()())()");
    runTest(true, "()(())((()))(())()");
  });

  it("Should return false for invalid parentheses", function() {
    runTest(false, ")(");
    runTest(false, "()()(");
    runTest(false, "((())");
    runTest(false, "())(()");
    runTest(false, ")()");
    runTest(false, ")");
  });

  it("Should return true for empty strings", function() {
    runTest(true, "");
  });
});

```

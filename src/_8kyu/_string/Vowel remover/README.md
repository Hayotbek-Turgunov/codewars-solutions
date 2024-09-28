# Solution for problem:

[Short Long Short](https://www.codewars.com/kata/50654ddff44f800200000007)

## Instructions

**Description:**  
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

### Examples

```plaintext
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
```

don't worry about uppercase vowels
y is not considered a vowel for this kata

### Sample Tests

```plaintext
const strictEqual = require('chai').assert.strictEqual;

function doTest (input, expected) {
  const actual = shortcut(input);
  strictEqual(actual, expected, `for "${input}":\n`);
}

describe("Sample Tests", () => {
  it("Should pass sample tests", () => {
    doTest('hello', 'hll');
    doTest('how are you today?', 'hw r y tdy?');
    doTest('complain', 'cmpln');
    doTest('never', 'nvr');
  });
});
```

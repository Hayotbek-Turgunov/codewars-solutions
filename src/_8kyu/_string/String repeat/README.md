# Solution for problem:

[String repeat](https://www.codewars.com/kata/57a0e5c372292dd76d000d7e)

## Instructions

**Description:**  
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

### Examples

```plaintext
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
```

### Sample Tests

```plaintext
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", function() {
  it ("Basic tests", function() {
    assert.strictEqual(repeatStr(3, "*"), "***");
    assert.strictEqual(repeatStr(5, "#"), "#####");
    assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
  });
});
```

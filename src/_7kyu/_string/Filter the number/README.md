# Solution for problem:

[Filter the number](https://www.codewars.com/kata/55b051fac50a3292a9000025)

**Description:**

### Filter the number

Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

### Task

Your task is to return a number from a string.

### Details

You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

StringsFundamentals

### Sample Tests

```plaintext
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample Tests", function() {
  it("should pass some fixed tests", function() {
    assert.strictEqual(filterString("123"), 123, `For the input "123"`);
    assert.strictEqual(filterString("a1b2c3"), 123, `For the input "a1b2c3"`);
    assert.strictEqual(filterString("aa1bb2cc3dd"), 123, `For the input "aa1bb2cc3dd"`);
  });
});
```

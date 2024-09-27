# Solution for problem:

[ All Star Code Challenge #18](https://www.codewars.com/kata/5865918c6b569962950002a1)

## Instructions

**Description:**  
Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

If no occurrences can be found, a count of 0 should be returned.

```plaintext
  ("Hello", 'o')  =>  1
  ("Hello", 'l')  =>  2
   ("", 'z')       =>  0
```

### Sample Tests

```plaintext
  const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(strCount('Hello', 'o'), 1);
    assert.strictEqual(strCount('Hello', 'l'), 2);
    assert.strictEqual(strCount('',      'z'), 0);
  });
});

```

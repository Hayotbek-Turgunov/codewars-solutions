# Solution for problem:

[Number of Decimal Digits](https://www.codewars.com/kata/58fa273ca6d84c158e000052)

**Description:**

Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.

### Sample Tests

```plaintext
const {assert} = require('chai');

describe('Sample Tests', function() {
  const tests = [
    [0, 1],
    [9, 1],
    [66, 2],
    [12345, 5],
    [128685, 6],
    [9876543210, 10],
    [9007199254740991, 16],
  ];

  for (let [n, expected] of tests) {
    it(`${n}`, function() {
      assert.strictEqual(digits(n), expected);
    });
  }
});
```

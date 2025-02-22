# Solution for problem:

[Ones and Zeros](https://www.codewars.com/kata/578553c3a1b8d5c40300037c)

## Instructions

**Description:**
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

### Example

```plaintext
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
```

However, the arrays can have varying lengths, not just limited to 4.

### Sample Tests

```plaintext
const { assert } = require('chai');

describe('Ones and Zeros', () => {
  it('Example tests', () => {
    assert.strictEqual(binaryArrayToNumber([0, 0, 0, 1]), 1, 'binaryArrayToNumber([0, 0, 0, 1])');
    assert.strictEqual(binaryArrayToNumber([0, 0, 1, 0]), 2, 'binaryArrayToNumber([0, 0, 1, 0])');
    assert.strictEqual(binaryArrayToNumber([1, 1, 1, 1]), 15, 'binaryArrayToNumber([1, 1, 1, 1])');
    assert.strictEqual(binaryArrayToNumber([0, 1, 1, 0]), 6, 'binaryArrayToNumber([0, 1, 1, 0])');
  });
});
```

# Solution for problem:

[ Sum of differences in array](https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e)

## Instructions

**Description:**  
Your task is to sum the differences between consecutive pairs in the array in descending order.

### Example

```plaintext
[2, 1, 10]  -->  9
```

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

### Sample Tests

```plaintext
1
const { assert } = require('chai');
2
​
3
describe('Sample tests', () => {
4
​
5
  it("sumOfDifferences([1, 2, 10]", function() {
6
    assert.strictEqual(sumOfDifferences([1, 2, 10]), 9);
7
  });
8
​
9
  it("sumOfDifferences([-3, -2, -1])", function() {
10
    assert.strictEqual(sumOfDifferences([-3, -2, -1]), 2);
11
  });
12
});
```

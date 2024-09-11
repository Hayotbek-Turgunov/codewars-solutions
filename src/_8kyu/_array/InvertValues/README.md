# Solution for problem:

[Invert values](https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad)

## Instructions

**Description:**

Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

You can assume that all values are integers. Do not mutate the input array.

## Examples

```plaintext
[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
```

## Sample Tests

```plaintext
describe("Invert array values",() => {
  const norm = arr => arr.map(n => n === -0 ? 0 : n);
  it("Basic Tests", () => {
    assert.deepEqual(norm(invert([1,2,3,4,5])), [-1,-2,-3,-4,-5]);
    assert.deepEqual(norm(invert([1,-2,3,-4,5])), [-1,2,-3,4,-5]);
    assert.deepEqual(norm(invert([])), []);
    assert.deepEqual(norm(invert([0])), [0]);
  });
});
```

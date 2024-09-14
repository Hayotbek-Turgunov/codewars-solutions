# Solution for problem:

[Remove duplicates from list](https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118)

**Description:**
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

### Examples:

```plaintext
Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]
```

### Sample Tests

```plaintext
describe("Sample Tests", () => {
  it("test", () => {
    assert.deepEqual(distinct([1]), [1]);
    assert.deepEqual(distinct([1,2]), [1,2]);
    assert.deepEqual(distinct([1,1,2]), [1,2]);
  });
});
```

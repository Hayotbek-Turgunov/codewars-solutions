# Solution for problem:

[Sum of Odd Cubed Numbers](https://www.codewars.com/kata/580dda86c40fa6c45f00028a)

## Instructions

**Description:**

Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

### Sample Tests

```plaintext
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(cubeOdd([1, 2, 3, 4]), 28);
Test.assertEquals(cubeOdd([-3,-2,2,3]), 0);
Test.assertEquals(cubeOdd(["a",12,9,"z",42]), undefined);
  });
});
```

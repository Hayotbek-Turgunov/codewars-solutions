# Solution for problem:

[Most digits](https://www.codewars.com/kata/58daa7617332e59593000006)

**Description:**

Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

### Sample Tests

```plaintext
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(findLongest([1, 10, 100]), 100)
Test.assertEquals(findLongest([9000, 8, 800]), 9000)
Test.assertEquals(findLongest([8, 900, 500]), 900)
  });
});
```

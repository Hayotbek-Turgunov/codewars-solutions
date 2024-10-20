# Solution for problem:

[String ends with?](https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d)

**Description:**

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

### Examples:

```plaintext
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
```

### Sample Tests

```plaintext
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(solution('abcde', 'cde'), true)
Test.assertEquals(solution('abcde', 'abc'), false)
});
});
```

# Solution for problem:

[Get number from string](https://www.codewars.com/kata/57a37f3cbb99449513000cd8)

## Instructions

**Description:**  
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

```plaintext
getNumberFromString(s)
```

### Sample Tests

```plaintext
const Test = require('@codewars/test-compat');

describe("Basic tests", function() {
  it("should work as expected", function() {
    Test.assertSimilar(getNumberFromString("1"), 1);
    Test.assertSimilar(getNumberFromString("123"), 123);
    Test.assertSimilar(getNumberFromString("this is number: 7"), 7);
  });
});
```

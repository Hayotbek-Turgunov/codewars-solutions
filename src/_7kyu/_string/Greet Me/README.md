# Solution for problem:

[Get the Middle Character](https://www.codewars.com/kata/56747fd5cb988479af000028)

**Description:**

Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

### Example:

```plaintext
"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
```

### Sample Tests

```plaintext
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message)
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertSimilar(actual, expected, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message)
Test.assertEquals(greet('riley'), 'Hello Riley!');
  });
});

```

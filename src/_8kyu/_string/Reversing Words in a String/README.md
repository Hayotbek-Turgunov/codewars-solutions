# Solution for problem:

[Reversing Words in a String](https://www.codewars.com/kata/57a55c8b72292d057b000594)

**Description:**
You need to write a function that reverses the words in a given string. Words are always separated by a single space.

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

### Example (Input --> Output)

```plaintext
"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
```

Happy coding!

### Sample Tests

```plaintext
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(reverse('I am an expert at this'), 'this at expert an am I');
    assert.strictEqual(reverse('This is so easy'), 'easy so is This');
    assert.strictEqual(reverse('no one cares'), 'cares one no');
    assert.strictEqual(reverse(''), '');
    assert.strictEqual(reverse('CodeWars'), 'CodeWars');
  })
})
```

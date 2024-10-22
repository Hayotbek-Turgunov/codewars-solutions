# Solution for problem:

[Find the capitals](https://www.codewars.com/kata/539ee3b6757843632d00026b)

**Description:**

Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

### Example (Input --> Output)

```plaintext
"CodEWaRs" --> [0,3,4,6]
```

### Sample Tests

```plaintext
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(capitals('CodEWaRs'), [0,3,4,6] );
  });
});
```

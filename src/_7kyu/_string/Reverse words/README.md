# Solution for problem:

[Reverse words](https://www.codewars.com/kata/5259b20d6021e9e14c0010d4)

**Description:**

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

### Example

```plaintext
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
```

### Sample Tests

```plaintext
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    assert.strictEqual(reverseWords('apple'), 'elppa');
    assert.strictEqual(reverseWords('a b c d'), 'a b c d');
    assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  });
});
```

# Solution for problem:

[Beginner Lost WithoutAMap](https://www.codewars.com/kata/57f781872e3d8ca2a000007e/)

## Instructions

**Description:**  
Given an array of integers, return a new array with each value doubled.

### Examples

```plaintext
[1, 2, 3] --> [2, 4, 6]
```

### Sample Tests

```plaintext
    const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", ()=>{
  it("Fixed tests", () => {
    assert.deepEqual(maps([1, 2, 3]), [2, 4, 6]);
    assert.deepEqual(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
    assert.deepEqual(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
  });
});
```

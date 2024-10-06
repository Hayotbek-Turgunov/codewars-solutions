# Solution for problem:

[No oddities here](https://codewars.com/kata/51fd6bc82bc150b28e0000ce)

## Instructions

**Description:**

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

### Simple Tests

```plaintext

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual( noOdds( [0,1] ), [0] )
    assert.deepEqual( noOdds( [0,1,2,3] ), [0,2] )
    })
  })
```

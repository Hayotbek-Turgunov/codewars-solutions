# Solution for problem:

[Row Weights](https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9)

## Instructions

**Description:**
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49]) ==> return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80]) ==> return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80]) ==> return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

### Sample Tests

```plaintext
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(rowWeights([80]), [80,0]);
    assert.deepEqual(rowWeights([100,50]), [100,50]);
    assert.deepEqual(rowWeights([50,60,70,80]), [120,140]);
    assert.deepEqual(rowWeights([13,27,49]), [62,27]);
    assert.deepEqual(rowWeights([70,58,75,34,91]), [236,92]);
    assert.deepEqual(rowWeights([29,83,67,53,19,28,96]), [211,164]);
    assert.deepEqual(rowWeights([0]), [0,0]);
    assert.deepEqual(rowWeights([100,51,50,100]), [150,151]);
    assert.deepEqual(rowWeights([39,84,74,18,59,72,35,61]), [207,235]);
    assert.deepEqual(rowWeights([0,1,0]), [0,1]);
  })
})
```

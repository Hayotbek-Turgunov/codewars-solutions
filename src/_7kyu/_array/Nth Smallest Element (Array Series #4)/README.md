# Solution for problem:

[Nth Smallest Element (Array Series #4)](https://www.codewars.com/kata/5a512f6a80eba857280000fc)

## Instructions

**Description:**

Introduction and warm-up (highly recommended): Playing With Lists/Arrays Series

### Task

Given an array/list of integers, find the Nth smallest element in the array.

Notes
Array/list size is at least 3.
Array/list's numbers could be a mixture of positives , negatives and zeros.
Repetition in array/list's numbers could occur, so don't remove duplications.

### Input >> Output Examples

```plaintext
arr=[3,1,2]            n=2    ==> return 2
arr=[15,20,7,10,4,3]   n=3    ==> return 7
arr=[2,169,13,-5,0,-1] n=4    ==> return 2
arr=[2,1,3,3,1,2],     n=3    ==> return 2
```

### Sample Tests

```plaintext
const { assert } = require('chai');

describe("Basic tests",() =>{
  it('Basic tests', () => {
    assert.strictEqual(nthSmallest(                 [3,1,2], 2),  2);
    assert.strictEqual(nthSmallest(        [15,20,7,10,4,3], 3),  7);
    assert.strictEqual(nthSmallest(          [-5,-1,-6,-18], 4), -1);
    assert.strictEqual(nthSmallest([-102,-16,-1,-2,-367,-9], 5), -2);
    assert.strictEqual(nthSmallest(      [2,169,13,-5,0,-1], 4),  2);
    assert.strictEqual(nthSmallest(           [2,1,3,3,1,2], 3),  2);
  });
});
```

# Solution for problem:

[Sum Mixed Array](https://www.codewars.com/kata/57eaeb9578748ff92a000009)

**Description:**
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

```plaintextdescribe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
    assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
    assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);
  })
});
```

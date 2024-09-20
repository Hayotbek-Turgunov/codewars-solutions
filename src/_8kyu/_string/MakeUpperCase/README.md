# Solution for problem:

[MakeUpperCase](https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7)

## Instructions

**Description:**  
Write a function which converts the input string to uppercase.

### Sample Tests

```plaintext
ple Tests
1
const { assert } = require('chai');
2
​
3
describe("Basic Tests", function(){
4
  it("should pass the basic tests", function(){
5
    assert.strictEqual(makeUpperCase(""),           "");
6
    assert.strictEqual(makeUpperCase("hello"), "HELLO");
7
    assert.strictEqual(makeUpperCase("Hello"), "HELLO");
8
    assert.strictEqual(makeUpperCase("HELLO"), "HELLO");
9
  });
10
});
```

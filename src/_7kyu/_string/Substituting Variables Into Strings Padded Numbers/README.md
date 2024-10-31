# Solution for problem:

[Substituting Variables Into Strings: Padded Numbers](https://www.codewars.com/kata/51c89385ee245d7ddf000001)

**Description:**
Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

## Example:

```plaintext
solution(5) // should return "Value is 00005"
```

### Sample Tests

```plaintext
const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(solution(5),"Value is 00005")
    assert.strictEqual(solution(1204),"Value is 01204")
    assert.strictEqual(solution(109),"Value is 00109")
    assert.strictEqual(solution(0),"Value is 00000")
    })
  })
```

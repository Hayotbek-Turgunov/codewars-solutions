# Solution for problem:

[ Basic Training: Add item to an Array](https://www.codewars.com/kata/511f0fe64ae8683297000001)

## Instructions

**Description:**
Add the value "codewars" to the websites array.
After your code executes the websites array should == ["codewars"]

The websites array has already been defined for you using the following code:

### example

```plaintext
var websites = [];
```

### Sample Tests

```plaintext
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Checking Content", () => {
  it("Should not be empty", () => {
    assert.isNotEmpty(websites, 'The array is still empty')
  })
  it('Should contain "codewars"', () => {
    assert.include(websites, 'codewars', 'The array does not contain the correct value "codewars"')
  });
  it("Should only contain 1 item", () => {
    assert.lengthOf(websites, 1)
  })
});
```

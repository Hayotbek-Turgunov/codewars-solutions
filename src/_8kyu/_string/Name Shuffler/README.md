# Solution for problem:

[Name Shuffler ](https://www.codewars.com/kata/559ac78160f0be07c200005a)

## Instructions

**Description:**  
Write a function that returns a string in which firstname is swapped with last name.

### Example(Input --> Output)

```plaintext
"john McClane" --> "McClane john"
```

### Sample Tests

```plaintext
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(nameShuffler('john McClane'),'McClane john');
    assert.strictEqual(nameShuffler('Mary jeggins'),'jeggins Mary')
    assert.strictEqual(nameShuffler('tom jerry'),'jerry tom')
  });
});
```

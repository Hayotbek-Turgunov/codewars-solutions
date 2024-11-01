# Solution for problem:

[Add Length](https://www.codewars.com/kata/559d2284b5bb6799e9000047)

## Instructions

**Description:**
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

### Example(Input --> Output)

```plaintext
"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
```

Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.

### Sample Tests

```plaintext
const { assert } = require('chai');
describe("Sample Tests", () => {
  it(`Testing for "apple ban"`, () => {
    const actual = addLength('apple ban');
    assert.isDefined(actual, "You need to return an array. Did you log to the console instead?");
    assert.deepEqual(actual, ["apple 5", "ban 3"]);
  });
  it(`Testing for "you will win"`, () => assert.deepEqual(addLength('you will win'),["you 3", "will 4", "win 3"]));
});
```

# Solution for problem:

[My Language Skills](https://www.codewars.com/kata/5b16490986b6d336c900007d)

## Instructions

**Description:**

You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

Note: the scores will always be unique (so no duplicate values)

### Examples

```plaintext
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
```

### Sample Tests

```plaintext
const Test = require('@codewars/test-compat');

describe("myLanguages", function(){
  it("Fixed tests", function(){
    Test.assertDeepEquals(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}), ["Ruby", "Python"])
    Test.assertDeepEquals(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}), ["Dutch", "Greek", "Hindi"])
    Test.assertDeepEquals(myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}), [])
  });
});
```

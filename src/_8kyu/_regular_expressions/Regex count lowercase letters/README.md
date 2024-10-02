# Solution for problem:

[Regex count lowercase letters](https://www.codewars.com/kata/56a946cd7bd95ccab2000055)

## Instructions

**Description:**  
Your task is simply to count the total number of lowercase letters in a string.

### Examples

```plaintext
"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26
```

### Sample Tests

```plaintext
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(lowercaseCount("abc"), 3);
Test.assertEquals(lowercaseCount("abcABC123"), 3);
Test.assertEquals(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 3);
Test.assertEquals(lowercaseCount(""), 0)
Test.assertEquals(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 0)
Test.assertEquals(lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26);
  });
});
```

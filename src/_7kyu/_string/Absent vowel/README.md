# Solution for problem:

[Absent vowel](https://www.codewars.com/kata/56414fdc6488ee99db00002c)

**Description:**

Your job is to figure out the index of which vowel is missing from a given string:

A has an index of 0,
E has an index of 1,
I has an index of 2,
O has an index of 3,
U has an index of 4.

### Notes:

There is no need for string validation and every sentence given will contain all vowels but one. Also, you won't need to worry about capitals.

### Examples

```plaintext
"John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
"Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"
```

### Sample Tests

```plaintext
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(absentVowel("John Doe hs seven red pples under his bsket"), 0);
Test.assertEquals(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);
  });
});
```
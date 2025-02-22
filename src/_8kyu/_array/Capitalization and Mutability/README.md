# Solution for problem:

[Capitalization and Mutability](https://www.codewars.com/kata/595970246c9b8fa0a8000086)

## Instructions

**Description:**  
Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

The string will always start with a letter and will never be empty.

### Examples:

```plaintext
"hello" --> "Hello"
"Hello" --> "Hello" (the first letter was already capitalized)
"a"     --> "A"
```

### Sample Tests

```plaintext
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar(capitalizeWord('word'), 'Word');
Test.assertSimilar(capitalizeWord('i'), 'I');
Test.assertSimilar(capitalizeWord('glasswear'), 'Glasswear');
  });
});

```

# Solution for problem:

[ Fake Binary ](https://www.codewars.com/kata/57eae65a4321032ce000002d)

## Instructions

**Description:**  
Write a function to split a string and convert it into an array of words.

### Examples

````plaintext
(Input ==> Output):

```plaintext
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
````

## Sample Tests

```plaintext
describe("Basic tests", () => {
it("Testing for fixed tests", () => {
assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
assert.deepEqual(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);
});
});
```

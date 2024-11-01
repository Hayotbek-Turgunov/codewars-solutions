# Solution for problem:

[Count the Monkeys!](https://www.codewars.com/kata/56f69d9f9400f508fb000ba7)

**Description:**
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

### For example(Input --> Output):

```plaintext
10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
```

### Sample Tests

```plaintext
describe("monkeyCount", () => {
  it("should work for fixed tests", () => {
    assert.deepEqual((monkeyCount(5)), [1, 2, 3, 4, 5]);
    assert.deepEqual((monkeyCount(3)), [1, 2, 3]);
    assert.deepEqual((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    assert.deepEqual((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    assert.deepEqual((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });
});
```

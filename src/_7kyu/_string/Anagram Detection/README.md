# Solution for problem:

[Anagram Detection](https://www.codewars.com/kata/529eef7a9194e0cbc1000255)

**Description:**

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

### Examples

```plaintext
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
```

### Sample Tests

```plaintext
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(isAnagram("foefet", "toffee"), true, 'The word "foefet" is an anagram of "toffee"')
    assert.strictEqual(isAnagram("Buckethead", "DeathCubeK"), true, 'The word "Buckethead" is an anagram of "DeathCubeK"')
    assert.strictEqual(isAnagram("Twoo", "WooT"), true, 'The word "Twoo" is an anagram of "WooT"')

    assert.strictEqual(isAnagram("dumble", "bumble"), false, 'Characters do not match for test case "dumble", "bumble"')
    assert.strictEqual(isAnagram("ound", "round"), false, 'Missing characters for test case "ound", "round"')
    assert.strictEqual(isAnagram("apple", "pale"), false, 'Same letters, but different count')
  });
});
```

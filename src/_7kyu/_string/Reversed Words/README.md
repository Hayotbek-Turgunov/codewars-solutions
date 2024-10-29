# Solution for problem:

[Reversed Words](https://www.codewars.com/kata/51c8991dee245d7ddf00000e)

**Description:**

### Happy Holidays fellow Code Warriors!

Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

### Example(Input --> Output):

```plaintext
"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
```

### Sample Tests

```plaintext
const { assert } = require('chai');

describe("reverseWords",function(){
  it("should work for some examples", function(){
    assert.strictEqual(reverseWords("hello world!"                 ),  "world! hello")
    assert.strictEqual(reverseWords("yoda doesn't speak like this" ),  "this like speak doesn't yoda")
    assert.strictEqual(reverseWords("foobar"                       ),  "foobar")
    assert.strictEqual(reverseWords("kata editor"                  ),  "editor kata")
    assert.strictEqual(reverseWords("row row row your boat"        ),  "boat your row row row")
    assert.strictEqual(reverseWords(""                             ),  "")
  });
});

```

# Solution for problem:

[Convert an array of strings to array of numbers](https://www.codewars.com/kata/5783d8f3202c0e486c001d23)

**Description:**

### Oh no!

Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

You need to cast the whole array to the correct type.

Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.

### Sample Tests

```plaintext
const { assert } = require('chai');

describe('Example tests', () => {
  it('Running toNumberArray("1.1","2.2","3.3")...', function() {
    assert.sameOrderedMembers(toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3]);
  });
});
```

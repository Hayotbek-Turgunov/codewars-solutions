# Solution for problem:

[Sort the Gift Code](https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3)

**Description:**

### Happy Holidays fellow Code Warriors!

Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

### Sort the Gift Code

Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

### Examples (Input -- => Output):

```plaintext
"abcdef"                      -- => "abcdef"
"pqksuvy"                     -- => "kpqsuvy"
"zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"
```

```plaintext
const { assert } = require('chai')

describe('sortGiftCode', () => {
  it('Fixed tests', () => {
    assert.strictEqual(sortGiftCode('abcdef'), 'abcdef', "sortGiftCode('abcdef')")
    assert.strictEqual(sortGiftCode('pqksuvy'), 'kpqsuvy', "sortGiftCode('pqksuvy')")
    assert.strictEqual(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz', "sortGiftCode('zyxwvutsrqponmlkjihgfedcba')")
  })
})
```

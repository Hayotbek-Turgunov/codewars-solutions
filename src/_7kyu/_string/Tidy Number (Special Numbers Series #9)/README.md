# Solution for problem:

[Tidy Number (Special Numbers Series #9)](https://www.codewars.com/kata/5a87449ab1710171300000fd)

**Description:**

### Definition

A Tidy number is a number whose digits are in non-decreasing order.

### Task

Given a number, Find if it is Tidy or not .

### Warm-up (Highly recommended)

Playing With Numbers Series

### Notes

Number passed is always Positive .

Return the result as a Boolean

### Input >> Output Examples

tidyNumber (12) ==> return (true)

### Explanation:

The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .

```plaintext
tidyNumber (32) ==> return (false)
```

### Explanation:

The Number's Digits { 3, 2} are not in non-Decreasing Order (i.e) 3 > 2 .

```plaintext
tidyNumber (1024) ==> return (false)
```

### Explanation:

The Number's Digits {1 , 0, 2, 4} are not in non-Decreasing Order as 0 <= 1 .

```plaintext
tidyNumber (13579) ==> return (true)
```

### Explanation:

The number's digits {1 , 3, 5, 7, 9} are in non-Decreasing Order .

tidyNumber (2335) ==> return (true)

### Explanation:

The number's digits {2 , 3, 3, 5} are in non-Decreasing Order , Note 3 <= 3

### Sample Tests

```plaintext
describe("Basic tests",() =>{
  Test.assertEquals(tidyNumber(12),true);
  Test.assertEquals(tidyNumber(102),false);
  Test.assertEquals(tidyNumber(9672),false);
  Test.assertEquals(tidyNumber(2789),true);
  Test.assertEquals(tidyNumber(2335),true);
});
```

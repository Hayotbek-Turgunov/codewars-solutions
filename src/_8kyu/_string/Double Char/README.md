# Solution for problem:

[Double Char](https://www.codewars.com/kata/56b1f01c247c01db92000076)

## Instructions

**Description:**  
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

### Examples (Input -> Output):

```plaintext
    * "String"      -> "SSttrriinngg"
    * "Hello World" -> "HHeelllloo  WWoorrlldd"
    * "1234!_ "     -> "11223344!!__  "
```

### Sample Tests

```plaintext
const Test = require('@codewars/test-compat');
2
​
3
describe("doubleChar", function() {
4
  it("works for some examples", function() {
5
    Test.assertEquals(doubleChar("abcd"), "aabbccdd");
6
    Test.assertEquals(doubleChar("Adidas"), "AAddiiddaass");
7
    Test.assertEquals(doubleChar("1337"), "11333377");
8
    Test.assertEquals(doubleChar("illuminati"), "iilllluummiinnaattii");
9
    Test.assertEquals(doubleChar("123456"), "112233445566");
10
    Test.assertEquals(doubleChar("%^&*("), "%%^^&&**((");
11
  });
12
});
13
​
```

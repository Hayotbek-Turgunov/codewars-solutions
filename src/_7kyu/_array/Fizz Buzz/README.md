# Solution for problem:

[Fizz Buzz](https://www.codewars.com/kata/5300901726d12b80e8000498)

## Instructions

**Description:**
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

```plaintext
fizzbuzz(3) -->  [1, 2, "Fizz"]
```

### Sample Tests

```plaintext
const Test = require('@codewars/test-compat');

describe('Fizzbuzz', function() {
  it('Should fizzify 10 numbers correctly', function() {
    var expected = [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz'];
    Test.assertEquals(JSON.stringify(fizzbuzz(10)), JSON.stringify(expected) , 'Fails with 10 numbers!');
  });
});
```

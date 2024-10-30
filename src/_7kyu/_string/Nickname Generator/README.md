# Solution for problem:

[Nickname Generator](https://www.codewars.com/kata/593b1909e68ff627c9000186)

**Description:**

Nickname Generator

Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters

```plaintext
nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"
```

If the 3rd letter is a vowel, return the first 4 letters.

```plaintext
nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"
```

If the string is less than 4 characters, return "Error: Name too short".

### Notes:

Vowels are "aeiou", so discount the letter "y".
Input will always be a string.
Input will always have the first letter capitalised and the rest lowercase (e.g. Sam).
The input can be modified

### Sample Tests

```plaintext
describe("Example Test Cases", function(){
  Test.assertEquals(nicknameGenerator("Jimmy"), "Jim");
  Test.assertEquals(nicknameGenerator("Samantha"), "Sam");
  Test.assertEquals(nicknameGenerator("Sam"), "Error: Name too short");
  Test.assertEquals(nicknameGenerator("Kayne"), "Kay", "'y' is not a vowel");
  Test.assertEquals(nicknameGenerator("Melissa"), "Mel");
  Test.assertEquals(nicknameGenerator("James"), "Jam");
})
```

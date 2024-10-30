# Solution for problem:

[The old switcheroo](https://www.codewars.com/kata/55d410c492e6ed767000004f)

**Description:**

Write a function

```plaintext
vowel2index(str)
```

that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:

```plaintext
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:
```

Your function should be case insensitive to the vowels.

### Sample Tests

```plaintext
describe('Initial test',() => {
  Test.assertEquals(vowel2index('this is my string'),'th3s 6s my str15ng');
  Test.assertEquals(vowel2index('Codewars is the best site in the world'),'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld');
  Test.assertEquals(vowel2index('Tomorrow is going to be raining'), 'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng');
  Test.assertEquals(vowel2index(''), '');
});
```

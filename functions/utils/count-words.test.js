const countWords = require('./count-words');

test('counts a simple sentence', () => {
  const sentence = 'a short sentence with a short word.';

  const expectedResult = {
    a: 2,
    short: 2,
    sentence: 1,
    word: 1,
    with: 1,
  };

  const result = countWords(sentence);

  expect(result).toEqual(expectedResult);
});

test('does not count +', () => {
  const sentence = 'a short sentence 2+ with a short word 2+.';

  const expectedResult = {
    a: 2,
    short: 2,
    sentence: 1,
    word: 1,
    with: 1,
    2: 2,
  };

  const result = countWords(sentence);

  expect(result).toEqual(expectedResult);
});

test('does not count single -', () => {
  const sentence = 'a short sentence- with-a - short word.';

  const expectedResult = {
    a: 1,
    short: 2,
    sentence: 1,
    word: 1,
    'with-a': 1,
  };

  const result = countWords(sentence);

  expect(result).toEqual(expectedResult);
});

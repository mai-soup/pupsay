const bubble = require('../src/bubble');

it('returns a string', () => {
  const result = typeof bubble.say('woof!');
  const expected = 'string';
  expect(result).toBe(expected);
});

it('splits long message into multiple lines by word', () => {
  const result = bubble.say('woof '.repeat(40)).split('\n').length;
  // 5 chars * 40 = 200 chars, should be split into 3 lines
  // as default splits at 80 chars
  const expected = 3;
  expect(result).toBe(expected);
});

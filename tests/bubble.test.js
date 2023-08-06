const bubble = require('../src/bubble');

it('returns a string', () => {
  const result = typeof bubble.say('woof!');
  const expected = 'string';
  expect(result).toBe(expected);
});

it('splits long message into multiple lines by word with default lineWidth', () => {
  const result = bubble.say('woof '.repeat(40)).split('\n').length;
  // 5 chars * 40 = 200 chars, should be split into 3 lines
  // as default splits at 80 chars
  const expected = 3 + 2; // add 2 to account for border
  expect(result).toBe(expected);
});

it('splits long message into multiple lines by word with custom lineWidth', () => {
  const result = bubble.say('woof '.repeat(40), 60).split('\n').length;
  // 5 chars * 40 = 200 chars, should be split into 4 lines
  const expected = 4 + 2; // add 2 to account for border
  expect(result).toBe(expected);
});

it('uses correct border style for single-line messages', () => {
  const result = bubble.say('woof').split('\n');

  // should be of length 3
  expect(result.length).toBe(3);

  // check all lines match expected style
  expect(result[0]).toMatch(/^ -+$/);
  expect(result[1]).toMatch(/^< .+ >$/);
  expect(result[2]).toMatch(/^ -+$/);
});

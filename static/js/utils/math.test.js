const math = require('./math');

test('cube  2 to equal 8', () => {
  expect(math.cube(2)).toBe(8);
});

test('square  2 to equal 8', () => {
  expect(math.square(9)).toBe(81);
});

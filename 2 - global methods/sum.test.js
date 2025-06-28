const theSum = require('./sum');

// test(name, fn, timeout) alias: it(name, fn, timeout)
test('return n1', () => {
  expect(theSum(5)).toBe(5);
});

test('return n1 + n2', () => {
  expect(theSum(15, 25)).toBe(40);
});

test('return n1 + n2 + n3', () => {
  expect(theSum(10, 20, 30)).toBe(60);
});

it('return 0 if no inputs', () => {
  expect(theSum()).toBe(0);
});

it('return sum of all inputs', () => {
  expect(theSum(10, 20, 30, 40, 50)).toBe(150);
});

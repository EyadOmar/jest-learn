const theSum = require('./sum');

// test(name, fn, timeout) alias: it(name, fn, timeout)
// describe(name, fn)
describe('check sum function', () => {
  describe('no sum actually just bulletproofing', () => {
    it('return 0 if no inputs', () => {
      expect(theSum()).toBe(0);
    });
    test('return n1', () => {
      expect(theSum(5)).toBe(5);
    });
  });

  describe('sum of two or more numbers', () => {
    test('return n1 + n2', () => {
      expect(theSum(15, 25)).toBe(40);
    });

    test('return n1 + n2 + n3', () => {
      expect(theSum(10, 20, -30)).toBe(0);
    });

    it('return sum of all inputs', () => {
      expect(theSum(10, 20, 30, 40, 50)).toBe(150);
    });
  });
});

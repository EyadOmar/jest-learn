const data = [1, 2, 3, 4, 5];

// toBe(value) matcher checks if the value is equal to the expected value
test('length of data array', () => {
  expect(data.length).toBe(5);
});

// toHaveLength(length) matcher checks if the array has the expected length
test('length of data array', () => {
  expect(data).toHaveLength(5);
});

// toContain(item) matcher checks if the array contains the specified item
test('contains 6', () => {
  expect(data).toContain(5);
});

// not here is inverse of the matcher and can be applied to any matcher
test('does not contains 8', () => {
  expect(data).not.toContain(8);
});


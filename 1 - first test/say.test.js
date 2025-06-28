const sayHello = require('./say');

test("sayHello returns 'Hello, World!'", () =>
  expect(sayHello()).toBe('Hello, World!'));

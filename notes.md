# Notes

sorry for the messy notes, my notes are not organized. they are just notes that i took while watching the course.

## Video 1 - Introduction And Whats Unit Testing ?

- Unit testing, breaks down your code into small pieces, and tests each piece to make sure it works as expected.
- Unit testing is the responsibility of the developer, not the testing framework or the testing team.
- each tested section or piece of code is called a unit.
- testing can be done on: unit, modules, and procedures.
- unit is the smallest testable part of your code.
- common tools for unit testing in JavaScript are: Jest, Mocha, Jasmine, Karma and Tape.
- we need unit tests for couple of reasons:
  - Qualit of code
  - issues and bugs discovered earlier and easier
  - almot functionality documentation
- Top types of tests:
  - unit tests; as we disccussed testing specific part of the code or functionality
  - integration tests; testing the interaction between different parts of the code
  - end-to-end tests (e2e); testing the entire application, user experience, and user journey from start to finish

## Video 3 - Test Driven Development And Your First Test

- testing rules:
  - get a function to test
  - give input to the function
  - define the expected output
  - check if the output is correct
  - repeat
- TDD, test driven developemnt:
  - Think what the code should do
  - write the code
  - test the code
- jest always search for:
  - **tests** folder
  - .spec.js/.test.js files
  - .spec.ts/.test.ts files

## Video 4:9 - Jest Global Methods

- test function: test(name, fn, timeout) alias: it(name, fn, timeout)
- describe function: describe(name, fn), is to orangize your tests under a specific topic
- describes can be nested
- only: .only can be added to test and describe fucntions to only run that test or describe
- skip: .skip can be added to test and describe fucntions to skip that test or describe

## Video 10 - Before

- beforeAll: runs before all tests
- beforeEach: runs before each test
- afterAll: runs after all tests
- afterEach: runs after each test

## Video 11 - Matchers
- toBe(value) matcher checks if the value is equal to the expected value
- toHaveLength(length) matcher checks if the array has the expected length
- toContain(item) matcher checks if the array contains the specified item
- not is inverse of the matcher and can be applied to any matcher
- there are alot of mathcers, you can check them out here: https://jestjs.io/docs/expect

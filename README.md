# Writing tests with jest

- Unit testing the is the process of checking if a small piece of code will deliver the results intended before the code execution.
- When writing unit tests for functions in a file, for example if the name of the file is `action.js`, the name of the unit test file will be, `action.test.js`
- For the test to run effectively, the `package.json` entry point for the test command must be changed to the code below and each time we want to run test, we just run

```json
{
  "test": "jest"
}
```

- To make sure that we run test for a specific file or function, we can setup the `jest.config.js` file and madke sure that the **testEnvironment** is set to node

```js
module.exports = {
  testEnvironment: "node",
};
```

- To run the test for the specific test file path

```bash
npx jest <path>
```

**Types of Matchers**

- Matchers are methods that are used to test different types of data in jest. For example `.toBe()` is a type of a matcher.

1. _.toBe()_: matcher is a type of matcher that is used for testing data types like numbers, strings, booleans.
2. _.toEqual()_: To equal is used to compare the values of objects or arrays.
3. Testing for truthy and falsy values: We use `.toBeFalsy` to check if a value is `blank, null, undefined, zero, or false`, for example, finding the value of a variable in an object that does not exists. If a value is not any of these, then we can run a test that it is truthy.
4. Error matchers: This is used the situation where we want to test a function or a block of code that they throw an error that we expect. The syntax for this is `.toThrow()`

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

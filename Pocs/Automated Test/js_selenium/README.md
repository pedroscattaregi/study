This project uses [selenium](https://www.npmjs.com/package/selenium-webdriver) to test for a black-box testing on web application.
The test specs are in [mocha](https://mochajs.org/).

## Getting Started
A quick environment guide and how to get started running/writing tests.

#### Prerequisites
- [npm](https://www.npmjs.com/) installed as a default option.

#### Installing

After we have a working version of `npm`, we can start installing the project's dependencies.

```
npm install
```
#### Environment Variables
Create a `.env` file at the root of this project. You can find an example, and copy/paste them in [.env_example](./.env_example). Update the values to reflect your environment.

#### Running the tests
```
npm run test
```

## Break down test structure 

### Page Object Model
[Page Objects Model](https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/) is an archtecture for e2e tests frameworks to ensure that:
- Design pattern architecture​
- Reuse of code​
- Clean code​
- Maintainability​
- Independence of tests

## License
[MIT](https://choosealicense.com/licenses/mit/)

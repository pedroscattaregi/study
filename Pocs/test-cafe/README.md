# TestCafé Poc

A small project to test the Test Café testing framework.

## Getting Started

A quick environment guide and how to get started writing tests.

### Prerequisites
#### Yarn
There are many package managers out there, this Readme is written from the perspective of using [yarn](https://www.npmjs.com/package/yarn) as a default option.
We will be using `yarn` for most of the CLI work on this project. 
Please, check to see if you have it:
```
yarn -v
```
And if not, use the [complete guide for install yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable) or use the following commands:
```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt update && sudo apt install yarn

```

### Installing

After we have a working version of `yarn`, we can start installing the project's dependencies.

```
yarn install
```
#### Environment Variables
Create a `.env` file at the root of this project. You can find an example of the required fields and copy/paste them in [.env_example](https://bitbucket.org/airfox/mobile-testing-framework/src/master/.env_example).

### Running the tests
1. run the services repos (api and front)
2. use one of the following scripts according to browser:
```
yarn:test:chrome
yarn:test:firefox
```

## Break down test structure 

### Utils
At this moment, it is allocating the api client and the data generation for running the tests. This should be split and better managed in future.

### Page Object Model

[Page Objet Model Documentation](https://testcafe.io/documentation/402826/guides/concepts/page-model)

## Built With
* [TestCafé](https://testcafe.io/) - Framework to Cross-browser testing out-of-the-box.

## License
[MIT](https://choosealicense.com/licenses/mit/)

----

## COMMENTS:
- I don't know if the best way is to simply expect the element to exists once the testcafe doesn't care if the element is in the UI or not (it has methods for that)
- splitting the attributes from the actions in the Page Objects could or not be a good approach, it depends on the case to decide with the team

## NEXT STEPS:
- set the browser as an argument into the script to run the tests instead of creating other scripts in package json
- better management of the API with DTO and entities, using into page Objects too (example: reuse a Device DTO)
- convert to a docker application for easy setup in any OS and cloud storage
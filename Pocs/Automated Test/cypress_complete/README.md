# Mobile Testing Framework

This project uses [cypress](https://www.cypress.io/) to test for a gray-box testing on web application.

## Contributing
TBD

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
Create a `.env` file at the root of this project. You can find an example of the required fields and copy/paste them in [.env_example]. Update the paths to reflect your environment.

#### App Data to Run tests
TBD

#### Running the tests

- Running the tests headless:
```
yarn cypress:run
```
- Running the Cypress CLI:
```
yarn cypress:open
```

## Break down test structure 

### Page Object Model

[Page Objet Model Documentation](https://webdriver.io/docs/pageobjects.html#making-a-page-object)

```
// home-page.js
import BasePage from '@root/src/pages/base-page'

class HomePage extends BasePage {

    public get homeScrollView(): Promise<DriverElement> {
        return webdriver.getElement(this.homeWrapperElement);
    }

    public async openMenu(): Promise<void> {
    const button = await this.menuButton;
    await button.click();
  }

}

export default new HomePage()
```

[Application Actions Model](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/)

## Built With

* [cypress](https://www.cypress.io/) - testing framework for web application
* [How To Test Your Application](https://docs.cypress.io/guides/getting-started/testing-your-app) - best practices for real usage

## License
[MIT](https://choosealicense.com/licenses/mit/)

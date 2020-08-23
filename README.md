# WebdriverIO | Jasmine (Typescript)


## Introduction
WebdriverIO is a test automation framework that allows you to run tests based on the Webdriver protocol. It provides support for your favorite BDD/TDD test framework and will run your tests locally or in the cloud using Sauce Labs, BrowserStack, TestingBot or LambdaTest.


## Setup & Installation

**Prerequisites**

* Download & install ![Microsoft VS Code](https://code.visualstudio.com/download).
* Download & install ![NodeJS](https://nodejs.org/en/download/).
* Check if node and npm installed correctly.
In command prompt, type the command
```
node -v
npm -v
```
and see if it shows the versions of node and npm.

**Project setup**
 
* First you need to initialize a npm project
```
mkdir webdriverio-test && cd webdriverio-test
npm init
```
After you run **npm init** command, you'll see some prompts. You can use arrow keys for your selection. You can also run **npm init -y** to avoid these prompts and it will create a standard npm project for you. You'll see these prompts.

```
**WDIO Configuration Helper**

? Where is your automation backend located? On my local machine
? Which framework do you want to use? jasmine
? Do you want to run WebdriverIO commands synchronous or asynchronous? async
? Where are your test specs located? ./test/specs/**/*.js
? Do you want WebdriverIO to autogenerate some test files? Yes
? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes
? Where are your page objects located?
? Are you using a compiler? TypeScript (https://www.typescriptlang.org/)
? Which reporter do you want to use? spec
? Do you want to add a service to your test setup? selenium-standalone
? What is the base url? http://localhost
```

**npm init** creates package.json in the directory and it allows you to install dependencies(or dev-dependencies) using CLI (command line interface).


* Next, you need to install webdriverIO CLI (@wdio/cli). It comes with a testrunner and lots of useful features that makes your life easier.

```
npm i --save-dev @wdio/cli
```

* Then, you need to generate wdio.conf.js configuration file.

```
 npx wdio config -y
```

That's it! The configurator will install all required packages for you and create a config file called wdio.conf.js.


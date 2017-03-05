# Movie DB Search
Search The Movie DB (TMDb): The user should be able to enter some text into a search field, see and browse the results from the Movie DB.

## Getting Started
Open the Index.html and enter the name of a Movie in the input field and then press the search button.

## Documentation

### Prerequisites
You should have NodeJS installed on your machine in order to install the packages. Run _npm install_ from the project root to install the dependencies.

Chrome is required in order to run the unit tests.

Optionally Webpack and Karma-cli globally installed.

### Webpack (1.9)
The code is bundled into a single javascript file called bundle.js and deployed to the dist folder.

In order to compile the javascript bundle, run _webpack_ from the project root. _(npm scripts pending. if webpack not installed globally on your local machine, run 'node_modules/.bin/webpack')_

### Karma
The unit tests are run using [Karma-cli Test Runner](http://karma-runner.github.io/1.0/intro/installation.html).

To run the tests, run _karma start_ from the project root. _(npm scripts pending. if karma-cli not installed globally on your local machine, run 'node_modules/.bin/karma start')_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

_Please don't edit files in the "dist" subdirectory as they are generated via Webpack. You'll find source code in the "src" subdirectory!_

## Release History
v0.1

## License
Copyright (c) 2017 ajames72  
Licensed under the MIT license.

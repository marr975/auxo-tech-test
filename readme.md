# Installation
This framework requires NodeJS v20

Run the following in a terminal

`npm install`

`npx playwright install`
# Running the Tests
To run the tests headlessly, run the following in a terminal

`npm run test`

To run the tests in a headed browser, run the following in a terminal

`npm run demo`
# About
This framework is based on Cucumber and Playwright. It uses the Screenplay design pattern to decouple page objects from actions performed on elements of the web application. Classes and functions have a single responsibility, page elements are store in classes that do nothing but store page elements; functions only have one role. This makes it easier to maintain and document that actions performed during a test scenario.
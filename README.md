# jestmock

I am trying to understand how to mock a required "transitive dependency" using jest.

For the sake of demonstration, I've created a project with a single Jest test in test.js. You can run the test with ```npm run test```.

The test loads a module "testme", which has a require at its top level for a module "dependonme". The "dependonme" module throws an error when loaded.

# Question

How can I mock the "dependonme" module while trying to test the "testme" module? Here is my current (failing) attempt in test.js:

```
jest.mock('./src/dependonme');
var testme = require('./src/testme');
testme.callme_a();
```

It fails to mock, and loads the real "dependonme" module instead.
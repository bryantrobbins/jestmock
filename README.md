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

It fails to mock, and loads the real "dependonme" module instead. Here is the output:

```
$ npm run test

> jestmock@1.0.0 test /home/bryan/public-code/jestmock
> jest

 FAIL  ./test.js
  mocking tests
    ✕ should correctly mock a dependent module (22ms)

  ● mocking tests › should correctly mock a dependent module

    Failed: "Do no load this module"

       7 |     });
       8 |   
    >  9 |     it('should correctly mock a dependent module', async () => {
         |     ^
      10 |         jest.mock('./src/dependonme');
      11 |         var testme = require('./src/testme');
      12 |         testme.callme_a();

      at Env.it (node_modules/jest-jasmine2/build/jasmine_async.js:102:24)
      at Suite.it (test.js:9:5)
      at Object.<anonymous> (test.js:1:27)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.442s
Ran all test suites.
```
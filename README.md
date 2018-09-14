# jestmock

I am trying to understand how to mock a required "transitive dependency" using jest.

For the sake of demonstration, I've created a project which now has three
tests in a file test.js. You can run the tests from this repo with 
```npm runtest```.

# Requirements

I want to be able to mock a transitive dependency of a module under test by:
* Adding test-specific mock configuration to a jest ```it``` test (not, e.g., by putting Jest "manual mocks" in a ```__mocks__``` folder)
* Overriding the implementation of the module entirely
* Overriding the implementation of exported functions of the module individually
* Overriding the implementation of exported functions in a module which exports an initializer function
* Have multiple tests in the same file, with independent control over the same
mocked dependencies

# The approach

It was not obvious to me from Jest examples, but the ```jest.mock``` function 
supports a second argument which is a custom factory for the mock. You can find
the complete documentation for the mock function
[here](https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options).

Also, I used ```jest.resetModules()``` to reset mocks within each test. I haven't
tried moving mock resetting to the before/after methods.

One more trick: name any variables holding jest mocks "mock*". This is a Jest 
behavior related to mock initialization.

# Quick Examples



```
        // Mock the whole module
        jest.mock("./src/dependonme", () => {});

        // Mock a function within a module
        // Here, mockWoot can be initialized to jest.fn() elsewhere,
        // so that you can verify its behavior afterward.
        jest.mock("./src/dependonme_functions", () => {
            return {
                woot: mockWoot
            }
        });        

        // Mock a module which exports a function
        jest.mock("./src/dependonme_functions_options", () => {
            return function() {
                return {
                    woot: mockWoot
                }
            }
        });
```

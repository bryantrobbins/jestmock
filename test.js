describe('mocking tests', function () {

    beforeEach(() => {
    });
    afterEach(() => {
    });

    it('should correctly mock a dependent module', async () => {
        // Mock the dependent module, "dependonme"
        jest.resetModules();
        jest.mock("./src/dependonme", () => {return {}});
        
        // Load real version of "testme", which requires "dependonme"
        var testme = require('./src/testme');
        testme.callme_a();
    });


    it('should correctly mock functions in a dependent module', async () => {
        // Mock a function of a dependent module
        // This name strangely has to start with "mock"
        var mockWoot = jest.fn();

        jest.resetModules();
        jest.mock("./src/dependonme", () => {});
        jest.mock("./src/dependonme_functions", () => {
            return {
                woot: mockWoot
            }
        });

        var testme = require('./src/testme');
        testme.callme_b();
    });

    it('should correctly mock functions in a dependent module which takes options', async () => {
        // Mock a function of a dependent module
        // This name strangely has to start with "mock"
        var mockWoot = jest.fn();

        jest.resetModules();
        jest.mock("./src/dependonme", () => {});
        jest.mock("./src/dependonme_functions", () => {
            return {
                woot: mockWoot
            }
        });
        jest.mock("./src/dependonme_functions_options", () => {
            return function() {
                return {                
                    woot: mockWoot
                }
            }
        });

        var testme = require('./src/testme');
        testme.callme_c();
    });



  
  
  });
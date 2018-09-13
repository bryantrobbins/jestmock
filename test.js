describe('mocking tests', function () {

    beforeEach(() => {
    });
    afterEach(() => {

    });
  
    it('should correctly mock a dependent module', async () => {
        jest.mock('./src/dependonme');
        var testme = require('./src/testme');
        testme.callme_a();
    });

  
  
  });
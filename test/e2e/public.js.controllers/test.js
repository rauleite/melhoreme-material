describe('Se e2e esta ok', function() {

    // Fix "angular could not be found on the window"
    browser.ignoreSynchronization = true;

    browser.get('/');

    it('Se entra automaticamente em /', function () {
        expect(browser.getLocationAbsUrl()).toMatch("/");
    });

});

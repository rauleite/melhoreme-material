'use strict';

describe('Se e2e esta ok', function() {

    beforeEach(function() {
        // Fix "angular could not be found on the window"
        browser.ignoreSynchronization = true;
        browser.get('/');
    });

    it('Se entra automaticamente em /', function () {
        expect(browser.getLocationAbsUrl()).toMatch("/");
    });

});

describe('Se usuario esta ok', function() {

    beforeEach(function() {
        browser.get('/usuario');
    });

    it('Se /usuario esta ok', function () {
        expect(browser.getCurrentUrl()).toMatch("http://localhost:8080/usuario");
    });
});

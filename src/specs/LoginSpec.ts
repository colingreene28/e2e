///ts:ref=reference.d.ts
/// <reference path="../../reference.d.ts"/> ///ts:ref:generated
var login: Login = require('../pages/Login');

describe('Login', () => {
    beforeEach(login.open);

    it('with incorrect email', () => {
        login.setEmail('dummy@fake.com');
        login.clickSignIn();
        var validationsErrors = login.getValidationErrors();
        validationsErrors.then((elements: protractor.ElementFinder[])=> {
            expect(elements.length).toBeGreaterThan(0);
        });
    });
});
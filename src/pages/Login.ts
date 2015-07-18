///ts:ref=reference.d.ts
/// <reference path="../../reference.d.ts"/> ///ts:ref:generated
class Login {
    static URL: string = "https://app.wipster.io/Login";

    private email: webdriver.Locator;
    private password: webdriver.Locator;
    private signIn: webdriver.Locator;
    private validationErrors: webdriver.Locator;

    constructor() {
        this.email = by.model('email');
        this.password = by.model('password');
        this.signIn = by.css('.btn-signin');
        this.validationErrors = by.repeater('error in validationErrors');
    }

    open = () => {
        browser.get(Login.URL);
    };

    setEmail = (email: string): Login => {
        element(this.email).sendKeys(email);
        return this;
    };

    setPassword = (password: string): Login => {
        element(this.password).sendKeys(password);
        return this;
    };

    clickSignIn = () => {
        element(this.signIn).click();
    };

    getValidationErrors = ():protractor.ElementArrayFinder => {
        return element.all(this.validationErrors);
    }
}

module.exports = new Login();
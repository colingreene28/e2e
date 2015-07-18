///ts:ref=reference.d.ts
/// <reference path="../../reference.d.ts"/> ///ts:ref:generated
import ENUM = require('./OperationType');
class CalculatorPage {
    open = () => {
        browser.get('http://juliemr.github.io/protractor-demo/#sthash.LysYCiLa.dpuf');
    };

    fill = (operation: ENUM.OperationType, first: number, second: number) => {
        element(by.model('operator')).$('[value="' + ENUM.OperationType[operation] + '"]').click();
        element(by.model('first')).sendKeys(first.toString());
        element(by.model('second')).sendKeys(first.toString());
    };

    submit = () => {
        element(by.id('gobutton')).click();
    };

    getFirstResult = (): webdriver.promise.Promise<string> => {
      return this.getResult().first().getText();
    };

    getResult = () => {
        return element.all(by.repeater('result in memory'));
    };
}

module.exports = new CalculatorPage();

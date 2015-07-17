///ts:ref=reference.d.ts
/// <reference path="../../reference.d.ts"/> ///ts:ref:generated
module Pages {
    export enum OperationType {
        ADDITION, DIVISION, MODULO, MULTIPLICATION, SUBTRACTION
    }

    export class CalculatorPage {
        open = () => {
            browser.get('http://juliemr.github.io/protractor-demo/#sthash.LysYCiLa.dpuf');
        };

        fill = (operation: OperationType, first: number, second: number) => {
            element(by.model('operator')).$('[value="' + OperationType[operation] + '"]').click();
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
}
///ts:ref=reference.d.ts
/// <reference path="../../reference.d.ts"/> ///ts:ref:generated
var ENUM = require('../pages/OperationType');
var calculatorPage = require('../pages/Calculator');

describe('Calculator', () => {

    beforeEach(calculatorPage.open);

    it('it should add 2 operands', () => {
        calculatorPage.fill(ENUM.OperationType.ADDITION, 1, 2);
        calculatorPage.submit();
        calculatorPage.getFirstResult().then((result: string) => {
            expect(result).toEqual(3);
        }).thenCatch((e: any) => {
            fail('Something went tits up');
        })

    })
});


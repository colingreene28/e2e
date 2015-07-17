///ts:ref=reference.d.ts
/// <reference path="../../reference.d.ts"/> ///ts:ref:generated
describe('Calculator', () => {

    var calculatorPage = new Pages.CalculatorPage();

    beforeEach(calculatorPage.open);

    it('it should add 2 operands', () => {
        calculatorPage.fill(Pages.OperationType.ADDITION, 1, 2);
        calculatorPage.submit();
        calculatorPage.getFirstResult().then((result: string) => {
            expect(result).toEqual(3);
        }).thenCatch((e: any) => {
            fail('Something went tits up');
        })

    })
});


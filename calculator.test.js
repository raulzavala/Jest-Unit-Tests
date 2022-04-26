const calculator = require ('./calculator.js');

describe('calculator', () => {
   it('Should sum two numbers',() =>
   {
       const num1 = 100;
       const num2 = 100;
       expect(calculator.sum(num1,num2)).toBe(200);
   });
});

describe('calculator', () => {
    it('Should substract two numbers',() =>
    {
        const num1 = 100;
        const num2 = 100;
        expect(calculator.sub(num1,num2)).toBe(0);
    });
 });

describe('calculator', () => {
    it('Should multiply two numbers',() =>
    {
        const num1 = 100;
        const num2 = 100;
        expect(calculator.mult(num1,num2)).toBe(10000);
    });
 });


 describe('calculator', () => {
    it('Should divide two numbers',() =>
    {
        const num1 = 100;
        const num2 = 100;
        expect(calculator.div(num1,num2)).toBe(1);
    });
 });
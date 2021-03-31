const calculator =  require("../calculator.js");
const assert = require("chai").assert;
const addContext = require('mochawesome/addContext');

describe("Operaciones de dos numeros", () => {
    before(function() {
        console.log("soy el before");
        addContext(this, 'some context');
    });

    beforeEach(() => {
        console.log("Soy el before each");
    });

    it("Obtener el numero 3", () => {
        assert.equal(calculator.suma(1, 2), 3);
    });

    it("Obtener el numero 4 de una multiplicacion", () => {
        assert.equal(calculator.multiplicar(2, 2), 4);
    });

    it("Comparar si es string", () => {
        assert.typeOf(calculator.suma('1', '2'), 'string');
    });

    after(() => {
        console.log("Soy el after");
    });

    afterEach(() => {
        console.log("Soy el aftereach");
    });
});

// npm install --save-dev mochawesome
// node .\node_modules\mocha\bin\mocha --reporter mochawesome
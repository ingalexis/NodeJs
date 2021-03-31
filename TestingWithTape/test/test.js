const test = require("tape");
const calculator = require("../calculator.js");

test("Prueba Agregar Suma de Dos Enteros", t => {
    t.plan(1);
    t.equal(calculator.suma(1,2), 3);    
});

test("Prueba Obtener suma de dos strings", t => {
    t.plan(1);
    t.equal(calculator.suma("1","2"), 3);    
});

test("Prueba metodo ok", t => {
    t.plan(1);
    t.ok(0, "Respuesta ok");
});

test("Prueba metodo not ok", t => {
    t.plan(1);
    t.notOk(0, "Respuesta not ok");
});

test("Prueba metodo error", t => {
    t.plan(1);
    t.error("error", "Estado error");
});

test("Prueba metodo not equal", t => {
    t.plan(1);
    t.notEqual(true, false, "Estado no son iguales");
});

test("Prueba metodo looseEqual", t => {
    t.plan(1);
    t.looseEqual(2, "2", "Respuesta looseEqual");
});

test("Prueba metodo notLooseEqual", t => {
    t.plan(1);
    t.notLooseEqual(2, "2", "Respuesta notLooseEqual");
});

test("Prueba metodo deepEqual", t => {
    t.plan(1);
    t.deepEqual(2, "2", "Respuesta deepEqual");
});

test("Prueba metodo notDeepEqual", t => {
    t.plan(1);
    t.notDeepEqual(2, "2", "Respuesta notDeepEqual");
});


// Test Calculator

test("Prueba Agregar Suma de Dos Enteros Calculator", t => {
    t.plan(1);    
    t.comment("Calculator");
    t.equal(calculator.suma(1, 2), 3);    
});

test("Prueba Obtener suma de dos strings Calculator", t => {
    t.plan(1);
    t.equal(calculator.suma("1", "2"), "12");    
});

test("Prueba metodo ok Calculator", t => {
    t.plan(1);
    t.ok(calculator.suma(1, 2), "Respuesta ok Calculator");
});

test("Prueba metodo not ok Calculator", t => {
    t.plan(1);
    t.notOk(calculator.suma(0, 0), "Respuesta not ok Calculator");
});

test("Prueba metodo error Calculator", t => {
    t.plan(1);
    t.error(calculator.suma(1, 2), "Estado error Calculator");
});

test("Prueba metodo not equal Calculator", t => {
    t.plan(1);
    t.notEqual(calculator.suma(1, 2), calculator.suma("1", "2"), "Estado no son iguales Calculator");
});

test("Prueba metodo looseEqual Calculator", t => {
    t.plan(1);
    t.looseEqual(calculator.suma(1, 2), calculator.suma(2, 1), "Respuesta looseEqual Calculator");
});

test("Prueba metodo notLooseEqual Calculator", t => {
    t.plan(1);
    t.notLooseEqual(calculator.suma(1, 2), calculator.suma("1", "2"), "Respuesta notLooseEqual Calculator");
});

test("Prueba metodo deepEqual Calculator", t => {
    t.plan(1);
    t.deepEqual(calculator.suma(5, 6), calculator.suma(10, 1), "Respuesta deepEqual Calculator");
});

test("Prueba metodo notDeepEqual Calculator", t => {
    t.plan(1);
    t.notDeepEqual(calculator.suma(5, 6), calculator.suma("1", "1"), "Respuesta notDeepEqual Calculator");
});

// Ejercicio implementar metodo

test("Prueba metodo match Calculator", t => {
    t.plan(1);
    t.match("abcdefghijklmnopqrst", /[a-t]/, "Prueba match");
});

test("Prueba metodo doesNotMatch Calculator", t => {
    t.plan(1);
    t.doesNotMatch("123456789", /[a-t]/, "Prueba doesNotMatch");
});
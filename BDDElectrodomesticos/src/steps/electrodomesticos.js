const { Given, When, Then } = require('cucumber');
const assert = require('assert').strict;
const {getById, agregarProducto, registrarFactura, getAll} = require('../util/ventaElectro.js');

var electro;
var factura;
var ide;
var registrada;

Given('se consulte un electrodomestico con el codigo {int}', id => {
    electro = getById(id);
});

When('la consulta arroje el valor {int}', id => {
    assert.equal(id, electro.id);
});

Then('agregar el producto a la factura con el codigo {int}', id => {
    factura = agregarProducto(id);
    ide = id;
});

Given('el producto este registrado', () => {
    assert.equal(factura.id, ide);
});

Then('registrar la factura', () => {
    registrada = registrarFactura();
});

When('la factura este registrada', () => {
    assert.ok(registrada.length > 0);
});

Then('el total de la factura es {int}', total => {
    assert.equal(registrada[0].precio, total);
});

Given('se ingrese a la aplicacion', () => {
    
});

Then('mostrar electrodomesticos con descripciones y precios', () => {
    var electros = getAll();
    assert.ok(electros.length > 0);
});
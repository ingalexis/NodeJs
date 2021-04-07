const { Given, When, Then } = require('cucumber');
const assert = require('assert').strict;
const restHelper = require('../util/restHelper.js');

let result;
let response;

Given('un contacto {}', request => {
    result = JSON.parse(request);
});

When('envie una solicitud POST a {}', async path => {
    response =  await restHelper.postData(`http://localhost:80${path}`, result);
});

Then('yo obtengo el codigo de respuesta {int}', async code => {
    assert.equal(response.status, code);
});


// Ejercicio

Given('The contact with {int} exist', async id => {
    response =  await restHelper.getData(`http://localhost:80/directory/${id}`, result);
});

When('I send GET request to {}', async path => {
    await restHelper.getData(`http://localhost:80${path}`, result);
});

Then(/^I receive (.*)$/, async function (expectedResponse) {
    assert.deepEqual(response.data, JSON.parse(expectedResponse));
});
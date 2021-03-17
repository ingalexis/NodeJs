/*
* Modulos. Permite que grandes programas se ensamblen, y que funcionen correctaente
* consiste en ocultar detalles de implementación privada,
* mantener ordenado al namespace global para que los modulos no puedan modificar accidentalmente las
* variables, funciones y clases definidas por otros modulos.
*/

const stats = (function() {
	const sum = (x,y) => x + y;
	const square = x => x * x;
	
	function mean(data) {
		return data.reduce(sum)/data.length;
	}
	
	function stdDev(data) {
		let m = mean(data);
		return Math.sqrt(
			data.map(x => x - m).map(square).reduce(sum)/(data.length - 1)
		);
	}
	
	return {
		mean,
		//sum,
		stdDev
	};
}());

console.log(stats.mean([1, 3, 5, 7, 9]));
console.log(stats.stdDev([1, 3, 5, 7, 9]));

//console.log(stats.sum(1, 3));

const calculadora = (function() {
	const multiplicar = (x, y) => x * y;
	const restar = (x, y) => x - y;
	const dividir = (x, y) => x / y;
	const sumar = (x, y) => x + y;
	
	return {
		multiplicar,
		restar,
		dividir,
		sumar
	}
}());

console.log(calculadora.multiplicar(7,3));

const modules = {};

function require(moduleName) {
	return modules[moduleName];
}

modules['stats.js'] = (function() {
	const exports = {};
	
	const sum = (x,y) => x + y;
	const square = x => x * x;
	
	exports.mean = function (data) {
		return data.reduce(sum)/data.length;
	}
	
	exports.stdDev = function (data) {
		let m = exports.mean(data);
		return Math.sqrt(
			data.map(x => x - m).map(square).reduce(sum)/(data.length - 1)
		);
	}
	
	return exports;
}());

modules['calculadora.js'] = (function() {
	const exports = {};
	
	exports.multiplicar = function (x, y){ return x * y };
	exports.restar = function (x, y) { return x - y };
	exports.dividir = function (x, y) { return x / y };
	exports.sumar = function (x, y) { return x + y };
	
	return exports;
}());

const stats2 = require('stats.js');
const calculadora2 = require('calculadora.js');

console.log(stats2.mean([1, 3, 5, 7, 9]));
console.log(stats2.stdDev([1, 3, 5, 7, 9]));
console.log(calculadora2.dividir(7,3));


/*
* Modulos en ES6 (Ema Script)
* 
*/

export const PI = Math.PI;

export function convertirGradosARadianes(grados) {
	return grados * Math.PI / 180;
}

export class Circle {
	
	constructor(radio) {
		this.radio = radio;
	}
	
	area() {
		return Math.PI * this.radio * this.radio;
	}
}

// Segunda alternativa para exportar

const PI = Math.PI;

function convertirGradosARadianes(grados) {
	return grados * Math.PI / 180;
}

class Circle {
	
	constructor(radio) {
		this.radio = radio;
	}
	
	area() {
		return Math.PI * this.radio * this.radio;
	}
}

export { PI, Circle, convertirGradosARadianes};

/*
* En el caso de solo querer exportar un solo elemento utilizamos la palabra default, funciona igual para funciones o constantes
* En un modulo solo puede existir un default
*/
export default class BitSet { }

/* 
* La palabra clave export solo debe aparecer en el nivel superior de nuestro codigo JavaScript, es decir, no se puede utilizar export dentro
* de una clase, dentro de un ciclo, dentro de una función 
* La palabra export puede entenderse como la palabra public en java
*
* Import:
*
*/

import BitSet from './bitset.js';

import { mean, stdDev } from './stats.js';

/*
* Para tener en cuenta y evitar errores:
*	1 - Las importaciones solo pueden aparecer en el nivel superior del modulo
* 2 - Por convención las importaciones  se colocan al inicio del modulo 
* 3 - Para la ruta del modulo se pueden usar comillas simples o dobles
*/

import * as stats from './stats.js'; // importa todo lo del modulo

stats.mean(); // llamado de los elementos 

/*
* Import para los casos especiales en los que se tenga un export default y otra exportaciones
* Suponiendo que el archivo bitset.js, tenga default y otros elementos exportados
*/

import BitSet, { otroElementoExportado, otroSegundoElementoExportado } from './bitset.js';

import './archivoSinExport.js';

// import renombrado: se utiliza cuando se tenga que importar dos modulos con elemento exportados que tengan nombres iguales

import { mean, stdDev } from './stats.js';
import { mean as meanOther, stdDev2 } from './otherstats.js';

import { default as bitset_v2 } from './bitset.js';

export { 
	PI_2 as NumeroPI,
	convertirGradosARadianes as convertir,
	Circle as Circulo 
};

/*
* Re-exports
* Unir dos archivos o modulos en uno solo
*/

// Re-export desde un nuevo archivo
import { mean } from './stats/mean.js';
import { stdDev } from './stats/stdDev.js';

export {mean, stdDev};

// Re-export de todos los elementos desde los import
export * from './stats/mean.js';
export * from './stats/stdDev.js';

// Importar modulos re-exportados, tambien se puede renombrar
import { mean as mean OtherName, stdDev } from './stats.js';


// re-exportar elementos default
export { default as mean } from './stats/mean.js';
export { default as stdDev } from './stats/stdDev.js';


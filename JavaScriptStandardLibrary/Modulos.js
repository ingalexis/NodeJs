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

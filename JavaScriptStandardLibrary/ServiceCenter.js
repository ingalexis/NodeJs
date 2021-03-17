
/*
* Ejercicio Modulos
* Centro de Servicios, recargas, envios, pagos...
*/
class NumberFormatError extends Error {
	
	constructor (operacion, statusText, numero) {
		super(`${operacion} ${statusText}: ${numero}`);	

		this.operacion = operacion;
		this.statusText = statusText;
		this.numero = numero;
	}
	
	get name () {
		return "NumberFormatError"; 
	}	
	
}

function validarNumero(numero) {
	let condicion = /[^0-9]+/;
	if ((numero+"").match(condicion) != null) {
		throw new NumberFormatError("Error Numero", "El numero no es valido.", numero);
	}
}

const modules = {};

function require(moduleName) {
	return modules[moduleName];
}

modules['recargas.js'] = (function (){
	const exports = {};
	
	let registroRecargas = new Map(); 
	
	const operadores = ['CLARO', 'MOVISTAR', 'TIGO'];
	exports.verOperadores = function () { 
		console.log("________________________"); 
		console.log("OPERADORES");
		console.log("------------------------"); 
		operadores.forEach(operador => console.log(operador));
		console.log("________________________"); 
	};
	
	const paquetes = new Map([["CLARO", new Map([[1, "$2.000"], [2, "$5.000"], [3, "$10.000"]])],
														["MOVISTAR", new Map([[1, "$1.000"], [2, "$3.000"], [3, "$10.000"]])],
														["TIGO", new Map([[1, "$2.000"], [2, "$3.000"], [3, "$5.000"]])]]);
	exports.verPaquetes = function(operador) {
		console.log("________________________"); 
		console.log("PAQUETES " + operador);
		console.log("------------------------"); 
		paquetes.get(operador).forEach((paquete, key) => console.log(`Paquete ${key}: ${paquete}`)); 
		console.log("________________________"); 
	};
	
	exports.recargar =  function(numero, operador, recarga){
		try {		
			validarNumero(numero)
			registroRecargas.set(numero, [operador, paquetes.get(operador).get(recarga), new Date().toLocaleString()]);
			console.log(`[${registroRecargas.get(numero)[2]}] Se recargo el numero de celular ${numero} del operador ${operador} con el paquete ${recarga} de valor ${registroRecargas.get(numero)[1]}`);
		} catch (error) {
			console.error(error.message);
		}
	};
	
	exports.verRecargas = function() {
		console.log("|\tNUMERO\t|\tOPERADOR\t|\tRECARGA\t|\tFECHA\t|");
		registroRecargas.forEach((detalle, operador) => console.log(`|${operador}\t|\t${detalle[0]}\t|\t${detalle[1]}\t|${detalle[2]}|`))
	};
	
	return exports;
	
}());

const recargas =  require('recargas.js');
recargas.verOperadores();

recargas.verPaquetes("TIGO");

recargas.recargar(3213104614, "MOVISTAR", 2);

recargas.verRecargas();

recargas.recargar("3213104614e", "MOVISTAR", 2);
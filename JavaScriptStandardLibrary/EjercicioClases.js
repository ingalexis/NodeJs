/*
* Ejercicio Clases
*/


// Forma Antigua
function Repetidor (texto, veces) {
	this.texto = texto;
	this.veces = veces;
}

Repetidor.prototype = {
	repetir:  function () {
		let textoRepetido = "";
		for(let i = 0; i < this.veces; i++) {
			textoRepetido += this.texto;
		}
		return textoRepetido;
	}
}

let textoRepetido = new Repetidor("x", 5);
console.log(textoRepetido.repetir());


// Forma actual

class RepetidorCurrent {
	
	constructor (texto, veces) {
		this.texto = texto;
		this.veces = veces;
	}
	
	repetir() {
		let textoRepetido = "";
		for(let i = 0; i < this.veces; i++) {
			textoRepetido += this.texto;
		}
		return textoRepetido;
	}
}

console.log(new RepetidorCurrent("y",6).repetir());


// Función como expresión

let repetidor = function(texto, veces) {
		let textoRepetido = "";
		for(let i = 0; i < veces; i++) {
			textoRepetido += texto;
		}
		return textoRepetido;
	}
	
console.log(repetidor("z", 7));



// Clase como expresión

let RepetidorClass = class {
	constructor(texto, veces){
		this.textoRepetido = "";
		for(let i = 0; i < veces; i++) {
			this.textoRepetido += texto;
		}
	}
}

console.log(new RepetidorClass("xyz", 3).textoRepetido);



/*
* Funciones
* Es un bloque de codigo JavaScript que se define una vez pero puede ejecutarse tantas veces como se desee
* Las funciones son objetos para el compilador, por tal se pueden establecer propiedades, tambien podemos invocar otras funciones, 
* las definiciones de funciones se pueden anidar dentro de otras funciones.
* 
* Las declaraciones de funcion se compilan primero y se ponen de primeras, a diferencia de las expresiones de funciones 
* que hasta despues de declararse se puede usar.
*/

// Declaración de función

function factorial(x) {
	if (x <= 1) {
		return 1;
	}
	return x * factorial(x - 1);
}

console.log(factorial(4));

// Expresión de función

const factorial = function factorial(x) {
	if (x <= 1) {
		return 1;
	} 
	return x * factorial(x - 1);
}

console.log(factorial(6));



const cuadrado = function(x){
    return x*x;
}


console.log(cuadrado(12));

//expresión que se autoinvoque

let cuadradoV2 = (function(x){
    return x*x;
}(8));
console.log(cuadradoV2);

//

//
/**
 * Funciones flechas o lambdas.
 * 
 * son tambien expresiones de función, con la diferencia de que son más compactas.
 * 
 */

const suma = (x,y) => {
    return x+y;
};
console.log(suma(2,3));

//La anterior función más compacta
const sumaV2 = (x,y) => x+y;

//Con un solo parámetro (no requiere el paréntesis)
const polinomio = x => x*x + 2*x +3;
console.log(polinomio(5));

//Función lambda sin parámetro.
const devolverConstante = () => 10;
console.log(devolverConstante());
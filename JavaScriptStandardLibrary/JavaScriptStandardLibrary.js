/*
* Set Class: Un set es una colección de valores como lo es una matriz. Sin embargo
* a diferencia de las matrices los sets no estan ordenados ni indexados y no permiten duplicados.
* Un valor es miembro de un set o no es miembro. No es posible preguntar cuantas veces aparece un valor en un conjunto.
*/

let setOne = new Set(); // Un set vacio
let setsTwo = new Set([1, setOne]); // Un set con dos elementos
let setsThree = new Set(setOne); // Un nuevo set que copia los elementos de setOne
let setFour = new Set("Mississipi"); // Colocaremos 4 elementos: "M", "i", "s", "p"
console.log(setFour.size);
setOne.add(1);
setOne.add(1);
setOne.add(true);
setOne.add([1,3,5]);
setOne.add("texto");
console.log(setOne.size);
setOne.delete(1);
console.log(setOne.size);
setOne.delete("texto");
console.log(setOne.size);
setOne.clear();
console.log(setOne.size);
setOne.add("a").add("b").add("c");
console.log(setOne.size);

// verificación si un valor es miembro del set
let digitsPrimes = new Set([2,3,5,7]);
console.log(digitsPrimes.has(2));
console.log(digitsPrimes.has("2"));
console.log(digitsPrimes.has(70));

// bucles con sets
let sum = 0;
for (let prime of digitsPrimes) { 
	sum += prime;
}
console.log(sum);

// conversión a matrices
console.log([...digitsPrimes]);
console.log(Math.max(...digitsPrimes));

// foreach
let product = 1;
digitsPrimes.forEach(prime => product *= prime);
console.log(product);


/*
* Map Class: Representa un conjunto de valores conocidos como claves, donde  cada clave tiene otro valor asociado(o mapeado)
* un map o mapa es como una matriz pero en lugar de usar un conjunto de numeros enteros secuenciasles como claves, los mapas nos permiten usar valores arbitrarios
* como indices.
*/

let mapOne = new Map(); // Empty Map o Map vacio
let mapTwo = new Map([ // Un nuevo Map inicializado con claves de tipo string y mapeadas a numeros
	["one",1],
	["two",2]
]);
let mapThree = new Map(mapTwo); // Esto es una copia de mapTwo
let obj = {x:1, y:2};
let mapFour = new Map(Object.entries(obj)); // Igual a new Map([["x",1],["y",2]])

let mapFive = new Map();
console.log(mapFive.size);
mapFive.set("one", 1);
mapFive.set("two", 2);
console.log(mapFive.size);
console.log(mapFive.get("two"));
mapFive.set("one", true);
console.log(mapFive.get("one"));

console.log(mapFive.has("one"));
console.log(mapFive.has(true)); // has solo busca claves

mapFive.delete("one");
console.log(mapFive.size);

mapFive.clear();
console.log(mapFive.size);

mapFive.set("one", 1).set("two", 2).set("three", 3);
console.log(mapFive.size);

let mapSix = new Map();
mapSix.set({},1);
mapSix.set({},2);
console.log(mapSix.size);
console.log(mapSix.get({}));
mapSix.set("one", undefined);
console.log(mapSix.get("one"));
console.log(mapSix.get("two"));

let mapSeven = new Map();
mapSeven.set("one", 1).set("two", 2).set("three", 3);
console.log([...mapSeven]); // Una matriz de matrices
for (let [key, value] of mapSeven) {
	console.log(`llave ${key} - valor ${value}`);
}

console.log([...mapSeven.keys()]); // solo trae las claves
console.log([...mapSeven.values()]); // solo trae las values

console.log([...mapSeven.entries()]);

mapSeven.forEach((value, key) => console.log(`llave ${key} - valor ${value}`));


/*
*	Array Typed: Los elementos de una typed arrays son todos numeros. permiten especificar
* tipo y el tamaño de los numeros que se almacenaran en la raiz.
* se debe especificar la longitud de una matriz con tipo cuando se crea y esa longitud nunca puede cambiar,
* los elementos de una matriz con tipo siempre se inicializan en 0 cuado se crea.
*/


let bytes = new Uint8Array(1024); // 1024 bytes
let matrix = new Foat64Array(9); // matriz 3 x 3
let point = new Int16Array(3); // un punto en un espacio de 3D
let rgba = new Uint8ClampedArray(4); // un valor de pixel rgba de 4 bytes

let white = Uint8ClampedArray.of(255, 255, 255, 0); // creamos el color blanco
let ints = Uint32Array.from(white); // los mismos cuatro numeros pero enteros

console.log(Uint8Array.of(1.23, 2.99, 45000));

/*
* Referencia opaca
*/

let buffer = new ArrayBuffer(1024 * 1024); 
console.log(buffer.byteLength);
let asBytes = new Uint8Array(buffer);
let asInts = new Int32Array(buffer);


/*
* Regular Expressions
* Una expresión regular es un objeto que describe un patrón textual
*/

let pattern = /s$/i; // la cadena que al final tenga una s y la 'i' indica que no importa si es mayuscula o minuscula

let pattern = new RegExp("s$"); // $ metacaracter especial (flag)


/*
* Metacaracteres en expresiones regulares:
* ^ $ . * + ? = ! : | / \ ( ) [ ] { }
* 
*
* Clases de caracteres
* Una clase de caracter coincide con cualquier caracter que contenga
*
* . :  Cualquier carácter excepto nueva línea u otro terminador de línea Unicode. O, si la expresión regular usa la marca s,
* 		 entonces un punto coincide con cualquier carácter, incluidos los terminadores de línea.
* ^ Haga coincidir el comienzo de la cadena o, con la bandera m, el comienzo de una línea.
* $ Haga coincidir el final de la cadena y, con la bandera m, el final de una línea.
* \b Coincide con el límite de una palabra. Es decir, haga coincidir la posición entre un carácter \w y un carácter \W o entre un carácter \w y el principio o el final de una cadena. (Tenga en cuenta, sin embargo, que [\b] coincide con retroceso).
* \B Coincidir con una posición que no sea un límite de palabras.
* 
*/

let pattern = /[abc]/; // Coincide con cualquiera de las letras a, b y c
let pattern = /[^abc]/; // Concide con cualquier caracter que no sea a, b o c
let pattern = /[a-z]/; // Coincide con cualquier caracter en minuscula del alfabeto latino
let pattern = /[a-zA-Z]/; // igual tambien mayusculas
let pattern = /[a-zA-Z0-9]/; // igual tambien numeros
let pattern = /[...]/; // Cualquier caracter entre corchetes
let pattern = /[^...]/; // Cualquier caracter que no este entre corchetes

/*
* Repeticiones en expresiones regulares
* Son patrones más complejos que utilizan una sintaxis que especifica cuántas veces se puede
* repetir un elemento
* {n, m}: Esto significa que coincide con el elemento anterior almenos n veces pero no mas de m veces
* {n,}: Coincide con el elemento anterios n o más veces.
* {m}: Coincide con n apariciones del elemento anterior
* ?: Coincide con cero o una apariciones del elemento anterior, significa que es opcional
*		 tambien se representa {0, 1}
* +: Coincide con una o más ocurrencias del elemento anterior
*		 igual que  {1, }
* *: coincide con cero o mas ocurrencias del elemento anterior: {0, }
*
* 
*	\w Cualquier carácter de palabra ASCII. Equivalente a [a-zA-Z0-9_].
*	\W Cualquier carácter que no sea un carácter de palabra ASCII. Equivalente a [^a-zA-Z0-9_].
*	\s Cualquier carácter de espacio en blanco Unicode.
*	\S Cualquier carácter que no sea un espacio en blanco Unicode.
*	\d Cualquier dígito ASCII. Equivalente a [0-9].
*	\D Cualquier carácter que no sea un dígito ASCII. Equivalente a [^0-9].
*	[\b]	Un retroceso literal (caso especial).
* (? = p) Una afirmación de anticipación positiva. Requiere que los siguientes caracteres coincidan con el patrón p, pero no los incluyas en la coincidencia.
* (?!p) Una afirmación de anticipación negativa. Requiere que los siguientes caracteres no coincidan con el patrón p.
*/

let pattern = /\d/; // Coincide con un digito entre 0 y 9
let pattern = /\d\d/; // Coincide con dos digitos entre 0 y 9

let pattern = /\d{2,4}/; // Coincide entre 2 y 4 digitos
let pattern = /\w{3}\d?/; // Coincide tres caracteres de palabra y un digito opcional

let pattern = /\s+java\s+/; // Coincide con java con uno o mas espacios antes y despues

let pattern = /[^(]*/; // Coincide con 0 o mas caracteres que no sean parentesis abiertos



/*
* Flags
* 
* g: Eto significa global. Es decir que pretendemos usarla para encontrar todas las coincidencias
* dentro de una cadena en lugar de simplemente encontrar la primera coincidencia.
* i: Especifica que la coincidencia no debe distinguir entre mayusculas y minusculas
* m: Especifica que la coincidencia debe realizarse en modo multilinea.
* s: Es util cuando se trabaja con texto que incluye nuevas lineas. Es similar a la m
* u: Significa Unicode. Esto hace que la expresion coincida con los puntos de Unicode completos, en lugar de coincidir con los valores de 16 bits.
* 	 Si no se usa esta bandera, las expresiones regulares no funcionaran bien con textos que utilizan emojis y otros caracteres como caracteres chinos.
* y: Esta bandera indica que la expresion regular es sticky (pegajosa) debe coincidir al principio de una cadena
*		 o al primer caracter que sigue a la coincidencia anterior.
*/



/*
* Metodos de String para coincidencia de patrones.
*
* search: Toma un argumento de expresion regular y devuelve la primera subcadena coincidente o -1 si no encuentra coincidencias
* replace: lo que hace es una operación de busqueda y reemplazo. Como primer argumento toma una expresion regular, y como segundo
* 				 argumento, una cadena de reemplazo.
* Match: Este metodo toma una expresion regular como unico argumento y devuelve una matriz que contiene los resultados de la coincidencia,
*				 Si no encuentra coincidencias devuelve null
*/

console.log("JavaScript".search(/script/ui));

console.log("Python".search(/script/ui));
​
let text = "javascript";
​
text = text.replace(/javascript/gi, "JavaScript");
​
console.log(text);


let times = "15 times 15 is 225";
console.log(times.replace(/\d+/gu, n => parseInt(n).toString(16))); // Transformamos lo numeros en hexadecimal

let text = "7 plus 8 equals 15";
console.log(text.match(/\d+/g)); 
// [7, 8, 14]

// Ejemplo match

let url = /(\w+):\/\/([\w.]+)\/(\S*)/;
let text = "visit my blog https://zoom.us/j/92769666327?pwd=bU5vQTFBbC81LzVPamFBd0Y3UEJydz09";
let match = text.match(url);
let fullUrl, protocol, host, path;

if (match != null) {
	fullUrl = match[0];
	protocol = match[1];
	host = match[2];
	path = match[3];
}

console.log(`match: ${match}`);
console.log(`fullUrl: ${fullUrl}`);
console.log(`protocol: ${protocol}`);
console.log(`host: ${host}`);
console.log(`path: ${path}`);
console.log(`index: ${match.index}`);
console.log(`index: ${match.input}`);
console.log(`index: ${match.groups}`);


/*
* Split: Este metodo divide la cadena en una matriz utilizando como argumento un separador.
*/

console.log("1,2,3".split(","));
console.log("1,2,3,\n4, 5".split(/\s*,\s*/));

const htmlTag = /<([^>]+)>/;  // < followed by one or more non->, followed by >
console.log("Testing<br/>1,2,3".split(htmlTag));  // => ["Testing", "br/", "1,2,3"]



/*
* Date and Times:
* La clase date es la api de javascript para trabajar con fechas y horas.
*/

let startTime = Date.now();

let now = new Date();
console.log(now);

let epoch = new Date(0);
console.log(epoch);

let century = new Date(2100, // año
	0, // enero
	1, // primero del mes
	2, 3, 4, 5); // 02:03:04:005 Hora local
console.log(century);

let century2 = new Date(2100, // año
	0, // enero
	1, // primero del mes
	); // deja las horas en cero, media noche
console.log(century2);

/*
* UTC: tiempo universal cordinado
* Es el principal estandar de tiempo por el cual el mundo regula los relojes
*/

let century3 = Date.UTC(2100,0,1);
console.log(century3); // devulve una marca de tiempo en milisegundos

let century4 = new Date(Date.UTC(2100,0,1)); // convertirlo en fecha normal
console.log(century4);

console.log(now.getDay());
console.log(now.getMonth());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());
console.log(now.getTimezoneOffset());
console.log(now.getDate());


console.log(now.getUTCDay());
console.log(now.getUTCMonth());
console.log(now.getUTCFullYear());
console.log(now.getUTCHours());
console.log(now.getUTCMinutes());
console.log(now.getUTCSeconds());
console.log(now.getUTCMilliseconds());
console.log(now.getUTCDate());


console.log(now);
now.setDate(30);
now.setMonth(05);
now.setFullYear(1996);
now.setHours(07);
now.setMinutes(23);
now.setSeconds(50);
now.setMilliseconds(30);
console.log(now);


console.log(now);
now.setUTCDate(28);
now.setUTCMonth(01);
now.setUTCFullYear(1964);
now.setUTCHours(04);
now.setUTCMinutes(43);
now.setUTCSeconds(20);
now.setUTCMilliseconds(22);
console.log(now);

// Javascript maneja las fechas en milisegundos
// Admite 8.640.000.000.000.000 de milisegundos. equivale a 270.000 años

now.setTime(now.getTime()+30000); // Agrega 30 segundos
console.log(now);


let endTime = Date.now();

console.log("Tiempo de ejecución: " + (endTime-startTime));

// Convertir fecha a texto con toString

let fechaText = now.toString();
console.log(fechaText);

let fechaTextUTC = now.toUTCString();
console.log(fechaTextUTC);

// Este formato imprime Año-mes-dia hora:minutos:segundos.milisegundos. La T separa la fecha de la hora
// La Z especifica hora local
let toIsoString = now.toISOString(); 
console.log(toIsoString);

console.log(now.toLocaleString()); // convertir a fecha local

console.log(now.toDateString()); // Transformacion solo fecha

console.log(now.toLocaleDateString()); //

console.log(now.toTimeString());

console.log(now.toLocaleTimeString());

// Transformacion de cadenas a fechas, queda en milisegundos
let transform = Date.parse("2021/01/06");
console.log(transform);


/*
* Class Error -> throws
*
*
*
*/

class HTTPError extends Error {
	
	constructor (status, statusText, URL) {
		super(`${status} ${statusText}: ${URL}`);	

		this.status = status;
		this.statusText = statusText;
		this.URL = URL;
	}
	
	get name () {
		return "HTTPError"; 
	}	
	
}

let error = new HTTPError(404, "Not Found", "http://example.com");
console.log(error.status);
console.log(error.message);
console.log(error.URL);

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

let errorNumerico = new NumberFormatError("Multiplicación", "Parse Text", "R");
console.log(errorNumerico.operacion);
console.log(errorNumerico.statusText);
console.log(errorNumerico.numero);


class DateFormatError extends Error {
	
	constructor (operacion, statusText, fecha) {
		super(`${operacion} ${statusText}: ${fecha}`);	

		this.operacion = operacion;
		this.statusText = statusText;
		this.fecha = fecha;
	}
	
	get name () {
		return "DateFormatError"; 
	}	
	
}

let errorDate = new DateFormatError("Parse", "Invalid Date", "2020/23/23");
console.log(errorDate.operacion);
console.log(errorDate.statusText);
console.log(errorDate.fecha);

function validateNumero(numero) {
	let condicion = /[^0-9]+/;
	if (numero.match(condicion).length == null) {
		throw new NumberFormatError("Is Number", "El valor no es un numero.", numero);
	}
}

try {
	validateNumero("x");
} catch (error) {
	console.error(error.name);
	console.error(error.message);
	console.error(error.stack);
}

function validaFecha (fecha) {
	let condicion = /\d{1,2}\/\d{1,2}\/\d{4}/; // Formato de fecha dd/mm/aaaa
	let condicion2 = /\d{1,2}\-\d{1,2}\-\d{4}/; // Formato de fecha dd-mm-aaaa
	if (fecha.match(condicion) == null && fecha.match(condicion2) == null) { 
		throw new DateFormatError("DateFormat", "Formato de fecha no valido", fecha);
	}
}

try {
	validaFecha("22/22/2222");
} catch (error) {
	console.error(error.operacion);
	console.error(error.message);
	console.error(error.stack);
}


/*
* Serializaciones
* Cuando se va a transmitir datos a traves de la red, necesitamos convertir estructuras de datos en cadenas y para esto necesitamos serializar
* la mejor forma para serializar estructuras de datos es utilizando JSON
* Admite caracteres, cadenas, numeros primitivos(enteros dobles), booleanos, matrices y objectos javascript.
* No Admite maps, set, regex (regular expresion), Arrays types y Dates.
*
* JSON.stringify() : para serializar
* JSON.parse() : para deserializar
*/

let object = {
	s:  "",
	n: 0,
	a: [true, false, null]
};

let serializacion = JSON.stringify(object);
let deserializacion =  JSON.parse(serializacion);

console.log(serializacion);
console.log(deserializacion);

console.log(JSON.stringify(object, null, 2));
console.log(JSON.parse(JSON.stringify(object, null, 2))); // El parse ignora los espacios (sangria) 


/*
* Api internacionalización
* Nos permite formatear numeros, con formato de moneda, o porcentajes, etc...
*
*/

let euros =  Intl.NumberFormat("es", {style: "currency", currency: "EUR"});
console.log(euros.format(10));

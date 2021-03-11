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
*
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



































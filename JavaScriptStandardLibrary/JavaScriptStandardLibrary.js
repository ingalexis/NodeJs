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




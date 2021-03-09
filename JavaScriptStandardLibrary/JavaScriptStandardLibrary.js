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


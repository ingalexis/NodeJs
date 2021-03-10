function sieve(n) {
	let arrayNumeros = new Uint8Array(n + 1);
	let maximoMultiplo = Math.floor(Math.sqrt(n));
	let numeroNoRayado = 2;
	while (numeroNoRayado <= maximoMultiplo) {
		for (let index = 2 * numeroNoRayado; index <= n; index+=numeroNoRayado) {
			arrayNumeros[index] = 1;
		}
		while(arrayNumeros[++numeroNoRayado])
		;
	}
	while (arrayNumeros[n]) {
		n--;
	}
	return n;
}
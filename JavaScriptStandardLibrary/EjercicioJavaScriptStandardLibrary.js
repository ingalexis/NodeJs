

class Parqueadero {

	constructor(cupo) {
		this.parqueados = new Set();
		this.cupo = cupo;		
	}
	
	parquear(placa) {
		if (!this.parqueados.has(placa)) {
			if (this.cupo > this.parqueados.size) {
				this.parqueados.add(placa);
				console.log("Carro registrado.");
			} else {
				console.log("Cupo maximo en el parqueadero.");
			}
		} else {
			console.log("Imposible carro ya registrado.");
		}
	}
	
	registrarSalida(placa) {
		if (this.parqueados.has(placa)) {
			this.parqueados.delete(placa);
			console.log("Carro despachado.");			
		} else {
			console.log("Carro no registrado.");
		}
	}
	
	totalParqueados() {
		console.log("Carros parqueados: " + this.parqueados.size);
	}
	
}


let miParqueadero = new Parqueadero(5);

miParqueadero.parquear("FP-1");
miParqueadero.parquear("FP-2");
miParqueadero.parquear("FP-3");
miParqueadero.parquear("FP-4");
miParqueadero.parquear("FP-4");
miParqueadero.parquear("FP-5");
miParqueadero.parquear("FP-6");

miParqueadero.totalParqueados();

miParqueadero.registrarSalida("FP-4");
miParqueadero.registrarSalida("FP-3");
miParqueadero.registrarSalida("FP-4");

miParqueadero.totalParqueados();

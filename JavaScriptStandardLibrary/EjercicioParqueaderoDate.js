
class Parqueadero {

	constructor(cupo, pesoFraccion) {
		this.parqueados = new Map();
		this.cupo = cupo;	
		this.pesoFraccion = pesoFraccion;
		console.log("########## THIS IS MY PARKING ##########");
	}
	
	parquear(placa, horaIngreso) {
		if (!this.parqueados.has(placa)) {
			if (this.cupo > this.parqueados.size) {
				this.parqueados.set(placa, horaIngreso);
				console.log("[" + new Date(horaIngreso).toLocaleString() + "] Carro registrado. " + placa );
			} else {
				console.log("Cupo maximo en el parqueadero.");
			}
		} else {
			console.log("Imposible carro ya registrado.");
		}
	}
	
	registrarSalida(placa, horaSalida) {
		if (this.parqueados.has(placa)) {
			miParqueadero.calcularCobro(placa, horaSalida);
			this.parqueados.delete(placa);
			console.log("[" + new Date(horaSalida).toLocaleString() + "] Carro despachado. " + placa);			
		} else {
			console.log("Carro no registrado.");
		}
	}
	
	totalParqueados() {
		console.log("########## Total Carros Parqueados ##########");
		console.log("Carros parqueados: " + this.parqueados.size);
		console.log("########################################");
	}
	
	listarCarros() {
		console.log("########## Listado Carros Parqueados ##########");
		this.parqueados.forEach((horaIngreso, placa) => console.log(`|Placa: ${placa} | Hora Ingreso: ${new Date(horaIngreso).toLocaleString()}|`));
		console.log("########################################");
	}
	
	calcularCobro(placa, horaSalida) {
		let horaEntrada = this.parqueados.get(placa);
		let totalMinutos  = (horaSalida - horaEntrada) / 60000;
		console.log("Total cobro parqueadero: $" + totalMinutos * this.pesoFraccion);
	}
	
}


let miParqueadero = new Parqueadero(5, 60);

let fecha = new Date(2021,02,12,08,00,00);
console.log("########################################");
miParqueadero.parquear("FP-1", fecha.setMinutes(fecha.getMinutes() + 20 ));
miParqueadero.parquear("FP-2", fecha.setMinutes(fecha.getMinutes() + 15 ));
miParqueadero.parquear("FP-3", fecha.setMinutes(fecha.getMinutes() + 30 ));
miParqueadero.parquear("FP-4", fecha.setMinutes(fecha.getMinutes() + 18 ));
miParqueadero.parquear("FP-4", fecha.setMinutes(fecha.getMinutes() + 22 ));
miParqueadero.parquear("FP-5", fecha.setMinutes(fecha.getMinutes() + 5 ));
miParqueadero.parquear("FP-6", fecha.setMinutes(fecha.getMinutes() + 20 ));
console.log("########################################");

miParqueadero.totalParqueados();

miParqueadero.listarCarros();

miParqueadero.registrarSalida("FP-4", fecha.setMinutes(fecha.getMinutes() + 20 ));
miParqueadero.registrarSalida("FP-3", fecha.setMinutes(fecha.getMinutes() + 60 ));
miParqueadero.registrarSalida("FP-4", fecha.setMinutes(fecha.getMinutes() + 23 ));

miParqueadero.totalParqueados();

miParqueadero.listarCarros();

miParqueadero.registrarSalida("FP-1", fecha.setMinutes(fecha.getMinutes() + 40 ));

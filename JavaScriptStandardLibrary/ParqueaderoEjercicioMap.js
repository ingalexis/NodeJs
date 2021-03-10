
class Parqueadero {

	constructor(cupo, pesoFraccion) {
		this.parqueados = new Map();
		this.cupo = cupo;	
		this.pesoFraccion = pesoFraccion;
	}
	
	parquear(placa, horaIngreso) {
		if (!this.parqueados.has(placa)) {
			if (this.cupo > this.parqueados.size) {
				this.parqueados.set(placa, horaIngreso);
				console.log("Carro registrado.");
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
			console.log("Carro despachado.");			
		} else {
			console.log("Carro no registrado.");
		}
	}
	
	totalParqueados() {
		console.log("Carros parqueados: " + this.parqueados.size);
	}
	
	listarCarros() {
		this.parqueados.forEach((horaIngreso, placa) => console.log(`|Placa: ${placa} | Hora Ingreso: ${horaIngreso}|`));
	}
	
	calcularCobro(placa, horaSalida) {
		let arrHoraSalida = horaSalida.split(':');
		let minutosSalida = parseInt(arrHoraSalida[0]) * 60 + parseInt(arrHoraSalida[1]);
		let arrHoraEntrada = this.parqueados.get(placa).split(':');
		let minutosEntrada = parseInt(arrHoraEntrada[0]) * 60 + parseInt(arrHoraEntrada[1]);
		let totalMinutos  = minutosSalida - minutosEntrada;
		console.log("Total cobro parqueadero: $" + totalMinutos * this.pesoFraccion);
	}
	
}


let miParqueadero = new Parqueadero(5, 60);

miParqueadero.parquear("FP-1", "8:00");
miParqueadero.parquear("FP-2", "9:00");
miParqueadero.parquear("FP-3", "9:12");
miParqueadero.parquear("FP-4", "9:18");
miParqueadero.parquear("FP-4", "9:19");
miParqueadero.parquear("FP-5", "12:30");
miParqueadero.parquear("FP-6", "12:00");

miParqueadero.totalParqueados();

miParqueadero.registrarSalida("FP-4", "10:25");
miParqueadero.registrarSalida("FP-3", "12:20");
miParqueadero.registrarSalida("FP-4", "15:30");

miParqueadero.totalParqueados();

miParqueadero.listarCarros();

/*
* NodeJS
*
* Buffers
* Es un tipo de archivo que nos ayuda a leer datos de archivos o de la red, buffer es una secuencia de bytes en lugar  de una secuencia de
* caracteres. Buffer es una subclase de la clase Uint8Array, buffer esta diseñado para operar con cadenas de JavaScript
* se pueden inicializar  a partir  de cadena de caracteres o convertirse a cadena de caracteres.
* Asigna a cada carecter a un numero entero.
*
* Codificación admitidas por Buffer
* - UTF-8 (valor por defecto)
* - Unicode
* - UTF-16LE 
* - Latin1
* - ASCII
* - Hexadecimal
* - Base64
*/

// node --trace-uncaught Node.js --arg1 --arg2 nombre
// node -p -e "process.env"

let buffer = Buffer.from([0x41, 0x42, 0x43]);
console.log(buffer.toString());
console.log(buffer.toString("hex"));

let computer = Buffer.from("IBM 3111", "ascii");
console.log(computer.toString("ascii"));
console.log(computer.subarray(0, 3).map(x => x + 1).toString());

for (let i = 0; i < computer.length; i++) {
	computer[i]--; 
}

console.log(computer.toString());
console.log(computer.toString("ascii"));

let ceros = Buffer.alloc(1024);
console.log(ceros);

let unos = Buffer.alloc(128, 1);
console.log(unos);

let patterns = Buffer.alloc(1024, "DBEF", "hex");
console.log(patterns);

// Eventos

const EventEmitter = require('events');
const net = require('net');

let server = new net.Server();
console.log(server instanceof EventEmitter);

server.on('connection', socket => {
	socket.end("Hello World!!!", "utf-8");
});

/*
* Streams
* Readable: Fuentes de datos, esto devuelve un fs.createReadStream
* Writeable: Receptores o destinatarios de datos, devuelve un fs.createWriteStream
* Duplex:  combinan los dos anteriores(Readable, Writeable)
* Transform: transformadores, pueden leer y escribir, los datos que leen y escriben en un flujo de datos se transforman solo en legibles (Readable)
*/
const fs = require('fs');

function pipeFileToSocket(filename, socket) {
	fs.createReadStream(filename).pipe(socket);
}

// process

console.log(process.argv);
console.log(process.arch);// arquitectura del cpu
console.log(process.cwd()); // directorio actual
console.log(process.chdir("./")); // setiar el directorio actual
console.log(process.cpuUsage()); // Uso de la cpu
console.log(process.env);

const os = require('os');

console.log(os.arch());
console.log(os.cpus);
console.log(os.type);

console.log("#### process ####");
console.log(process.argv); // Una matriz de argumentos de la línea de comandos.
console.log(process.arch); // La arquitectura de la CPU: "x64", por ejemplo.
console.log(process.cwd()); // Devuelve el directorio de trabajo actual.
//console.log(process.chdir()); // Establece el directorio de trabajo actual.
console.log(process.cpuUsage()); // Informa el uso de la CPU.
console.log(process.env); // Un objeto de variables de entorno.
console.log(process.execPath); // La ruta absoluta del sistema de archivos al ejecutable del nodo.
//console.log(process.exit()); // Termina el programa.
console.log(process.exitCode); // Un código entero que se informará cuando se cierre el programa.
console.log(process.getuid); // Devuelve el ID de usuario de Unix del usuario actual.
console.log(process.hrtime.bigint()); // Devuelve una marca de tiempo de nanosegundos de "alta resolución".
//console.log(process.kill()); // Envía una señal a otro proceso.
console.log(process.memoryUsage()); // Devuelve un objeto con detalles de uso de memoria.
//console.log(process.nextTick()); // Como setImmediate (), invoca una función pronto.
console.log(process.pid); // El ID de proceso del proceso actual.
console.log(process.ppid); // El ID del proceso padre.
console.log(process.platform); // El sistema operativo: "linux", "darwin" o "win32", por ejemplo.
console.log(process.resourceUsage()); // Devuelve un objeto con detalles de uso de recursos.
//console.log(process.setuid()); // Establece el usuario actual, por id o nombre.
console.log(process.title); // El nombre del proceso que aparece en los listados `ps`.
console.log(process.umask()); // Establece o devuelve los permisos predeterminados para nuevos archivos.
console.log(process.uptime()); // Devuelve el tiempo de actividad de Node en segundos.
console.log(process.version); // Cadena de versión de Node
console.log(process.versions); // Cadenas de versión para las bibliotecas de las que depende Node.

console.log("##### OS ####");
console.log(os.arch()); // Devuelve la arquitectura de la CPU. "x64" o "arm", por ejemplo.
console.log(os.constants); // Constantes útiles como os.constants.signals.SIGINT.
console.log(os.cpus()); // Datos sobre los núcleos de la CPU del sistema, incluidos los tiempos de uso.
console.log(os.endianness()); // El endianness nativo de la CPU "BE" o "LE".
console.log(os.EOL); // El terminador de línea nativo del sistema operativo: "\ n" o "\ r \ n".
console.log(os.freemem()); // Devuelve la cantidad de RAM libre en bytes.
console.log(os.getPriority()); // Devuelve la prioridad de programación del sistema operativo de un proceso.
console.log(os.homedir()); // Devuelve el directorio de inicio del usuario actual.
console.log(os.hostname()); // Devuelve el nombre de host de la computadora.
console.log(os.loadavg()); // Devuelve los promedios de carga de 1, 5 y 15 minutos.
console.log(os.networkInterfaces()); // Devuelve detalles sobre la red disponible. conexiones.
console.log(os.platform()); // Devuelve OS: "linux", "darwin" o "win32", por ejemplo.
console.log(os.release()); // Devuelve el número de versión del SO.
//console.log(os.setPriority()); // Intenta establecer la prioridad de programación para un proceso.
console.log(os.tmpdir()); // Devuelve el directorio temporal predeterminado.
console.log(os.totalmem()); // Devuelve la cantidad total de RAM en bytes.
console.log(os.type()); // Devuelve SO: "Linux", "Darwin" o "Windows_NT", p. ej.
console.log(os.uptime()); // Devuelve el tiempo de actividad del sistema en segundos.
console.log(os.userInfo()); // Devuelve uid, nombre de usuario, inicio y shell del usuario actual.


/*
* Modulo FS (FileSystem)
*
* Es una Api para trabajar con archivos y directorios
* La mayoria de sus funciones son asincronas, pero tambien tiene su contraparte sincrona
* fs.readFile() > fs.readFileSync()
* fs.promises.readFile() Despues de la versión 10 de NodeJS
*
*
* PATHS
*
* 
*/

console.log(process.cwd);
console.log(__filename); // Ruta absoluta actual del archivo que contiene el codigo actual es decir Node.js
console.log(__dirname); // Ruta directorio actual que contiene _filename
console.log(os.homedir()); // Muestra la ruta del directorio home del usuario actual

const path = require("path");

console.log(path.sep); // Define el / o \ segun el sistema operativo

let directorio = "src/pkg/test.js";
console.log(path.basename(directorio));
console.log(path.extname(directorio));
console.log(path.dirname(directorio));
console.log(path.basename(path.dirname(directorio)));

// Normalize: Corrige las rutas

console.log(path.normalize("a/b/c/../d/"));
console.log(path.normalize("a/./b"));
console.log(path.normalize("//a//b//"));


// Joins

console.log(path.join("src","pkg","t.js"));

// Resolve

console.log(path.resolve()); // Es similar a process.cwd()
console.log(path.resolve("t.js")); // Es igual a path.join(process.cwd(),"t.js")
console.log(path.resolve("/tmp","t.js"));
console.log(path.resolve("/a","/b","t.js"));

console.log(path.posix);

// Lectura de archivos

// sincrona
const fs2 = require("fs");

let buffer2 = fs2.readFileSync("Directorios.js");
console.log(buffer2);
let text = fs2.readFileSync("Directorios.js", "utf-8");
console.log(text);

// asincrona

fs2.readFile("Directorios.js", (err, buffer) => {
	if(err) {
		console.log(err);
	} else {
		console.log(buffer);
	}
});

// Lectura con promises

fs2.promises.readFile("Directorios.js","utf-8")
	.then(processFileText => {
		console.log(processFileText);
	}).catch(handledReadError => {
		console.log(handledReadError);
	});

// Lectura con async await

console.log("##### async await");
async function processText(fileName, encoding="utf-8"){
	let text2 = await fs2.promises.readFile(fileName, encoding);
	console.log(text2);
};

/*
* Salida estandar a niver de contenedores
*
* Herramientas monitorización
* Kibana
* Cloud Trail
* Grafana
* Prometheus
*/

console.log("###### Salida Estandar");
function printFile(fileName, encoding = "utf-8") {
	fs2.createReadStream(fileName, encoding).pipe(process.stdout);
}


printFile("Directorios.js");

// Escribir Archivos

console.log("##### Escribir archivos");

// sincrona

let configuracion = {
	name: "Alexis",
	lastName: "Sierra"
};
fs2.writeFileSync(path.resolve(__dirname, "configuracion.json"), JSON.stringify(configuracion));

fs2.writeFile(path.resolve(__dirname, "configuracion.json"), JSON.stringify(configuracion), err => {
	if(err) {
		console.log(err);
	} else {
		console.log("Se creo perfectamente");
	}
});

fs2.appendFile(path.resolve(__dirname, "configuracion.json"), "configuracion extra", (err) => {
	if(err){
		console.log(err)
	} else{
		let textConfiguracion = fs2.readFileSync("configuracion.json", "utf-8");
		console.log(textConfiguracion);
	}
});


// fs.appendFileSync, fs.promises.appendFile

fs2.appendFileSync("configuracion.json", " appendFileSync", "utf-8"); // no funciona
fs2.appendFileSync(path.resolve(__dirname, "configuracion.json"), "appendFileSync2", (err) => { // no funciona
	if(err){
		console.log(err)
	} else{
		let textConfiguracion = fs2.readFileSync("configuracion.json", "utf-8");
		console.log(textConfiguracion);
	}
});

fs.promises.writeFile("configuracion2.json"," promises","utf-8")
	.then(processFileText => {
		console.log(processFileText);
	}).catch(handledReadError => {
		console.log(handledReadError);
	});

async function processTextWrite(fileName, text, encoding="utf-8"){
	await fs2.promises.writeFile(fileName, text, encoding);
};

processTextWrite("configuracion3.json", " await");

fs.promises.appendFile("configuracion.json"," promises","utf-8")
	.then(processFileText => {
		console.log(processFileText);
	}).catch(handledReadError => {
		console.log(handledReadError);
	});

async function processText2(fileName, text, encoding="utf-8"){
	await fs2.promises.appendFile(fileName, text, encoding);
};

processText2("configuracion.json", " await");

/*
* Metadatos de archivos
*/

let stats = fs.statSync("configuracion.json");
console.log(stats.isFile());
console.log(stats.isDirectory());
console.log(stats.size); // el tamaño del archivo en bytes
console.log(stats.atime); // fecha de la ultima vez que fue leido
console.log(stats.mtime); // fecha de la ultima vez que fue modificado
console.log(stats.uid); // id del usuario dueño del archivo
console.log(stats.gid); // id del grupo del dueño del archivo
console.log(stats.mode.toString(8)); // imprime un octal en string de los permisos del archivo


/*
* Copia de archivos
*/

fs.copyFileSync("configuracion.json", "configuracionCopia.json");

// Escribir de  0 a 100 hacia abajo

let output = fs.createWriteStream("configuracionRepeat.json");
for(let i = 0; i <= 100; i++) {
	output.write(`${i}\n`);
}
console.log(output.end());


/**
 * HTTP, HTTPS, HTTP2
 * 
 * Estos son os módulos por excelencia de NodeJS, que son implementaciones de los protocolos HTTP.
 * Estas implementaciones tienen funciones relativamente de bajo nivel
 * 1. Crear un nuevo objeto de servidor
 * 2. Llamar al listener para que se escuchen solicitudes de un puerto especifico
 * 3. Registrar un controlador de eventos para eventos de request
 */
console.log("##### HTTP");
const http = require('http'); // usar https si se tiene certificado
const url = require('url'); // para analizar urls
const path2 = require('path'); // para manipular ruta de file system
const fs3 = require('fs'); // leer archivos

function serve(routeDirectory, port) {
	let server =  new http.Server();
	server.listen(port);
	console.log(`listening on port: ${port}`);
	server.on("request", (request, response) => { // cuando lleguen solicitudes las manipulamos con esta función
		let endpoint = url.parse(request.url).pathname; // obtiene la ruta de la url que trae la solicitud, se ignora los parametros de consulta que se le agreguen
		if (endpoint === "/test/mirror") {
			response.setHeader("Content-Type", "text/plain; charset = UTF-8");
			response.writeHeader(200);
			response.write(`${request.method} ${request.url} HTTP/${request.httpVersion}\r\n`);
			let headers = request.rawHeaders;
			for (let i = 0; i < headers.length; i+=2) {
				response.write(`${headers[i]}: ${headers[i+1]}\r\n`);				
			}
			response.write("\r\n");
			request.pipe(response);
		} else if(endpoint === "/test/file") {			
			let fileName = '';
			console.log("ruta: "+routeDirectory);
			//let fileName = endpoint.substring(1);
			//fileName = fileName.replace(/\.\.\\/g, ""); // No permite ../ en la ruta
			fileName = path2.resolve(routeDirectory); // convertimos una ruta relativa a una ruta absoluta
			let typeFile;
			
			switch(path.extname(fileName)) {
				case ".htm":
				case ".html":
					typeFile = "text/html";
					break;
				case ".js":
					typeFile = "text/javascript";
					break;
				case ".css":
					typeFile = "text/css";
					break;
				case ".png":
					typeFile = "image/png";
					break;
				case ".txt":
					typeFile = "text/plain";
					break;
				default: 
					typeFile = "application/octet-stream";
					break;
			}

			let stream = fs3.createReadStream(fileName);
			stream.once("readable", () => {
				response.setHeader("Content-Type", typeFile);
				response.writeHeader(200);
				stream.pipe(response);
			});

			stream.on("error", (err) => {
				response.setHeader("Content-Type","text/plain; charset = UTF-8");
				response.writeHeader(404); // not found
				response.end(err.message);
			});
		}
	});
}

serve(process.argv[2] || "C:\Users\fasierra\Documents\NodeJs", parseInt(process.argv[3]) || 8000);

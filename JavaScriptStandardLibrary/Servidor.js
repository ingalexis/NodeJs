const http = require('http'); // usar https si se tiene certificado
const url = require('url'); // para analizar urls
const path = require('path'); // para manipular ruta de file system
const fs = require('fs'); // leer archivos

function serve(rootDirectory, port) {
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
		}
	}); 

	serve(process.argv[2] || "/tmp", parseInt(process.argv[3]) || 8000);
}
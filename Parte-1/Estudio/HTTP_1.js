var HTTP = require('http'); //Importa biblioteca http
var FS = require('fs'); // Importa biblioteca de acceso a ficheros
// Crear servidor HTTP
var server = HTTP.createServer( // Crear servidor HTTP
	function(request, response){ // Callback Solicitudes de cliente
		FS.readFile(
			('pubilc', request.url), // Calcula Path: public/path del URL 
			function(err,data){      // Callback: final de lectura del fichero
				if (!err){
					response.writeHead(  // Envío de cabecer HTTP
						200,
						{
							'Content-Type': 'text/html',
							'Content-Length': data.length
						}
						);
					response.end(data); // Envío cuerpo (payload): página HTML
				}
				else{response.end('ERROR');}; // HTTP simplificado, x ahora sirve pero incorrecto
			}
		);
	}
)
server.listen(3000); // Servidor en escucha en el puerto 3000



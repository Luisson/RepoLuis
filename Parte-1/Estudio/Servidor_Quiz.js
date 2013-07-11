var HTTP = require('http');  // Librería HTTP
var URL  = require('url');   // Librería con parser de URLs
var FS   = require('fs');    // Librería de acceso a ficheros

// Crear servidor HTTP, request: es la petición q entre al servidor, que activará la función
// response: respuesta que dará el servidor
HTTP.createServer(function(request, response) {

// Definimos el MODELO, objeto/clase con la función find
var MODEL = {
    find: function (question, action) { // Buscar pregunta en bbdd.txt
      FS.readFile('/home/luisson/RepoLuis/Servidor/bbdd.txt', 'utf-8', function(err, bbdd) { // lee el archivo bbdd del servidor
      																						//bbdd es lo leido??
      																	// La function es el callback de finalización de lectura
        action(err, bbdd.match(new RegExp('^'+question+': .*$','m')));  // Aqui indica la acción a realizar en find (action)
        																// Si encuentar la pregunta devuelve un array 
        																//[match, posicion, "sring"], sino null
      });
    }
  }

// Definimos la VISTA, objeto/clase con la función render que le envía una página al cliente(lo decide CONTROLADOR)
var VIEW = {
    render: function (file, r1) { // envía vista renderizada a cliente, para saber cual leer y q se convierta en data (es lo leido??)
    							  // file es una de la páginas (index o show), r1 es lo obtenido de la bbdd
      FS.readFile(file, 'utf-8', function(err, data) {  // La function es el callback de finalización de lectura
        if (!err) {										// Quiero pensar que data es el resultado de leer el archivo, el contenido
          var data = data.replace(/<%r1%>/, r1); // en el caso de show
          response.writeHead(200, {             // Envía cabecera
            'Content-Type': 'text/html', 
            'Content-Length': data.length 
          }); 
          response.end(data);                   // Envía datos       
        } else { VIEW.error(500, "Server operation Error"); }; // En caso de no poder leer la página
      });
    },
                 // envia error a cliente, escribe la cabecera y el cuerpo que le den como parametros
                 // a la función error
    error: function(code,msg) { response.writeHead(code); response.end(msg);}
  }

 // Aquí está el controlador, CONTROLLER.index
 var CONTROLLER = {
    index: function() { VIEW.render ('/home/luisson/RepoLuis/Servidor/index.html', ""); },

    show: function () { // Show se ejecuta en callback cuando find acaba
      MODEL.find(question, function(err, answer) {
        if (!err) VIEW.render('/home/luisson/RepoLuis/Servidor/show.html',(answer||["Sin respuesta"])[0]);
        else      VIEW.error(500, "Server bbdd Error");
      });
    }
  }


  // Esta es la parte ROUTING, que al conectarse al servidor un cliente, inicialmente le devolverá index.html con CONTROLLER
  // a partir de ahí, el formulario mismo de index.html crea un GET del cliente con el query y entonces el CONTROLLER le enviará a
  // show.html
  var url = URL.parse(request.url, true); // parsea el url enviado, lo deja como un objeto con sus parametros host, query..
  											   // sin estar url-encoded, asi el query tb es un objeto con parametros
  											   // se podra usar url.host, url.path..incluso url.quey.x
  var route    = request.method + ' ' + url.pathname;  // crea ruta GET url.pathname (dirección DENTRO del servidor)
  var question = url.query.preg; // Extrae pregunta de query, si existe. Que vendría del formulario de index.html

  switch (route) {            // Analiza ruta e invoca controlador
    case 'GET /home/luisson/RepoLuis/Servidor/index'   : CONTROLLER.index() ; break;
    case 'GET /home/luisson/RepoLuis/Servidor/show'    : CONTROLLER.show()  ; break;
    default: VIEW.error(400, "Unsupported request");
  }

}).listen(3000); 
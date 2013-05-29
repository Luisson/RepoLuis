// Módulo necesario para acceder a ficheros
var fs = require('fs');

if (process.argv.length != 3){
  console.log('Sintaxis de la llamada: "node contar_palabras <archivo>"');
  process.exit()
}

// Primer intento
function contar_palabras_file(data){

// Cuenta número de coincidencias. 
// [a-zñáéíóúüç]+ : Posible palabra en castellano
// (-[\n\t\v\r\t]*[a-zñáéíóúüç]+)* : (guión seguido (o no) de: línea nueva, ret. de carro,
//                                                           tabulación vert. u horiz. o salto de página
//									continuado por 1 o más letras) --> esto 0 veces(palabra sencilla sin -) 
//																	   o varias veces (con varios guiones)
  return (data.match(/[a-zñáéíóúüç]+(-[\n\t\v\r\t]*[a-zñáéíóúüç]+)*/ig) || []).length ;
}

fs.readFile(
  process.argv[2],
  'utf8',
  function(err, data) {
    console.log('Palabras: ' + contar_palabras_file(data));
  }
);

module.exports = contar_palabras_file;
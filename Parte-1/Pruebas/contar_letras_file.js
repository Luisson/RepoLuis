// Modulo necesario para acceder a ficheros
var fs = require('fs');

if (process.argv.length != 3){
  console.log('Sintaxis de la llamada: "node contar_letras <archivo>"');
  process.exit()
}

// Primer intento
function contar_letras_file (data){

// Cuenta número de matches. 
  return (data.match(/[a-zñáéíóúüç]/ig) || []).length ;
}

fs.readFile(
  process.argv[2],
  'utf8',
  function(err, data) {
    console.log('Letras: ' + contar_letras_file(data));
  }
);

module.exports = contar_letras_file;
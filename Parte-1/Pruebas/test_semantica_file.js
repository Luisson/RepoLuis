// Módulo para utilizar en test
var assert = require('assert');
// Módulos necesarios
var c_l = require('/home/luisson/RepoLuis/Parte-1/Pruebas/contar_letras_file');
var c_p = require('/home/luisson/RepoLuis/Parte-1/Pruebas/contar_palabras_file');
var c_f = require('/home/luisson/RepoLuis/Parte-1/Pruebas/contar_frases_file');

if (process.argv.length != 3){
  console.log('Sintaxis de la llamada: "node contar_letras <archivo>"');
  process.exit()
}
// Lo mismo asi obtengo los datos para probar
var datos;
  
fs.readFile(
  process.argv[2],
  'utf8',
  function(err, data) {
  	datos = data;
    //console.log('Letras: ' + contar_letras_file(data));
  }
);
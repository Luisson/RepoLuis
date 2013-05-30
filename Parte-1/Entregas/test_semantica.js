// Módulo para utilizar en test
var assert = require('assert');
// Módulos necesarios
var c_l = require('/home/luisson/RepoLuis/Parte-1/Entregas/contar_letras');
var c_p = require('/home/luisson/RepoLuis/Parte-1/Entregas/contar_palabras');
var c_f = require('/home/luisson/RepoLuis/Parte-1/Entregas/contar_frases');

// TEST 1 CONTAR LETRAS

assert.equal("10", c_l("¿hola que tal?"),
	                       'A1. Una frase normal' );
assert.equal("26", c_l("Espero tener en cuenta la ñ o la ç"), 
	                       'A2. Ver si tenemos ñ y ç');
assert.equal("25", c_l("¿Contará MAYÚS\rCULAS y acentos?"), 
	                       'A3. Mayúsculas y acentos');
assert.equal("30", c_l("Estaría\f bien la diéresis de cigüeña"),
	                       'A4. Diéresis');
assert.equal("28", c_l("Vere-\nmos con salto de línea y guión."),
	                       'A5. Salto de línea con guión');
assert.equal("20", c_l("Con\t ambas\t tabulaciones"),
	                       'A6. Tabulaciones');
assert.equal("18", c_l("Todo: á(éíó-úüçñA.SDF?G*H"),
	                       'A7. Popurrí');

console.log('Test 1, CONTAR LETRAS: Correcto. 7 Pruebas OK');

// TEST 2 CONTAR PALABRAS

assert.equal("6", c_p("¿hola que tal? Espero que bien"),
	                       'A1. Dos frases normales' );
assert.equal("10", c_p("El niño que vi-\nno con la cigüeña era muy majete"), 
	                       'A2. Salto de línea con guión');
assert.equal("6", c_p("Veamos como se deletrea comandante: c-o-m-a-n-d-a-n-t-e."), 
	                       'A3. Guiones');
assert.equal("12", c_p("Pasamos página\fy seguimos con lo nuestro\n\rretornando\ttabulando horizontal y \vverticalmente"),
	                       'A4. Salto de página, retorno de carro y tabulaciones');
assert.equal("12", c_p("¿Y si (a lo mejor) metemos algún se-\rparador por ahí? {No se}"),
	                       'A5. Separadores');
assert.equal("6", c_p("Ya van unas cuantas***palabras ¿no?"),
	                       'A6. Algo raro');
assert.equal("11", c_p("Última prueba: (palabra) 2345, -dijo él-\r -pues muy bien- contestó el otro. "),
	                       'A7. Popurrí');

console.log('Test 2, CONTAR PALABRAS: Correcto. 7 Pruebas OK');

// TEST 3 CONTAR FRASES

assert.equal("2", c_f("¿hola, que tal? Espero que bien."),
	                       'A1. Dos frases normales' );
assert.equal("4", c_f("El niño que vi-\nno con la cigüeña(era muy majete). Además sabia de todo.A saber quien era."), 
	                       'A2. Salto de línea con guión');
assert.equal("5", c_f("Veamos como se deletrea comandante: c-o-m-a-n-d-a-n-t-e.[que cosas] No Es tan fácil realizar un test; Y menos en condiciones."), 
	                       'A3. Guiones y Separadores');
assert.equal("4", c_f("Veamos saltos\r de retono; O saltos\f de página. ¡Viva! Todo!"),
	                       'A4. Salto de página, retorno de carro y admiraciones.');
assert.equal("3", c_f("Vamos a ver \t que tal; Usando la tabu-\nlaciones, ambas. Primero la horizontal y\v después la vertical"),
	                       'A5. Tabulaciones');
assert.equal("6", c_f("Ahora....Veamos algo de separadores: (separador uno) [separador dos]{separador tres} [y mezcla}"),
	                       'A6. Separadores');
assert.equal("6", c_f("Probar exhaustivamente...No se que\n más hacer: uno, paro ya; dos, sigo hasta el infinito; Pero el infinito es mucho. Asi que pruebo que sin puntuación final no hay frase: esta no cuenta"),
	                       'A7. Popurrí');

console.log('Test 3, CONTAR FRASES: Correcto. 7 Pruebas OK');


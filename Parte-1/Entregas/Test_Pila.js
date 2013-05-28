//Luis Mengual
// Programa para probar el funcionamiento de la pila LIFO
// Sólo con Enteros
// Test_Pila.js
var pila = require('/home/luisson/RepoLuis/Parte-1/Entregas/Pila');

var pi = pila();

a = 1;
b = 2;
c = 3;

// Inserción de objetos en la pila
pi.push(a);
pi.push(b);
pi.push(c);

// Comprobar que los objetos se insertaron en la pila
// pilita = pi.devolver_pila();
// console.log(pilita[0]);
// console.log(pilita[1]);
// console.log(pilita[2]);

// Obtener los objetos de la pila
// LIFO: Last In First Out
c_r = pi.pop()
b_r = pi.pop()
a_r = pi.pop()

// Resultados del text
console.log('¿El último objeto introducido es el primero extraído?');
console.log(c === c_r);
console.log('¿El segundo objeto introducido es el segundo extraído?');
console.log(b === b_r);
console.log('¿El primer objeto introducido es el último extraído?');
console.log(a === a_r);

if ((a === a_r)&&(b === b_r)&&(c === c_r)){
	console.log("=========");
	console.log("Text = OK");
	console.log("=========");}
else{
	console.log("=========");
	console.log("Text = NO OK");
	console.log("=========");}

// Resultado una vez sacados todos los elementos de la pila
v_r = pi.pop();
console.log('El resultado de intentar sacar un objeto de la pila vacía:');
console.log(v_r);
console.log('----------------------------------------------------------');

// Introducir valores para probar el método reset()
a = 1;
b = 2;
c = 3;
pi.push(a);
pi.push(b);
pi.push(c);
console.log('Reintroducimos los valores para probar el reset()');
console.log('La pila queda:');
pila_llena = pi.devolver_pila();
console.log(pila_llena);
// Reseteo de la pila
pi.reset();
console.log('Ejecutamos reset() sobre la pila');
console.log('La pila queda:');
pila_vacia = pi.devolver_pila();
console.log(pila_vacia);
var Persona = require('/home/luisson/RepoLuis/Parte-1/Ejercicios/Persona');

console.log(Persona.num() + ' objetos');
var victor = new Persona("victor", 22);
console.log(victor.resumen());
console.log(victor.resumen_2());
console.log(Persona.num() + ' objetos');
var paco = new Persona("Paco", 42);
console.log(paco.resumen());
console.log(paco.resumen_2());
console.log(Persona.num() + ' objetos');

console.log(typeof Persona)
var luis = new Persona("Luis", 31);
console.log(luis.resumen());
console.log(Persona.num() + ' objetos');
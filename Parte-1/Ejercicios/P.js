function Persona(nombre, edad){
	this.nombre = nombre;
	this.edad = edad;
	Persona.n++;
}

Persona.prototype.resumen = function() {
		return this.nombre + ' tiene ' + this.edad + ' años ';
	}

Persona.prototype.resumen_2 = function() {
		return this.nombre + ' tiene ' + this.edad + ' años ';
	}



Persona.n = 0;

Persona.num = function () {

	return Persona.n;
}

console.log(Persona.num() + ' objetos');
var victor = new Persona("victor", 22);
console.log(victor.resumen());
console.log(victor.resumen_2());
console.log(Persona.num() + ' objetos');
var paco = new Persona("Paco", 42);
console.log(paco.resumen());
console.log(paco.resumen_2());
console.log(Persona.num() + ' objetos');
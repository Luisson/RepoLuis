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

module.exports = Persona;


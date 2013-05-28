// Constructor de la clase "Libro"
//En mayúscula por ser constructor
function Libro(titulo, autor, isbn, precio){

	// En un inicio pensamos que los datos estarán correctos
	var correcto = true;

	// Valores por Defecto
	this.titulo = titulo || "Desconocido";
	this.autor = autor || "Desconocido";
	// Se utilizará el ISBN de 13 dígitos, como caracteres
	this.isbn = isbn || "0000000000000";
	// Numerico
	this.precio = precio || 0.0;

	// Segunda comprobacion (al no ser tipado)
	// Comprobar Titulo
	if (typeof this.titulo !== 'string'){
		console.log("El formato para el Título es incorrecto, debe ser una cadena de caracteres");
		correcto = false;}
	// Comprobar Autor
	if (typeof this.autor !== 'string'){
		console.log("El formato para el Autor es incorrecto, debe ser una cadena de caracteres");
		correcto = false;}
	// Comprobar ISBN
	if (typeof this.isbn !== 'string'){
		console.log("El formato para el ISBN es incorrecto, debe ser una cadena de caracteres");
		correcto = false;}
	else if (this.isbn.length != 13){
		console.log("La cantidad de números para el ISBN deben ser 13, en su caso son: " + this.isbn.length);
		correcto = false;}	
	// QUEDA ASEGURAR QUE SEA SOLO NUMEROS!!!!!!

	// Comprobar Precio
	if (typeof this.precio !== 'number'){
		console.log("El formato para el precio es incorrecto, debe ser numérico");
		correcto = false;}	
	else if (this.precio < 0){
		console.log("El Precio no puede ser inferior a 0 €");	
		correcto = false;}
			
	// A partir de aquí añadiremos el libro al catálogo en caso de estar correcto
	// Al ser una propiedad de clase, se compartirá con todos los objetos de la clase
	 if (correcto){
	 	Libro.catalogo.push(this);
	 }
	else {
	 	console.log("El Libro no se ha introducido al catálogo, por favor introduzca los campos correctamente");
	 }
}

// Creación del Prototipo
// Para definición de los métodos
Libro.prototype.listar_detalles = function() {

		return "Título: " + this.titulo + "; Autor: " + this.autor + "; ISBN: " + this.isbn + ", Precio: " + this.precio + "€";
};

Libro.prototype.precio_rebajado = function (descuento) {
		// Valor por defecto
		var descuento = descuento || 0;
		var desc_correcto = true;
		if (typeof descuento!== 'number'){
			console.log("El formato para el descuento es incorrecto, debe ser numérico");
			desc_correcto = false;}
		else if (descuento > 99){
			console.log("El descuento no puede ser mayor al 99%");
			desc_correcto = false;}
		else if (descuento < 0){
			console.log("El descuento no puede ser menor al 0%");
			desc_correcto = false;}

		// Indicamos si se realiza el descuento
		if (desc_correcto){
			// descuento total
			var descuento_t = (this.precio * descuento)/100;
			this.precio = this.precio - descuento_t;
		}

		else {
			console.log("No se ha realizado el descuento");
		}
}

// Variables y metodos de clase
Libro.catalogo = [];

Libro.listar_catalogo= function () {

	for (i=0; i < Libro.catalogo.length; i++){
		console.log(Libro.catalogo[i].listar_detalles())
	}
}

//**********************************************************************************************
// Prueba Crear un libro
var libro_1 = new Libro("El señor de las moscas", "A saber", "1234567890123", 23);
console.log(libro_1.listar_detalles())
// Prueba de rebaja de Precio
console.log(libro_1.precio);
libro_1.precio_rebajado(3);
console.log(libro_1.precio);
// Prueba de rebaja de Precio
libro_1.precio_rebajado(-3);
libro_1.precio_rebajado(112);
// No error, libro indefinido (SE PUEDE VOLVER ERROR)
var libro_e1 = new Libro();
// Errores Controlados
var libro_e2 = new Libro(1, "A saber", "1234567890123", 23);
var libro_e3 = new Libro("Mago de Oz", 1, "1234567890123", 23);
var libro_e4 = new Libro("Mago de Oz", "A saber", 1, 23);
var libro_e5 = new Libro("Mago de Oz", "A saber", "1234567823", 23);
var libro_e6 = new Libro("Mago de Oz", "A saber", "1234567890123", "23");
var libro_e6 = new Libro("Mago de Oz", "A saber", "1234567890123", -3);

// Pruebas de listar catálogo
console.log(Libro.catalogo.length + ' Libros en el Catálogo');
Libro.listar_catalogo()
var libro_2 = new Libro("El guardián entre el centeno", "A saber", "1222378908756", 12);
var libro_3 = new Libro("El juego de ender", "A saber", "7265318730482", 26);
var libro_4 = new Libro("El señor de los anillos", "A saber", "3451293847563", 15);
var libro_5 = new Libro("Mago de Oz", "A saber", "2345638495030", 68);
console.log(Libro.catalogo.length + ' Libros en el Catálogo');
Libro.listar_catalogo()
var libro_6 = new Libro("Mago de Oz", "A saber", "8765554322235", 34);
var libro_7 = new Libro("Mago de Oz", "A saber", "7875636555463", 9);
var libro_8 = new Libro("Mago de Oz", "A saber", "2244355354432", 44);
var libro_9 = new Libro("Mago de Oz", "A saber", "9876543212345", 36);
console.log(Libro.catalogo.length + ' Libros en el Catálogo');
Libro.listar_catalogo()
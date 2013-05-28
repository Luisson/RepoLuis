//Luis Mengual
// Programa para probar el funcionamiento del objeto Libro
// y del catálogo asociado
// Test_Libro.js
var Libro = require('/home/luisson/RepoLuis/Parte-1/Entregas/Libro');
// Prueba Crear un libro
console.log('PRUEBA DE CREACIÓN DE LIBRO')
var libro_1 = new Libro("El señor de las moscas", "William Golding", "1234567890123", 23);
console.log(libro_1.listar_detalles())
console.log('---------------------------------')
// Prueba de rebaja de Precio
console.log('PRUEBA DE DESCUENTO')
console.log('Precio inicial')
console.log(libro_1.precio);
libro_1.precio_rebajado(10);
console.log('Precio tras realizar un 10% de descuento')
console.log(libro_1.precio);
console.log('---------------------------------')
// Prueba de rebaja de Precio
console.log('Prueba de errores con el descuento, -3% y 112%')
libro_1.precio_rebajado(-3);
libro_1.precio_rebajado(112);
console.log('---------------------------------')
// No error, libro indefinido (SE PUEDE VOLVER ERROR)
console.log('Prueba de Libro con valores por defecto, no debe dar error, y aparecer en el catálogo')
var libro_e1 = new Libro();
console.log('---------------------------------')
// Errores Controlados
console.log('Prueba de errores en la creación de libros, no deben aparecer en el catálogo')
var libro_e2 = new Libro(1, "A saber", "1234567890123", 23);
var libro_e3 = new Libro("No debe aparecer", 1, "1234567890123", 23);
var libro_e4 = new Libro("No debe aparecer", "A saber", 1, 23);
var libro_e5 = new Libro("No debe aparecer", "A saber", "1234567823", 23);
var libro_e6 = new Libro("No debe aparecer", "A saber", "1234567890123", "23");
var libro_e6 = new Libro("No debe aparecer", "A saber", "1234567890123", -3);
console.log('---------------------------------')
// Pruebas de listar catálogo
console.log('Listamos Catálogo, deben aparecer el inicial y el de por defecto')
console.log(Libro.catalogo.length + ' Libros en el Catálogo');
Libro.listar_catalogo()
console.log('---------------------------------')
console.log('Añadimos 4 libros más y listamos el Cátalogo')
var libro_2 = new Libro("El guardián entre el centeno", "J. D. Salinger", "1222378908756", 12);
var libro_3 = new Libro("El juego de ender", "Orson Scott Card", "7265318730482", 26);
var libro_4 = new Libro("El señor de los anillos", "J. R. R. Tolkien", "3451293847563", 15);
var libro_5 = new Libro("El elfo oscuro", "R.A. Salvatore", "2345638495030", 68);
console.log(Libro.catalogo.length + ' Libros en el Catálogo');
Libro.listar_catalogo()
console.log('---------------------------------')
console.log('Añadimos 4 libros más y listamos el Cátalogo')
var libro_6 = new Libro("El resplandor", "Stephen King", "8765554322235", 34);
var libro_7 = new Libro("El rey de Katoren", "Jan Terlouw", "7875636555463", 9);
var libro_8 = new Libro("El diario de Ana Frank", "Ana Frank", "2244355354432", 44);
var libro_9 = new Libro("Satori", "Don Winslow", "9876543212345", 36);
console.log(Libro.catalogo.length + ' Libros en el Catálogo');
Libro.listar_catalogo()
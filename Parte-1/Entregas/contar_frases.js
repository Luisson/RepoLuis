// Primer intento
function contar_frases(data){

// Cuenta número de coincidencias. 
// ([a-zñáéíóúüç]+(-[\n\t\v\r\t]*[a-zñáéíóúüç]+)*)+: Palabra en castellano, una o más
// [¿¡{\u0028\u005B]*: Inicio de frase, 0 o más pq no son obligatorios ("-¿¡{({"")
// [-?!.;:}\u0029\u005D]+: Fin de Frase, 1 o más porque para reconocer una frase debe tener final
//                        -?!.;:})]

  return (data.match(/[-¿¡{\u0028\u005B]*([a-zñáéíóúüç]+(-[\n\t\v\r\t]*[a-zñáéíóúüç]+)*)+[-?!.;:}\u0029\u005D]+/ig) || []).length ;
}
module.exports = contar_frases;
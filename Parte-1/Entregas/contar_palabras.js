// Primer intento
function contar_palabras(data){

// Cuenta número de coincidencias. 
// [a-zñáéíóúüç]+ : Posible palabra en castellano
// (-[\n\t\v\r\t]*[a-zñáéíóúüç]+)* : (guión seguido (o no) de: línea nueva, ret. de carro,
//                                                           tabulación vert. u horiz. o salto de página
//									continuado por 1 o más letras) --> esto 0 veces(palabra sencilla sin -) 
//																	   o varias veces (con varios guiones)
  return (data.match(/[a-zñáéíóúüç]+(-[\n\t\v\r\t]*[a-zñáéíóúüç]+)*/ig) || []).length ;
}

module.exports = contar_palabras;
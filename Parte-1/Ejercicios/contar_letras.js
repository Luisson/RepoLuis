// Primer intento
function contar_letras (data){

// Cuenta número de matches. 
  return (data.match(/[a-zñáéíóúüç]/ig) || []).length ;
}

module.exports = contar_letras;
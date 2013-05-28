////Closures
function crearFuncion(){
   var i=0;
   var sumar = function(){
       i=i+1;
       return i;
   };
   return sumar;
}


var fsumar = crearFuncion();

console.log(fsumar());
console.log(fsumar());
console.log(fsumar());
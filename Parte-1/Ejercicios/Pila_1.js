// Luis Mengual
// Creación de la Pila
function pila(){
	var mi_pila = [];
	return{
		reset: function(){ mi_pila = [];},
		push: function(x){ 
			mi_pila.push(x);
		},
		pop: function(){
			// Ver lo de 'undefined' aquí
			return mi_pila.pop();
		},
		devolver_pila: function(){
			return mi_pila;
		}
	}
}

module.exports = pila;
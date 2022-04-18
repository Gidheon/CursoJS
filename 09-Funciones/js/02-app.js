//declaracion de funcion
sumar();
function sumar() {
    console.log(2+2);  
  };
  
  ///llamar la funcion
  
  /* js y el hoisting se ejecuta en 2 vueltas
  Creacion: la primera vuelta js escanea el document y registra todas las funciones y determina que variables va a crear 
  Ejecucion: la segunda vuelta la funcion esta registrada*/
  sumar2();
  //expresion de funcion
  const sumar2 = function name() {
      console.log(3+3);
  }
  
/*
  en primera vuelta no reconoce sumar 2 entonces es una variable vacia por eso da el error
  const sumar2;

  sumar2();

  segunda vuelta recien lo reconoce pero habiamos mandado a llamar a sumar 2 en la primera vuelta
  function sumar2() {
      
  } */
 
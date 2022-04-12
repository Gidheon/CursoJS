const numero1 = 30;
const numero2 = 20;

let resultado;
//pi
resultado = Math.PI;

//redondear resultado
resultado = Math.round(2.8);
resultado = Math.round(2.4);
resultado = Math.round(2.5);//redondea arriba

//redondear hacia arriba
resultado = Math.ceil(2.1); //redondea si o si hacia arriba

//redondea hacia abajo
resultado = Math.floor(2.9); //redondea si o si hacia abajo

//Raiz Cuadrada
resultado = Math.sqrt(144);

//Absoluto
resultado = Math.abs(-500); //ignora el signo - y trae nada mas los 500

//potencia
resultado = Math.pow(2, 4); //seria 2 a la potencia de 4

//minimo
resultado = Math.min(3, 5, 12, 1, -3); ///compara cual es el minimo

//Maximo
resultado = Math.max(3, 5, 12, 1, -3);

//aleatorio
resultado = Math.random()*20;

//aleatorio dentro d eun rango
resultado = Math.floor( Math.random() * 30 ); //GEnera un numero aleatorio lo multiplica por 30 y luego lo redondea hacia abajo



console.log(resultado);

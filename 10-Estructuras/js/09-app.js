//operador ternario
const autenticado = true;
const puedePagar = true;


//          1 parametro and 2 parametro '?' lo que realizara en caso de que se cumpla y ':' en caso de que no se cumpla
console.log(autenticado && puedePagar ? 'Si puede pagar' : 'No esta autenticado');

console.log(autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'Si autenticado, no puede pagar' : 'No esta autenticado');
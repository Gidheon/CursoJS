const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

//.concat
const resultado = meses.concat(meses2, meses3, 'otro mes');
console.log(resultado);

//spread operator con '...' se realiza una copia de meses 1 la junta con la copia de meses 2 y la 3 
const resultado2 = [...meses, ...meses2, ...meses3, 'otro mes']; //con los 3 puntos hay que asegurarse que sea un arreglo
console.log(resultado2);

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//Revisar si 2 numeros son iguales no es muy estricto == solo se fija en el valor

console.log(numero1 == numero3);
console.log(numero1 == numero2);

//Comparador Estricto se fija en el valor y en el tipo de dato
console.log(numero1 === numero2);
console.log(numero1 === parseInt(numero2)); //lo combierte a numero y queda en true


//Diferentes
const password = 'admin';
const password2 = 'Admin';

//comparador poco estricto solo compara el valor no el tipo
console.log(password != password2);
console.log(numero1 != numero2);

console.log(numero1 !== parseInt(numero2));

const aprendiendo =  (tecnologia,tecnologia2) => {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}

aprendiendo('Javascript', 'Node.js');
//si es una sola linea se puede hacer sin parentesis y dan por implicito el return
//cuando se pasa un solo parametro los parentesis son opcionales
const aprendiendo2 =  (tecnologia,tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo2('Javascript','Node.js'));
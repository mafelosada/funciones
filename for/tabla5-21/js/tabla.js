let contar;

function tabla(pcontar) {
    let numero = 5;
    let rango=10;
    let mult;

    for(contar = pcontar; contar<=rango; contar++) { 
        mult = contar * numero;

        console.log(numero+" * "+contar+" = "+mult);
    }
    
}

tabla(1)

console.log("-----")

const tablas=function (pcontar) {
    let numero = 5;
    let rango=10;
    let mult;

    for(contar = pcontar; contar<=rango; contar++) { 
        mult = contar * numero;

        console.log(numero+" * "+contar+" = "+mult);
    }
    
}
tablas(6)
let contar;

function tabla(pcontar) {
    contar = pcontar;
    let numero = 5;
    let rango = 10;
    let mult;

    while (contar<rango) {
        contar = contar +1; 
        mult = contar * numero;

        console.log(numero+" * "+contar+" = "+mult);
    }
    
}

tabla(1)

console.log("------")

const  tablas=function(pcontar) {
    contar = pcontar;
    let numero = 5;
    let rango = 10;
    let mult;

    while (contar<rango) {
        contar = contar +1; 
        mult = contar * numero;

        console.log(numero+" * "+contar+" = "+mult);
    }
    
}

tablas(6)
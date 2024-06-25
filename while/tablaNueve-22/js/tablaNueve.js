let contar;

function tabla(pcontar) {
    contar = pcontar;
    let numero = 10;
    let rango = 9;
    let mult;

    while (contar<numero) {
        contar = contar +1; 
        mult = contar * rango;

        console.log(rango+" * "+contar+" = "+mult);

        if (contar%2==0) {
            console.log(mult+" es Par\n")
        } else {
            console.log(mult+" es Impar\n")
        }
    }
    
}
tabla(1)

console.log("----")

const tablas=function (pcontar) {
    contar = pcontar;
    let numero = 10;
    let rango = 9;
    let mult;

    while (contar<numero) {
        contar = contar +1; 
        mult = contar * rango;

        console.log(rango+" * "+contar+" = "+mult);

        if (contar%2==0) {
            console.log(mult+" es Par\n")
        } else {
            console.log(mult+" es Impar\n")
        }
    }
    
}
tabla(4)
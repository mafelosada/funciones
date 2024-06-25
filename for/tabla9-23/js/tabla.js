let contar;

function tabla(pcontar) {
    let numero = 10;
    let rango = 9;
    let mult;

    for (contar = pcontar; contar<=numero; contar++) { 
        mult = contar * rango;

        console.log(rango+" * "+contar+" = "+mult);

        if (contar%2==0) {
            console.log(mult+" es Par")
        } else {
            console.log(mult+" es Impar")
        }
    }
}  
//tabla(6)
console.log("----")


const tablas=function(pcontar) {
    let numero = 10;
    let rango = 9;
    let mult;

    for (contar = pcontar; contar<=numero; contar++) { 
        mult = contar * rango;

        console.log(rango+" * "+contar+" = "+mult);

        if (contar%2==0) {
            console.log(mult+" es Par")
        } else {
            console.log(mult+" es Impar")
        }
    }
    
}


tablas(9)
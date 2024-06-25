function multi(pnum) {
    let num = pnum;
    let contar = 1;
    let numeroPar=0;
    let numeroImpar=0;

    while (contar <= 10) {
        let resultado = num * contar;
        console.log(num + " * " + contar + " = " + resultado);

        contar++;
        if (resultado % 2 === 0) {
            console.log("buzz");
            numeroPar++;
        } else {
            console.log("bass");
            numeroImpar++;
        }

    }

    console.log("PARES: " + numeroPar);
    console.log("IMPARES: " + numeroImpar);

}
multi(9)

console.log("----")

const multiplicacion=function(pnum) {
    let num = pnum;
    let contar = 1;
    let numeroPar=0;
    let numeroImpar=0;

    while (contar <= 10) {
        let resultado = num * contar;
        console.log(num + " * " + contar + " = " + resultado);

        contar++;
        if (resultado % 2 === 0) {
            console.log("buzz");
            numeroPar++;
        } else {
            console.log("bass");
            numeroImpar++;
        }

    }

    console.log("PARES: " + numeroPar);
    console.log("IMPARES: " + numeroImpar);

}
multiplicacion(6)
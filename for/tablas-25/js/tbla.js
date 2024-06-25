function multi(pnum) {
    let num = pnum;
    let numeroImpar=0;
    let numeroPar=0;

    for (let contar = 1; contar <= 10; contar++) {
        let resultado = num * contar;
        console.log(num + " * " + contar + " = " + resultado);

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

multi(2)

console.log("----")

console.log("-----")

const multiplicacion=function (pnum) {
    let num = pnum;
    let numeroImpar=0;
    let numeroPar=0;

    for (let contar = 1; contar <= 10; contar++) {
        let resultado = num * contar;
        console.log(num + " * " + contar + " = " + resultado);

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

multiplicacion(7)

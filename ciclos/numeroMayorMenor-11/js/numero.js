let numero1;
let numero2;

function comparacion(pnumeroUno,pnumeroDos){
    numero1 = pnumeroUno;
    numero2 = pnumeroDos;

    if (numero1==numero2) {
        return "iguales";
    }
    else if (numero1>numero2){
        return "Numero 1 es mayor";
    }
    else {
        return "Nuemro 2 es mayor";
    }
}

const comparacion1=function(pnumeroUno,pnumeroDos){
    numero1 = pnumeroUno;
    numero2 = pnumeroDos;

    if (numero1==numero2) {
        return "iguales";
    }
    else if (numero1>numero2){
        return "Numero 1 es mayor";
    }
    else {
        return "Nuemro 2 es mayor";
    }
}
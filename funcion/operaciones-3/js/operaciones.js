/**
 * Funcion de operaciones
 * Autor: Maria Fernanda Losada Silva
 * Lunes 01 de abril de 2024
 */

//CON PARAMETROS



function suma(pnumeroUno, pnumeroDos){
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;
    let sumar;

    sumar = numeroUno+numeroDos;

    return sumar;
}

function resta(pnumeroUno, pnumeroDos){
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;
    let restar;

    restar = numeroUno-numeroDos;
    
    return restar;
}

function multiplicacion(pnumeroUno, pnumeroDos){
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;
    let multiplicar;

    multiplicar = numeroUno*numeroDos;
    
    return multiplicar;
}

function division(pnumeroUno, pnumeroDos){
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;
    let dividir;

    dividir = numeroUno/numeroDos;
    
    return dividir;
}


//COMO EXPRESION


const suma1=function(pnumeroUno, pnumeroDos){
    let sumar;
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;

    sumar = numeroUno + numeroDos;
    return sumar;
}

const resta1=function(pnumeroUno, pnumeroDos){
    let restar;
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;

    restar = numeroUno - numeroDos;
    return restar;
}

const multiplicacion1=function(pnumeroUno, pnumeroDos){
    let multiplicar;
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;

    multiplicar = numeroUno + numeroDos;
    return multiplicar;
}

const operacion=function(poperador, pnumeroUno, pnumeroDos){
    let operador = poperador;
    let numeroUno = pnumeroUno;
    let numeroDos = pnumeroDos;

    if(operador=="suma"){
        return suma1(numeroUno, numeroDos);
    }
    else if(operador=="resta"){
        return resta1(numeroUno, numeroDos);
    }
    else if(operador=="multiplicacion"){
        return multiplicacion1(numeroUno, numeroDos);
    }
    else{
        return "Error!!! no reconoce operador"
    }
}



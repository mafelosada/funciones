/**
 * Funcion de Notas
 * Autor: Maria Fernanda Losada Silva
 * Martes 02 de abril de 2024
 */

//CON PARAMETROS

let nota;
function notas(pnota,pnumPorcentaje){
    let porcentaje;
    nota = pnota;

    porcentaje = nota * pnumPorcentaje;

    return porcentaje;
}

let nota1;
let nota2;
let nota3;
let suma;

        nota1=notas(4.6,0.2);
        nota2=notas(2.2,0.3);
        nota3=notas(3.9,0.5); 

        suma=nota1+nota2+nota3;

//COMO EXPRESION

const notass=function(pnota,pnumPorcentaje){
    let porcentaje;
    nota = pnota;

    porcentaje = nota * pnumPorcentaje;

    return porcentaje;
}
let notas1;
let notas2;
let notas3;
let sumas;

        notas1=notass(2.3,0.2);
        notas2=notass(4.2,0.3);
        notas3=notass(3.8,0.5); 

        sumas=notas1+notas2+notas3;

        
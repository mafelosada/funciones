/**
 * Funcion de Areas
 * Autor: Maria Fernanda Losada Silva
 * Martes 02 de abril de 2024
 */

//CON PARAMETROS


let base;
let altura;

function areas(pbase,paltura){
    base = pbase;
    altura = paltura;
    let resultado;

    resultado=base*altura;

    return resultado;
}
let areaCuadrado;
let areaRectangulo;
let areaTriangulo;

    areaCuadrado=areas(4,4);
    areaRectangulo=areas(8,3);
    areaTriangulo=areas(6,7)/2;


//COMO EXPRESION

const areas1=function(pbase,paltura){
    base = pbase;
    altura = paltura;
    let resultado;

    resultado=base*altura;

    return resultado;
}
let areaCuadrado1;
let areaRectangulo2;
let areaTriangulo3;

    areaCuadrado1=areas1(7,7);
    areaRectangulo2=areas1(2,3);
    areaTriangulo3=areas1(4,6)/2;
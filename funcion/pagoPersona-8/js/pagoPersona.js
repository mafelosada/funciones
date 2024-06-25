/**
 * Funcion de Notas
 * Autor: Maria Fernanda Losada Silva
 * Martes 02 de abril de 2024
 */

//CON PARAMETROS

let diasTrabajados;
let valorDia;
 function pago(pdiasTrabajados,pvalorDia){
    let sueldo;
    let salud;
    let pension;
    let arl;
    let descuento;
    let pagoTotal,
    diasTrabajados = pdiasTrabajados;
    valorDia = pvalorDia;

    sueldo = diasTrabajados*valorDia;
    salud = sueldo*0.12;
    pension = sueldo*0.16;
    arl = sueldo*0.052;
    
    descuento = salud+pension+arl;
    pagoTotal = sueldo-descuento;

    return pagoTotal;

 }

//COMO EXPRESION

const pago1=function(pdiasTrabajados,pvalorDia){
   let sueldo;
   let salud;
   let pension;
   let arl;
   let descuento;
   let pagoTotal,
   diasTrabajados = pdiasTrabajados;
   valorDia = pvalorDia;

   sueldo = diasTrabajados*valorDia;
   salud = sueldo*0.12;
   pension = sueldo*0.16;
   arl = sueldo*0.052;
   
   descuento = salud+pension+arl;
   pagoTotal = sueldo-descuento;

   return pagoTotal;

}
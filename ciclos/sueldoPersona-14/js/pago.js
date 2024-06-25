const salario=function(pdias, pvalorDia){
    let dias=pdias;
    let valorDia=pvalorDia;
    let totalSalario;

    totalSalario= dias*valorDia;
    return totalSalario;
}

const subTrans=function(pdias, pvalorDia){
    let salarioMinimo=1600000;
    let salarioTrans=salario(pdias, pvalorDia);
    let subTransporte;

    if (salarioTrans<=salarioMinimo*2) {
        subTransporte=114000;
    }
    else{
        subTransporte=0;
    }
    return subTransporte;
}

const salud=function(pdias, pvalorDia){
    let pagoSalud;

    pagoSalud=salario(pdias, pvalorDia)*0.12;
    return pagoSalud;
}

const pension=function(pdias, pvalorDia){
    let pagoPension;

    pagoPension=salario(pdias, pvalorDia)*0.16;
    return pagoPension;
}

const arl=function(pdias, pvalorDia){
    let pagoArl;

    pagoArl=salario(pdias, pvalorDia)*0.052;
    return pagoArl;
}

const deducibles=function(pdias, pvalorDia){
    let pagoDeducibles;

    pagoDeducibles=salud(pdias, pvalorDia) + pension(pdias, pvalorDia) + arl(pdias, pvalorDia);
    return pagoDeducibles;
}

const retencion=function(pdias, pvalorDia){
    let salarioMinimo=1600000;
    let salarioRetencion=salario(pdias, pvalorDia);
    let retencionTotal;

    if (salarioRetencion>=salarioMinimo*4) {
        retencionTotal=0.04;
    }
    else{
        retencionTotal=0;
    }
    return retencionTotal;
}

const pagoTotal=function(pdias, pvalorDia){
    let pago;

    pago=(salario(pdias, pvalorDia) + subTrans(pdias, pvalorDia)) - deducibles(pdias, pvalorDia) - retencion(pdias, pvalorDia);
    return pago;
}









function salarios(pdias, pvalorDia){
    let adias=pdias;
    let avalorDia=pvalorDia;
    let totalSalario;

    totalSalario= adias*avalorDia;
    return totalSalario;
}

function subsidioTrans(pdias, pvalorDia){
    let salarioMinimo=1600000;
    let salarioTrans=salarios(pdias, pvalorDia);
    let subTransporte;

    if (salarioTrans<=salarioMinimo*2) {
        subTransporte=114000;
    }
    else{
        subTransporte=0;
    }
    return subTransporte;
}

function salud1(pdias, pvalorDia){
    let pagoSalud;

    pagoSalud=salarios(pdias, pvalorDia)*0.12;
    return pagoSalud;
}

function pension1(pdias, pvalorDia){
    let pagoPension;

    pagoPension=salarios(pdias, pvalorDia)*0.16;
    return pagoPension;
}

function arl1(pdias, pvalorDia){
    let pagoArl;

    pagoArl=salarios(pdias, pvalorDia)*0.052;
    return pagoArl;
}

function deducibless(pdias, pvalorDia){
    let pagoDeducibles;

    pagoDeducibles=salud1(pdias, pvalorDia) + pension1(pdias, pvalorDia) + arl1(pdias, pvalorDia);
    return pagoDeducibles;
}

function retenciones(pdias, pvalorDia){
    let salarioMinimo=1600000;
    let salarioRetencion=salarios(pdias, pvalorDia);
    let retencionTotal;

    if (salarioRetencion>=salarioMinimo*4) {
        retencionTotal=0.04;
    }
    else{
        retencionTotal=0;
    }
    return retencionTotal;
}

function totalPago(pdias, pvalorDia){
    let pago;

    pago=(salarios(pdias, pvalorDia) + subsidioTrans(pdias, pvalorDia)) - deducibless(pdias, pvalorDia) - retenciones(pdias, pvalorDia);
    return pago;
}




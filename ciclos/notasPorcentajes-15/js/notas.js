let nota1;
let nota2;
let nota3;

function notas(pnota1, pnota2, pnota3) {
    nota1 = pnota1;
    nota2 = pnota2;
    nota3 = pnota3;
    let porc1;
    let porc2;
    let porc3;
    let suma;

    porc1 = nota1 * 0.2;
    porc2 = nota2 * 0.35;
    porc3 = nota3 * 0.45;

    suma = porc1 + porc2 + porc3;

    if (suma>4.5) {
        return "nota superior";
    }
    else if(suma<=4.5 && suma>3.5){
        return "nota buena";
    }
    else if(suma<=3.5 && suma>3){
        return "nota media";
    }
    else{
        return "nota mala";
    }
    
}

const nota=function(pnota1, pnota2, pnota3) {
    nota1 = pnota1;
    nota2 = pnota2;
    nota3 = pnota3;
    let porc1;
    let porc2;
    let porc3;
    let suma;

    porc1 = nota1 * 0.2;
    porc2 = nota2 * 0.35;
    porc3 = nota3 * 0.45;

    suma = porc1 + porc2 + porc3;

    if (suma>4.5) {
        return "nota superior";
    }
    else if(suma<=4.5 && suma>3.5){
        return "nota buena";
    }
    else if(suma<=3.5 && suma>3){
        return "nota media";
    }
    else{
        return "nota mala";
    }
    
}


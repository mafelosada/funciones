let anioActual;
let anioNac1;
let anioNac2;
let anioNac3;

function edad(panioNac1, panioNac2, panioNac3){
    anioActual = 2024;
    anioNac1 = panioNac1;
    anioNac2 = panioNac2;
    anioNac3 = panioNac3;
    let pers1;
    let pers2;
    let pers3;
    
    pers1 = anioActual - anioNac1;
    pers2 = anioActual - anioNac2;
    pers3 = anioActual - anioNac3;

    if (pers1>17) {
        return "Persona 1 mayor";
    }
    else if (pers2>17) {
        return "Persona 2 mayor";
    }
    else {
        return "Persona 3 mayor";
    }

}

const edades=function(panioNac1, panioNac2, panioNac3){
    anioActual = 2024;
    anioNac1 = panioNac1;
    anioNac2 = panioNac2;
    anioNac3 = panioNac3;
    let pers1;
    let pers2;
    let pers3;

    pers1 = anioActual - anioNac1;
    pers2 = anioActual - anioNac2;
    pers3 = anioActual - anioNac3;


    if (pers1>17) {
        return "Persona 1 mayor";
    }
    else if (pers2>17) {
        return "Persona 2 mayor";
    }
    else {
        return "Persona 3 mayor";
    }

}
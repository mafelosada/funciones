let contar;

function numero(pcontar) {
    contar = pcontar;
    let numero = 0;

    while (contar>numero) {
        numero = numero +1; 
        
        if (numero%2==0) {
            console.log(numero+" es Par\n")
        } else {
            console.log(numero+" es Impar\n")
        }
    }
    
}

numero(5)

console.log("----")

const numeros=function (pcontar) {
    contar = pcontar;
    let numero = 0;

    while (contar>numero) {
        numero = numero +1; 
        
        if (numero%2==0) {
            console.log(numero+" es Par\n")
        } else {
            console.log(numero+" es Impar\n")
        }
    }   
}
numeros(12)
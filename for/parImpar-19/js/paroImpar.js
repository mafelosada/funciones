let contar;

function numero(pcontar) {
    let numero = 1;

    for (contar = pcontar; contar>=numero; numero++) {
        
        if (numero%2==0) {
            console.log(numero+" es Par")
        } else {
            console.log(numero+" es Impar")
        }
    }
    
}

numero(10)

console.log("-----")

const numeros= function (pcontar) {
    let numero = 1;

    for (contar = pcontar; contar>=numero; numero++) {
        
        if (numero%2==0) {
            console.log(numero+" es Par")
        } else {
            console.log(numero+" es Impar")
        }
    }
    
}
numero(7)
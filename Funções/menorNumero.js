// Funções parametrizadas - Menor Número
// Escreva uma função chamada menorNumero. Ela deve receber dois números como parâmetro e retornar o menor entre eles. Caso os números sejam iguais, basta que se retorne qualquer um deles.




function menorNumero (a, b){
    if ( a < b){
        return a
    } else if ( a == b){
       return a
    } else {
        return b
    }
}

console.log(menorNumero(25, 25))
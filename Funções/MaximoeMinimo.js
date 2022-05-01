// Funções Nativas - Maximo e Minimo
// Escreva uma função maxmin(a, b, c, d, e) que receba cinco números como parâmetros.
// Sua função deve retornar um array onde o primeiro elemento é o menor dos parâmetros da função maxmin e o segundo elemento é o maior dos parâmetros da função maxmin.
function maxmin(a,b,c,d,e){

    var array=[0,0]
 
    array[0]=Math.min(a,b,c,d,e)
 
    array[1]=Math.max(a,b,c,d,e)
 
    return array
 
    
 
 }

 console.log(maxmin(1,2,3,4,5))
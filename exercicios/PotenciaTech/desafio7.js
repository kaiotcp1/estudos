function misterioso(arrayDeNumeros, n){
    var arrayResultado = [];
    for ( var i = 0; i < arrayDeNumeros.length; i++){
        if(arrayDeNumeros[i] > n){
            arrayResultado.push(arrayDeNumeros[i])
        }
    }
    return arrayResultado
}

console.log(misterioso([6,4,8,3,2,3,], 5))
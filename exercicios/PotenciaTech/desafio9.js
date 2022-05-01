function desconhecida(){
    var arrayDeRertorno = [];
    for (var i = 1; i <= 6; i++){
        var numero = Math.floor(Math.random() * 61);
        arrayDeRertorno.push(numero);
    }
    return arrayDeRertorno;
}
console.log(desconhecida())
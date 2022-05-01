function maiorNome(arrayDeNomes){
    // atribuindo o primeiro elemento a variavel maior
    var maior = arrayDeNomes[0]
    for (let i = 1; i < arrayDeNomes.length; i++){
        if(maior.length < arrayDeNomes[i]){
            maior = arrayDeNomes[i]
        }
    }
    return maior
}
console.log(maiorNome(["AI","Veado","Leao","ApostolodeDeUS"]))
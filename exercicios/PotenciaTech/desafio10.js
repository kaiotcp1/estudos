function oQueIssoFaz(arrayDeNomes){
    if(arrayDeNomes.lenght == 0) return undefined;
    
    arrayDeNomes.forEach(nome => {
        console.log('Nome:' + nome)
    })
}
console.log(oQueIssoFaz(["Kaio","Karen","Karina"]))
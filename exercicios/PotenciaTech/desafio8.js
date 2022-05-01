function menorIdade(arrayDeIdades){
    if (arrayDeIdades.length == 0) return undefined;

    var menor = arrayDeIdades[0];
    
    for ( var i = 1; i < arrayDeIdades.length; i++){
        if(menor > arrayDeIdades[i]){
            console.log(arrayDeIdades[i]) //debug
            menor = arrayDeIdades[i]
        }
    }
    return menor;
}
console.log(menorIdade([12,16,18,23,64,11]))
function listarPersonagens(){
    var pessoas = [
        { nome: 'Josué', papel: 'Peter Pan'},
        { nome: 'Joselayne', papel: 'Wendy'},
        { nome: 'Guilherme', papel: 'Capitão Gancho'},
        { nome: 'Luiza', papel: 'Tinker Bell'}]

        
        
        pessoas.forEach(pessoas => {
            console.log("Ator: " + pessoas.nome)
            console.log("Papel: " + pessoas.papel)

        })
}

listarPersonagens()


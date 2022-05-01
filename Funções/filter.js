function novoAluno(nome, idade) {
    return { nome, idade };

}
let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Jão", 43),
    novoAluno("Kaio", 21)
]
let esportesVotos = [
    novoAluno("futebol", 99),
    novoAluno("Natação", 45),
    novoAluno("Motocross", 43),
    novoAluno("Atletismo", 21)
]
function temMenosde30(aluno) {
    return aluno.idade < 30
}

console.log(alunos.filter(temMenosde30))
console.log(esportesVotos.filter(temMenosde30))
// function temMaisde30(aluno) {
//     return aluno.idade > 30
// }

// function filtro(callback){
// let alunosFiltrados = [];
// for (let aluno of this){
//     if (callback(aluno)){
//         alunosFiltrados.push(aluno)
//     }
//   }
//   return alunosFiltrados;
// }

// alunos.filtro = filtro
// jogadores.filtro = filtro
// console.log(alunos.filtro(temMaisde30))

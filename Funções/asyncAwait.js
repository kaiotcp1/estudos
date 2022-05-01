

let usuarios = ["Kaio", "Karen", "Karina"];

function inserirUsuario(nome) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            usuarios.push(nome);
            let error = false;

            if (!error) {
                resolve()
            } else {
                reject({ msg: "Erro de qualquer coisa" })
            }
        }, 1000);
    })
    return promise;
}

function listarUsuarios() {
    console.log(usuarios);
}

async function executar (){
    await inserirUsuario("Doriane");
    listarUsuarios();
}
executar();


// inserirUsuario("Doriane").then(listarUsuarios).catch((error) => {
//     console.log(error.msg)
// });




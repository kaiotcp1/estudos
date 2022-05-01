function ola(){
    console.log("olá")
};

function saudacao(s,nome){
    s();  //function de callback?
    console.log(nome);
}

saudacao(ola,"Kaio")





let usuarios = ["Kaio","Karen","Karina"];

function inserirUsuario(nome, callback){
    
    setTimeout(() => {
        usuarios.push(nome);
        callback();
    },1000);
}

function listarUsuarios(){
    console.log(usuarios);
}

inserirUsuario("Doriane", listarUsuarios);




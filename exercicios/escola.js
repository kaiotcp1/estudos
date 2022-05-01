var nota1 = 1.0
var nota2 = 6.0

var media = (nota1 + nota2) / 2;
var conceito = ""

if(media >= 8){
    conceito = "ótimo"

}

else if ( media > 6.5){
     conceito = "Bom"

}

else {

    conceito = "Regular"

}
conceito = "Mais ou menos"

console.log(media);
console.log(conceito)


switch(conceito) {

case "ótimo":
console.log("Parabéns, você é um ótimo aluno")
break

case "Bom":
console.log("Você está quase lá")
break

case "Regular":
console.log("Estude mais !")
break

default:
    console.log("Ouve algum erro")
    break

}
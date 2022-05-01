// verificar parlindromo

function solution(inputString) {
   let b = inputString.split("").reverse().join("")
    console.log(b) // verificar o que está retornando na variavel
      if( b != inputString ){
       return false
   } else{
       return true
   }

}
console.log(solution("aabaa"))



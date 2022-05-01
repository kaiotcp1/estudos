function speakGeneric(){
    console.log(this.sound);
}

let dog = {
    sound: " Au au",
    speak: speakGeneric
}


let cat = {
    sound: " Miau",
    speak: speakGeneric
}

dog.speak();   // chamando function
cat.speak();   // chamando function 

// let bindedFunction = speakGeneric.bind(cat) // dog our cat
// bindedFunction();
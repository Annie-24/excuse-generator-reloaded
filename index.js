window.onload = () => {
    console.log("Hola Excusa");
    //Lista aquí:
let who = ["mi tortuga", "Alex", "una vaca", "mi mamá"];
let what = ["está enferma", "ya me invitó jaja...", "me pateó", "me encerró"];
let when = ["hoy día del exámen", "mañana", "hoy a las 7:00am", "todo el día"];



//Math.random y Math.floor aquí:
let whoRandomNumber =Math.floor(Math.random()*5);
let whatRandomNumber = Math.floor(Math.random()*5);
let whenRandomNumber = Math.floor(Math.random()*5);







    //Declaración de la variable que contenga las excusas:

let excuse = "Cuál será la excusa de hoy?:";


    //Texto concantenados:
    excuse = who[whoRandomNumber] + " " + what[whatRandomNumber] + " " + when[whenRandomNumber];



    //Cambiar el contenido de la etiqueta párrafo:
    
    document.getElementById('botton').addEventListener("click", window.onload = () => {
        document.getElementById("excuse").innerHTML = excuse;
        })
    }
    
    
    
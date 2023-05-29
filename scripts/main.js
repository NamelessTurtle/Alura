// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:

// Debe funcionar solo con letras minúsculas

// No deben ser utilizados letras con acentos ni caracteres especiales

// Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"


function encriptar(){
    let textToEncript = document.getElementById("input-text").value;
    let encriptedText = "";

    // Si input-text esta vacio, no se ejecuta el codigo
    if(textToEncript == ""){
        alert("No hay texto para encriptar");
        document.getElementById("showWhenText").style.display = "none";
        document.getElementById("showWhenNoText").style.display = "block";

    }
    else{
        document.getElementById("showWhenText").style.display = "grid";
        document.getElementById("showWhenNoText").style.display = "none";
        console.log(textToEncript.length);
        // Se recorre el texto ingresado para buscar las letras a encriptar
        for(let i = 0; i < textToEncript.length; i++){
            console.log(textToEncript[i]);
            if(textToEncript[i] == "e"){
                console.log("encontrado e");
                encriptedText += "enter";
            }
            else if(textToEncript[i] == "i"){
                console.log("encontrado i");
                encriptedText += "imes";
            }
            else if(textToEncript[i] == "a"){
                console.log("encontrado a");
                encriptedText += "ai";
            }
            else if(textToEncript[i] == "o"){
                console.log("encontrado o");
                encriptedText += "ober";
            }
            else if(textToEncript[i] == "u"){
                console.log("encontrado u");
                encriptedText += "ufat";
            }
            else{
                encriptedText += textToEncript[i];
            }
        }

        console.log(encriptedText);

        document.getElementById("OutPutText").textContent = encriptedText;
    }
}

function desencriptar(){
    let textToDecript = document.getElementById("input-text").value;
    let decriptedText = "";

    // Si input-text esta vacio, no se ejecuta el codigo
    if(textToDecript == ""){
        alert("No hay texto para desencriptar");
        document.getElementById("showWhenText").style.display = "none";
        document.getElementById("showWhenNoText").style.display = "block";

    } else{

        document.getElementById("showWhenText").style.display = "grid";
        document.getElementById("showWhenNoText").style.display = "none";

        console.log(textToDecript.length);

        // Se recorre el texto ingresado para buscar las letras a desencriptar
        for(let i = 0; i < textToDecript.length; i++){
            console.log(textToDecript[i]);
            if(textToDecript[i] == "e" && textToDecript[i+1] == "n" && textToDecript[i+2] == "t" && textToDecript[i+3] == "e" && textToDecript[i+4] == "r"){
                console.log("encontrado enter");
                decriptedText += "e";
                i += 4;
            }
            else if(textToDecript[i] == "i" && textToDecript[i+1] == "m" && textToDecript[i+2] == "e" && textToDecript[i+3] == "s"){
                console.log("encontrado imes");
                decriptedText += "i";
                i += 3;
            }
            else if(textToDecript[i] == "a" && textToDecript[i+1] == "i"){
                console.log("encontrado ai");
                decriptedText += "a";
                i += 1;
            }
            else if(textToDecript[i] == "o" && textToDecript[i+1] == "b" && textToDecript[i+2] == "e" && textToDecript[i+3] == "r"){
                console.log("encontrado ober");
                decriptedText += "o";
                i += 3;
            }
            else if(textToDecript[i] == "u" && textToDecript[i+1] == "f" && textToDecript[i+2] == "a" && textToDecript[i+3] == "t"){
                console.log("encontrado ufat");
                decriptedText += "u";
                i += 3;
            }
            else{
                decriptedText += textToDecript[i];
            }
        }

        console.log(decriptedText);

        document.getElementById("OutPutText").textContent = decriptedText;
    }
}


function copyText(){
    let textToCopy = document.getElementById("OutPutText").textContent;
    console.log(textToCopy);

    navigator.clipboard.writeText(textToCopy);

}


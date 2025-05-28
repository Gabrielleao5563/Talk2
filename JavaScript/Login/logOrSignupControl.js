//This var save if the page is on Login or Signup Mode
var mode = 0; 
//0 means nothing
// 1 means loging
// 2 means signup

//Reads a command came from other file and choose wich mode to set
function changeMode(mode){

    var loginDiv = document.getElementById("logingDiv");
    var signupDiv = document.getElementById("signingDiv");

    var text = document.getElementById("topHeader");

    var decision1 = "";
    var decision2 = "";
    var textstring = "";

    switch(mode){

        case "login":

            mode = 1;

            decision1 = "flex";
            decision2 = "none";

            textstring = "Fazer Login";

            break;

        case "signup":

            mode = 2;

            decision1 = "none";
            decision2 = "flex";

            textstring = "Criar uma conta"

            break;

        default:

            mode = 0;
            console.error("O modo escolhido é inválido, tente novamente!");
            break;

    }

    if(mode != 0){

        loginDiv.style.display=decision1;
        signupDiv.style.display=decision2;

        text.innerHTML=textstring;

    }

}
//Runs to set a new password into an existing account
function setNewPassword(){

    //Error texts
    var inputHint = document.getElementById("passwordGuide");

    function changeHintConfiguration(action, text){

        switch(action){

            case "text":

                inputHint.innerHTML=text;
                break;

            case "color":

                inputHint.style.backgroundColor=text;
                break;

        }

        if(action == "reset"){

            inputHint.style.display="none";

        }else{

            inputHint.style.display="flex";

        }

    }

    //Inputs
    var inputPassword1 = document.getElementById("passwordInput1");
    var inputPassword2 = document.getElementById("passwordInput2");

    //PASWORD CHECKING ---------------
            
    //Check size
    if(inputPassword1.value < 6){

        changeHintConfiguration("text", "A senha deve conter ao menos 6 caracteres");
        return;

    }

    //Check Uppercase
    var passwordUppercaseTest = "false";

    for(i = inputPassword1.value.length - 1; i >= 0; i--){

        var character = inputPassword1.value.charAt(i);

        if(character == character.toUpperCase()){

            passwordUppercaseTest = "true";

        }

    }

    if(passwordUppercaseTest != "true"){

        changeHintConfiguration("text", "Deve conter uma letra maiúscula");
        return;

    }

    //Check Lowercase
    var passwordLowercaseTest = "false";

    for(i = inputPassword1.value.length - 1; i >= 0; i--){
                
        var character = inputPassword1.value.charAt(i);

        if(character == character.toLowerCase()){

            passwordLowercaseTest = "true";

        }

    }

    if(passwordLowercaseTest != "true"){

        changeHintConfiguration("text", "Deve conter uma minúscula");
        return;

    }

    //Check Numbers
    var passwordNumbersTest = "false";

    for(i = inputPassword1.value.length - 1; i >= 0; i--){
                
        var character = inputPassword1.value.charAt(i);

        if(isNaN(character) == false){

            passwordNumbersTest = "true";

        }

    }

    if(passwordNumbersTest != "true"){

        changeHintConfiguration("text", "Deve conter números");
        return;

    }

    //Check Xpecial character
    var passwordXpecialCharacterTest = "false";

    for(i = inputPassword1.value.length - 1; i >= 0; i--){
                
        var character = inputPassword1.value.charAt(i);

        if(isNaN(character) == true && isLetter(character) == false){

            passwordXpecialCharacterTest = "true";

        }

    }

    if(passwordXpecialCharacterTest != "true"){
                
        changeHintConfiguration("text", "Deve conter caracteres especiais");
        return;

    }

    //Compare passwords
    if(inputPassword2.value == ""){

        changeHintConfiguration("text", "Digite a senha novamente no segundo campo");
        return;

    }

    if(inputPassword1.value != inputPassword2.value){

        changeHintConfiguration("text", "As senhas não são idênticas");
        return;

    }

    //SUPABASE -----------------
    async function sendNewPassword() {

        const { error } = await supabaseclient.auth.updateUser({

            password: inputPassword1.value

        })

        if(error){

        console.log("Erro ao atualizar a senha: " + error.message);

        switch(error.message){

            case "Auth session missing!":

                changeHintConfiguration("text", "Você não está utilizando um link válido, ou ele expirou");
                break;

            default:

                changeHintConfiguration("text", error.message);
                break;

        }

        }else{

            console.log("A senha foi atualizada com sucesso");
            window.alert("A sua senha foi atualizada com sucesso!");

            localStorage.removeItem('supabase.auth.token');

            window.alert("Realize novamente o seu login");

            window.location.href="home.html";

        }

    }

    sendNewPassword();

}
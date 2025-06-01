//Function that ask for a password reset on supabase
function askForPasswordReset(){

    //Error text
    var emailHint = document.getElementById("emailGuide");

    function changeEmailHintConfiguration(action, text){

        switch(action){

            case "text":

                emailHint.innerHTML=text;
                break;

            case "color":

                emailHint.style.backgroundColor=text;
                break;
        }

        if(action == "reset"){

            emailHint.style.display="none";

        }else{

            emailHint.style.display="flex";

        }

    }

    //Input
    var inputEmail = document.getElementById("emailInput");

    //Verifications
    changeEmailHintConfiguration("reset");

    if(inputEmail.value == ""){

        changeEmailHintConfiguration("text", "Este campo não pode estar vazio");
        changeEmailHintConfiguration("color", "var(--warningColor)");
        return;

    }

    var characterVerificationTest = "false";

    for(i = inputEmail.value.length - 1; i >= 0; i--){

        var character = inputEmail.value.charAt(i);

        if(character == "@"){

            characterVerificationTest = "true";

        }

    }

    if(characterVerificationTest != "true"){

        changeEmailHintConfiguration("text", "O e-mail inserido não é válido");
        changeEmailHintConfiguration("color", "var(--warningColor)");
        return;

    }

    //SUPABASE ----------
    var email = inputEmail.value;

    supabaseclient.auth.resetPasswordForEmail(email, {

        redirectTo: 'https://whisp.com.br/html/newPassword.html'

    })

    changeEmailHintConfiguration("text", "Um e-mail foi enviado para '" + email + "'!");
    changeEmailHintConfiguration("color", "var(--sucessColor)");

}

//Click detector
document.addEventListener("keyup", function(e){

    switch(e.key){

        case "Enter":

            askForPasswordReset();
            break;

    }

});
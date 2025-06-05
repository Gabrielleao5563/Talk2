function requestPasswordReset(){

    //variables
    var inputEmail = document.getElementById("reset-email");
    var emailError = document.getElementById("reset-email-error");

    function setError(value){

        emailError.innerHTML=value;
        emailError.style.display="flex";

    }

    function resetError(){

        emailError.style.display="none";

    }

    resetError();

    //Email checkings

    //if email is empty
    if(inputEmail.value.length == 0){

        setError("*este campo não pode estar vazio");
        return;

    }

    //if does not have and @
    var emailCharacterTest = "false";

    for(i = inputEmail.value.length - 1; i >= 0; i--){

        var character = inputEmail.value.charAt(i);

        if(character == "@"){

            emailCharacterTest = "true";

        }

    }

    if(emailCharacterTest == "false"){

        setError("*o e-mail inserido é inválido");
        return;

    }

    //SUPABASE --------------
    var email = inputEmail.value;

    setLoadingStatus("start");

    supabaseclient.auth.resetPasswordForEmail(email, {

        redirectTo: 'https://whisp.com.br/html/passwordReset/newPassword/newPassword.html'

    })

    setLoadingStatus("end");

    window.alert("Sucesso!");
    window.alert("Confira seu e-mail para prosseguir...");

}
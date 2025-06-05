function startLogin(){

    //variables
    var inputEmail = document.getElementById("login-email");
    var emailError = document.getElementById("login-email-error");

    var inputPassword = document.getElementById("login-password");
    var passwordError = document.getElementById("login-password-error");

    function setError(field, value){

        switch(field){

            case "email":

                emailError.innerHTML=value;
                emailError.style.display="flex";
                break;
            
            case "pass":

                passwordError.innerHTML=value;
                passwordError.style.display="flex";
                break;

        }

    }

    function resetErrors(){

        emailError.style.display="none";
        passwordError.style.display="none";

    }

    resetErrors();

    //email checking
    if(inputEmail.value == ""){
                
        setError("email", "*este campo não pode estar vazio");
        return;

    }

    var emailCheckingResult = "false";

    for(i = inputEmail.value.length - 1; i >= 0; i--){

        var character = inputEmail.value.charAt(i);

        if(character == "@"){

            emailCheckingResult = "true";

        }

    }

    if(emailCheckingResult == "false"){

        setError("email", "*e e-mail inserido não é válido");
        return;

    }

    //SUPABASE ---------------------

    //move the typed values to other variables
    var email = inputEmail.value;
    var password = inputPassword.value;

    //send to supabase
    async function logUser(){

        setLoadingStatus("start");

        //execute inside a promisse
        try{

            const { data, error } = await supabaseclient.auth.signInWithPassword({

                email,
                password

            });

            if(error){

                console.error("Erro durante o login: " + error.message);

                switch(error.message){

                    case "Invalid login credentials":

                        loginUpdateErrorText("email", "*e-mail ou senha inválidos");
                        break;

                }

            }else{

                window.location.href="../home";

            }

        }catch{

            setError("email", "*ocorreu um erro desconhecido durante o login");

        }

        setLoadingStatus("end");

    }

    logUser();

}
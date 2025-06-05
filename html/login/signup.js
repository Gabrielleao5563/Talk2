function startSignUp(){

    //variables
    var inputEmail = document.getElementById("signup-email");
    var emailError = document.getElementById("signup-email-error");

    var inputPassword1 = document.getElementById("signup-password");
    var inputPassword2 = document.getElementById("signup-confirm-password");

    var password1Error = document.getElementById("signup-password-error");
    var password2Error = document.getElementById("signup-confirm-password-error");

    //set a especific error
    function setError(field, value){

        switch(field){

            case "email":

                emailError.innerHTML=value;
                emailError.style.display="flex";
                break;

            case "pass1":

                password1Error.innerHTML=value;
                password1Error.style.display="flex";
                break;

            case "pass2":

                password2Error.innerHTML=value;
                password2Error.style.display="flex";
                break;

        }

    }

    //hide all errors
    function resetErrors(){

        emailError.style.display="none";
        password1Error.style.display="none";
        password2Error.style.display="none";

    }

    resetErrors();

    //email checks -----------------------

    //if its empty
    if(inputEmail.value == ""){

        setError("email", "*este campo é obrigatório");
        return;

    }

    //if there is some space => " "
    for(i = inputEmail.value.length - 1; i >= 0; i--){

        var character = inputEmail.value.charAt(i);

        if(character == " "){

            setError("email", "*espaços não são aceitos");
            return;

        }

    }

    //password checks --------------------------

    //Check size
    if(inputPassword1.value < 6){

        setError("pass1", "*deve conter ao menos 6 caracteres");
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

        setError("pass1", "*deve conter uma letra maiúscula");
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

        setError("pass1", "*deve conter uma minúscula");
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

        setError("pass1", "*deve conter números");
        return;

    }

    //Check Xpecial character
    var passwordXpecialCharacterTest = "false";

    for(i = inputPassword1.value.length - 1; i >= 0; i--){
                
        var character = inputPassword1.value.charAt(i);

        if(isNaN(character) == true && checkIfItsLetter(character) == false){

            passwordXpecialCharacterTest = "true";

        }

    }

    if(passwordXpecialCharacterTest != "true"){
                
        setError("pass1", "*deve conter um caractere especial");
        return;

    }

    //Compare passwords
    if(inputPassword2.value == ""){

        setError("pass2", "*digite novamente a senha");
        return;

    }

    if(inputPassword1.value != inputPassword2.value){

        setError("pass1", "*senhas não coincidem");
        setError("pass2", "*senhas não coincidem");
        return;

    }

    //SUPABASE ---------------

    var email = inputEmail.value;
    var password = inputPassword1.value;

    async function registerUser(){

        //show loading icon
        setLoadingStatus("start");

        //send the data into supabase
        const { data, error } = await supabaseclient.auth.signUp({

            email,
            password

        })

        if(error){

            switch(error.message){

                case "Unable to validate email address: invalid format":

                    setError("email", "*e-mail inválido inserido");
                    break;

            }

        }else{

            console.log("Usuario cadastrado: " + data);
            window.alert("Cadastrado com sucesso!");
            window.alert("Verifique seu e-mail..");

        }

        //hide loading icon
        setLoadingStatus("end");

    }

    registerUser();

}
//Function that runs when the continue button is pressed
function proceedProcess(condition){

    switch(condition){

        //Login
        case 1:

            //Error and hints boxes
            var campo1 = document.getElementById("logingGuide1");

            function loginUpdateErrorText(action, text){
                
                switch(action){

                    case "text":

                        campo1.innerHTML=text;
                        break;

                    case "color":

                        campo1.style.backgroundColor=text;
                        break;

                }

                if(action == "reset"){

                    campo1.style.display="none";

                }else{

                    campo1.style.display="flex";

                }

            }

            var signingAsText = document.getElementById("logingAsText");

            //Inputs
            var inputEmail = document.getElementById("loginEmailInput");
            var inputPassword = document.getElementById("loginPasswordInput");

            //Check if the e-mail is valid

            loginUpdateErrorText("reset");

            if(inputEmail.value == ""){
                
                loginUpdateErrorText("text", "Este campo não pode estar vazio");
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

                loginUpdateErrorText("text", "O e-mail inserido não é válido");
                return;

            }

            //SUPABASE ---------------------

            updateLoading("start");

            var email = inputEmail.value;
            var password = inputPassword.value;

            async function logUser(){

                try{

                    const{ data, error } = await supabaseclient.auth.signInWithPassword({

                        email,
                        password

                    });

                    if(error){

                        console.error("Erro no login: " + error.message);

                        switch(error.message){

                            case "Invalid login credentials":

                                loginUpdateErrorText("text", "Credenciais de login inválidas");
                                break;

                        }

                    }else{

                        //Login done sucessfully
                        window.location.href="home.html";

                    }

                }catch (e){

                    console.error("Erro no login: " + e.message);
                    loginUpdateErrorText("text", "Ocorreu um erro inesperado. Sinto muito por isso.")

                }

            }

            logUser();

            updateLoading("end");

            break;

        //Signup
        case 2:

            //Vars about the email
            var inputEmail = document.getElementById("signupEmailInput");

            //about email security
            var emailHint = document.getElementById("signupHint1");

            function changeEmailHintConfiguration(action, value){

                switch(action){

                    case "text":

                        emailHint.innerHTML=value;
                        break;

                    case "color":

                        emailHint.style.backgroundColor=value;
                        break;

                    case "reset":
                        break;

                }

                if(action == "reset"){

                    emailHint.style.display="none";

                }else{

                    emailHint.style.display="flex";

                }

            }

            //Vars about the password
            var inputPassword1 = document.getElementById("signupPass1");
            var inputPassword2 = document.getElementById("signupPass2");

            //about password security
            var passwordHint = document.getElementById("signupHint2");

            function changePasswordHintConfiguration(action, value){

                switch(action){

                    case "text":

                        passwordHint.innerHTML=value;
                        break;

                    case "color":

                        passwordHint.style.backgroundColor=value;
                        break;

                }

                if(action == "reset"){

                    passwordHint.style.display="none";

                }else{

                    passwordHint.style.display="flex";

                }

            }

            changeEmailHintConfiguration("reset");
            changePasswordHintConfiguration("reset");

            //EMAIL CHECKING ---------------

            //If the email field is empty
            if(inputEmail.value == ""){

                changeEmailHintConfiguration("text", "Este campo não pode estar vazio!");
                changeEmailHintConfiguration("color", "var(--warningColor)");
                return;

            }

            //Check if there is some " " on the email
            for(i = inputEmail.value.length -1; i >= 0; i--){

                var character = inputEmail.value.charAt(i);

                if(character == " "){

                    changeEmailHintConfiguration("text", "Espaços não são aceitos");
                    changeEmailHintConfiguration("color", "var(--warningColor)");
                    return;

                }

            }

            //PASWORD CHECKING ---------------
            
            //Check size
            if(inputPassword1.value < 6){

                changePasswordHintConfiguration("text", "A senha deve conter ao menos 6 caracteres");
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

                changePasswordHintConfiguration("text", "Deve conter uma letra maiúscula");
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

                changePasswordHintConfiguration("text", "Deve conter uma minúscula");
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

                changePasswordHintConfiguration("text", "Deve conter números");
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
                
                changePasswordHintConfiguration("text", "Deve conter caracteres especiais");
                return;

            }

            //Compare passwords
            if(inputPassword2.value == ""){

                changePasswordHintConfiguration("text", "Digite a senha novamente no segundo campo");
                return;

            }

            if(inputPassword1.value != inputPassword2.value){

                changePasswordHintConfiguration("text", "As senhas não são idênticas");
                return;

            }

            //SUPABASE CHECKINGS ---------------

            var email = inputEmail.value;
            var password = inputPassword1.value;

            async function registerUser(){

                updateLoading("start");

                //Send the data to server
                const { data, error } = await supabaseclient.auth.signUp({

                    email,
                    password

                });

                //Check if there is a error
                if(error){

                    console.error("Ocorreu um erro durante o cadastro: " + error.message);

                    switch(error.message){

                        case "Unable to validate email address: invalid format":

                            changeEmailHintConfiguration("text", "Não foi possível validar o e-mail inserido. Formato inválido");
                            break;

                    }


                    changeEmailHintConfiguration("color", "var(--warningColor)");

                }else{

                    console.log("O usuário foi cadastrado: " + data);
                    changeEmailHintConfiguration("text", "Verifique seu e-mail e tente fazer login");
                    changeEmailHintConfiguration("color", "var(--sucessColor)");

                }

                updateLoading("end");

            }

            registerUser();

            break;

        //Error
        default:

            console.error("The page is actually on a invalid position to continue! Mode: " + mode + "!");
            break;

    }

}
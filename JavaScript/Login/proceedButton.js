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

                    campo1.style.display="block";

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



                    }else{



                    }

                }catch{



                }

            }

            logUser();

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

                    emailHint.style.display="block";

                }

            }

            //Vars about the password
            var inputPassword1 = document.getElementById("signupPass1");
            var inputPasswrod2 = document.getElementById("signupPass2");

            //about password security
            var passwordHint1 = document.getElementById("signupHint2");
            var passwordHint2 = document.getElementById("signupHint3");
            var passwordHint3 = document.getElementById("signupHint4");
            var passwordHint4 = document.getElementById("signupHint5");
            var passwordHint5 = document.getElementById("signupHint6");
            var passwordHint6 = document.getElementById("signupHint7");

            //EMAIL CHECKING ---------------

            //If the email field is empty
            if(inputEmail.value == ""){

                changeEmailHintConfiguration("text", "Este campo não pode estar vazio!");
                changeEmailHintConfiguration("color", "var(--warningColor)");
                return;

            }

            changeEmailHintConfiguration("reset");

            //Check if there is some " " on the email
            for(i = inputEmail.value.length -1; i >= 0; i--){

                var character = inputEmail.value.charAt(i);

                if(character == " "){

                    changeEmailHintConfiguration("text", "Espaços não são aceitos");
                    changeEmailHintConfiguration("color", "var(--warningColor)");
                    return;

                }else{
                    
                    changeEmailHintConfiguration("reset");

                }

            }

            //PASWORD CHECKING ---------------
            for(i = 7; i > 1; i--){

                var hintOnCheck = document.getElementById(String("signupHint" + i));

                if(hintOnCheck.style.backgroundColor == "var(--sucessColor)" | hintOnCheck.style.backgroundColor == "var(--attentionColor)"){

                    //Do nothing

                }else{

                    return;

                }

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
                    changeEmailHintConfiguration("text", error.message);
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
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
        return;

    }

    

    //SUPABASE ----------

}
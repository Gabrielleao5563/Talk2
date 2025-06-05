//Start checking
async function checkUserLogin(){

    //Consults supabase
    const { data, error } = await supabaseclient.auth.getSession();

    //If there is error
    if(error){

        console.error("Erro ao verificar a sessão atual: " + error.message);
        return;

    }

    //Reminds teporarily the session
    const session = data.session;

    //Create variables to control where the user is
    var atLoginPage = "false";
    var atResetPasswordPage = "false";

    //If the user is at the login page
    if(window.location.pathname.includes("login")){

        //Saves the information
        atLoginPage = "true";

    }

    //if the user is at the reset password page
    if(window.location.pathname.includes("passwordReset")){

        //Saves the information
        atResetPasswordPage = "true";

    }

    //If the user is logged
    if(session){

        //sends to the console
        console.log("Logado na sessão: " + session);

        //if the user is at the login page
        if(atLoginPage == "true"){

            //redirects the user out of that page
            window.location.href="../home";

        }

    }else{

        //sends to the console
        console.log("Nenhuma sessão foi encontrada");

        //if the user isn't at the login or reset password page
        if(atLoginPage != "true" && atResetPasswordPage != "true"){

            //redirects the user to the login page
            window.location.href="../login";

        }

    }

}
//Checks if there is any active login as soon as the page loads
const checkLogin = async () => {

    const { data, error } = await supabaseclient.auth.getSession();

    if(error){

        console.error("Erro ao verificar a sessão: " + error.message);
        return;

    }

    const session = data.session;

    var atLogin = "false";
    var atReset = "false";

    if(window.location.pathname.includes('login.html')){

        atLogin = "true";

    }

    if(window.location.pathname.includes('passwordReset.html')){

        atReset = "true";

    }

    if(session){

        console.log("Logado em: " + session.user);

        if(atLogin == "true"){

            window.location.href="login.html";

        }

    }else{

        console.log("Nenhum login encontrado!");

        if(atLogin != "true" && atReset != "true"){

            window.location.href="login.html";

        }

    }

    console.log("Login: " + atLogin + " | Reset: " + atReset);

}

checkLogin(); //Execute this whole function
//Checks if there is any active login as soon as the page loads
const checkLogin = async () => {

    const { data, error } = await supabaseclient.auth.getSession();

    if(error){

        console.error("Erro ao verificar a sessão: " + error.message);
        return;

    }

    const session = data.session;
    const alreadyonpage = window.location.pathname.includes('login.html');

    if(session){

        console.log("Logado em: " + session.user);

        if(alreadyonpage){

            window.location.href="home.html";

        }

    }else{

        console.log("Nenhum login encontrado!");

        if(!alreadyonpage){

            window.location.href="login.html";

        }

    }

}

checkLogin(); //Execute this whole function
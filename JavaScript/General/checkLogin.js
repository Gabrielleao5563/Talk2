//Checks if there is any active login as soon as the page loads
const checkLogin = async () => {

    const { data, error } = await supabaseclient.auth.getSession(); //Check current login in Database

    //If something goes Wrong
    if(error){

        console.error("Erro ao verificar a sessão: " + error.message); //Log error on console
        return; //End function execution

    }

    const session = data.session; //Get the current session
    const alreadyonpage = window.location.pathname.includes('login.html'); //Determines if the user are in the login page or not


    //If the session exists and its valid
    if(session){

        console.log("Logado em: " + session.user); //Log the active found login

        //If already on page returns true
        if(alreadyonpage){

            window.location.href="home.html"; //Redirect into the 'home.html' page

        }

    }else{

        //If it does not exist or its not valid
        console.log("Nenhum login encontrado!"); //Log that is not active login

        //If alreadyonpage returns false
        if(!alreadyonpage){

            window.location.href="login.html"; //Redirect into the 'login.html' page

        }

    }

}

checkLogin(); //Execute this whole function
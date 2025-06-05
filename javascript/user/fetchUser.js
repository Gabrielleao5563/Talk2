//function that consults the logged user data
async function fetchUser(){

    //search for the user on supabase
    const { data: { user }, error } = await supabaseclient.auth.getUser();

    if(error){

        console.error("Ocorreu um erro ao consultar o usuario atualmente logado");

    }else{

        return user;

    }

}
//set a new public name
async function setPublicName(name){

    //gets the user actual session
    var user = await fetchUser();

    //if the user is not logged
    if(user.id == undefined){

        console.error("Impossível definir um nome público. Usuario não logado");
        return;

    }

    //send the new public name for supabase
    await supabaseclient.from("users").upsert([

        { id: user.id, username: name }

    ]);

}

//read an existent public name
async function fetchPublicName(){

    //run the code inside a promisse, so if the username does'nt exists, the code wont break
    try {

        //get the user actual session
        var user = await fetchUser();

        //if the user is not logged
        if(user.id == undefined){

            console.error("Impossível consultar o nome público. Usuario não logado");
            return;

        }

        //search the information on database
        const { data, error } = await supabaseclient
        .from("users")
        .select("username")
        .eq("id", user.id)
        .maybeSingle();

        if(error){

            console.error("Não foi possível consultar o nome publico do usuario: " + error.message);

        }else if(!data){

            console.log("Nenhum nome de usuario relacionado a esta conta");
            return null;

        }else{

            return data;

        }

    }catch{

        console.error("Ecorreu um erro desconheçido ao tentar consultar o nome público do usuario");
        return;

    }

}
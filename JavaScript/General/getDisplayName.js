function getDisplayName(){

    async function run(){

        const {

            data: { user }, error
        
        } = await supabaseclient.auth.getUser();

        if(error){

            console.error("Erro durante a consulta do usuário: " + error.message);
            return;

        }else{
            
            const displayName = user.user_metadata?.full_name || user.user_metadata?.name;

            if(displayName){

                return displayName;

            }else{

                return 0;

            }

        }

    }

    run();

}
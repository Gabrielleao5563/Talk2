//Function that ends the supabase session
async function endSession(){

    await supabaseclient.auth.signOut();
    location.reload();

}
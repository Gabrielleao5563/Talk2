async function endSession(){

    //ask for supabase to sign out
    await supabaseclient.auth.signOut();

    //refresh the page
    location.reload();

}
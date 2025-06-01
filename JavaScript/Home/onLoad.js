//Function that runs on the page load
function onHomeLoad(){

    checkPublicName();

}





function checkPublicName(){

    var name = getDisplayName();

    if(name != 0){

        //Name exists
        console.log("Logado como '" + name + "'");

    }else{

        //Name does not exist

    }

}
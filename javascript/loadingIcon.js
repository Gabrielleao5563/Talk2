//get control above the loading icon on the page
var loadingIcon = document.getElementById("loadingHolder");

function setLoadingStatus(action){

    switch(action){

        case "start":

            loadingIcon.style.display="flex";
            break;

        case "end":

            loadingIcon.style.display="none";
            break;

        default:

            console.error("Valor inválido requerido na função setLoadingStatus");
            break;

    }

}
//Code related to the loading icon
var loadingIcon = document.getElementById("loadingHolder");

function updateLoading(action){

    switch(action){

        case "start":

            loadingIcon.style.display="flex";
            break;

        case "end":

            loadingIcon.style.display="none";
            break;

    }

}
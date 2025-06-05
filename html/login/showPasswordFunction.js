//change beetween on and off
function changeLoginPasswordVisibility(){

    //if there is no history of usage of this button
    if(!localStorage.getItem("loginPasswordStatus")){

        localStorage.setItem("loginPasswordStatus", "true");

    }

    //check the actual position
    var actual = localStorage.getItem("loginPasswordStatus");

    //make a flip-flop
    if(actual == "true"){

        localStorage.setItem("loginPasswordStatus", "false");
        update("false");

    }else{

        localStorage.setItem("loginPasswordStatus", "true");
        update("true");

    }

    //function that does the visual change
    function update(decision){

        //elements
        var button = document.getElementById("toggle-login-password-icon");
        var input = document.getElementById("login-password");

        //decision checker
        if(decision == "true"){

            button.src="../../icons/icon/showIcon.png";
            input.type="text";

        }else{

            button.src="../../icons/icon/hideIcon.png";
            input.type="password";

        }

    }

}

window.onload = () => {

    //elements
    var button = document.getElementById("toggle-login-password-icon");
    var input = document.getElementById("login-password");

    //decision checker
    if(localStorage.getItem("loginPasswordStatus") == "true"){

        button.src="../../icons/icon/showIcon.png";
        input.type="text";

    }else{

        button.src="../../icons/icon/hideIcon.png";
        input.type="password";

    }

}
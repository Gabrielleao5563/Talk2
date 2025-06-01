var loginButtonIcon = document.getElementById("passwordVisibilityIcon");
var loginPasswordText = document.getElementById("passwordShowerText");
var loginPasswordInput = document.getElementById("loginPasswordInput");

if(!localStorage.getItem("loginPassword")){

    localStorage.setItem("loginPassword", "false");

    loginButtonIcon.src="../icons/icon/hideIcon.png";
    loginPasswordText.style.display="none";

}else{

    switch(localStorage.getItem("loginPassword")){

        case "true":

            loginButtonIcon.src="../icons/icon/showIcon.png";
            loginPasswordText.style.display="initial";
            break;

        case "false":

            loginButtonIcon.src="../icons/icon/hideIcon.png";
            loginPasswordText.style.display="none";
            break;

    }

}

function changePasswordVisibility(){

    console.log("running");

    var visibility = localStorage.getItem("loginPassword")

    if(visibility == "true"){

        loginButtonIcon.src="../icons/icon/hideIcon.png";
        loginPasswordText.style.display="none";
        localStorage.setItem("loginPassword", "false");


    }else{

        loginButtonIcon.src="../icons/icon/showIcon.png";
        loginPasswordText.style.display="initial";
        localStorage.setItem("loginPassword", "true");

    }

}

//Typing
function loginPasswordTyping(){

    if(loginPasswordInput.value == ""){

        loginPasswordText.innerHTML="Sua senha apareçe aqui";

    }else{

        loginPasswordText.innerHTML=loginPasswordInput.value;

    }

}
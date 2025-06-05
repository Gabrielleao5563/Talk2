var loginPageStatus = "login";

function changeToLoginAndSignUp(whereTo){

    //Sections
    var loginSection = document.getElementById("login-section");
    var signupSection = document.getElementById("signup-section");

    //Change beetween them
    switch(whereTo){

        case "login":

            loginSection.style.display="block";
            signupSection.style.display="none";
            break;

        case "signup":

            loginSection.style.display="none";
            signupSection.style.display="block";
            break;

        default:

            console.error("O parametro usado em changeToLoginAndSignUp é inválido");
            break;

    }

    loginPageStatus = whereTo;

}
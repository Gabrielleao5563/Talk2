document.addEventListener("keyup", function(e){

    switch(e.key){

        case "Enter":

            if(loginPageStatus == "login"){

                startLogin();

            }else{

                startSignUp();

            }

            break;

    }

})
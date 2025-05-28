//Function that runs everytime something is typed at the fields on the signup section
function updateSignupHints(cameFrom){

    var campo1 = document.getElementById("signupHint2"); //SENHA MUITO CURTA
    var campo2 = document.getElementById("signupHint3"); //LETRA MAISCULA
    var campo3 = document.getElementById("signupHint4"); //LETRA MINUSCULA
    var campo4 = document.getElementById("signupHint5"); //NAO POSSUI NUMEROS
    var campo5 = document.getElementById("signupHint6"); //CARACTERE ESPECIAL
    var campo6 = document.getElementById("signupHint7"); //DIGITE NOVAMENTE NO SEGUNDO CAMPO

    var input1 = document.getElementById("signupPass1");
    var input2 = document.getElementById("signupPass2");

    //Check if the key pressed was on the first or second input and acts
    switch(cameFrom){

        case 'input1':

            checkPass1Size();
            checkUpperCase();
            checkLowerCase();
            checkNumbers();
            checkXpecialChar();
            checkPassSimilarity();
            break;

        case 'input2':

            
            checkPassSimilarity();
            break;

        default:

            console.error("A função UpdateSignupHints foi chamada a partir de um input inválido!");
            break;

    }





    //Function designed to check the size of the password on the firts input
    function checkPass1Size(){

        var pass1Size = input1.value.length;

        if(pass1Size < 6){

            campo1.innerHTML=String("Senha muito curta - " + pass1Size + " de 6 caracteres");
            campo1.style.backgroundColor="var(--warningColor)";

        }

        if(pass1Size >= 6){

            campo1.innerHTML=String("Tamanho adequado - " + pass1Size + " caracteres");

            if(pass1Size == 6){

                campo1.style.backgroundColor="var(--attentionColor)";

            }else{

                campo1.style.backgroundColor="var(--sucessColor)";

            }

        }

    }

    //Function that gets the size of the password typed at the second input
    function checkPass2Size(){

        return input2.value.length;

    }

    //Function that checks if inside the password exist a uppercase character
    function checkUpperCase(){

        var result = "false";

        //Set a function to check every single character on the password
        for(i = input1.value.length - 1; i >= 0; i--){

            var letter = input1.value.charAt(i);

            if(isLetter(letter) == false){

                //Is not a letter, end cycle here

            }else{

                if(letter == letter.toUpperCase()){

                    result = "true";

                }else{

                    //Its not a uppercase letter, do nothing

                }

            }

        }
        
        if(result == "false"){

            campo2.innerHTML="Não possui uma letra maiúscula";
            campo2.style.backgroundColor="var(--warningColor)";

        }else{

            campo2.innerHTML="Possui um caractere maiúsculo";
            campo2.style.backgroundColor="var(--sucessColor)";

        }

    }

    //Function that checks if inside the password exist a lowercase character
    function checkLowerCase(){

        var result = "false";

        //Set a function to check every single character on the password
        for(i = input1.value.length - 1; i >= 0; i--){

            var letter = input1.value.charAt(i);

            if(isLetter(letter) == false){

                //Is not a letter, end cycle here

            }else{

                if(letter == letter.toLowerCase()){

                    result = "true";

                }else{

                    //Its not a lowercase letter, do nothing

                }

            }

        }


        if(result == "false"){

            campo3.innerHTML="Não possui uma letra minúscula";
            campo3.style.backgroundColor="var(--warningColor)";

        }else{

            campo3.innerHTML="Possui um caractere minúsculo";
            campo3.style.backgroundColor="var(--sucessColor)";

        }

    }

    //Function that check if there is some number on the password string
    function checkNumbers(){

        var result = "false";
        var amount = 0;

        //Create a for to check every character on the password
        for(i = input1.value.length - 1; i >= 0; i--){

            var character = input1.value.charAt(i);

            if(isNaN(character)){

                //The character is not a number, end cycle here

            }else{

                result = "true";
                amount++;

            }

        }

        if(result == "false"){

            //There is not a number
            campo4.innerHTML="Não possui um número";
            campo4.style.backgroundColor="var(--warningColor)";

        }else{

            if(amount > 1){

                campo4.innerHTML="Possui números";
                campo4.style.backgroundColor="var(--sucessColor)";

            }else{

                campo4.innerHTML="Possui um número";
                campo4.style.backgroundColor="var(--attentionColor)";

            }

        }

    }

    //Function that check if in the password exists a especial character
    function checkXpecialChar(){

        var result = "false";

        for(i = input1.value.length -1; i >= 0; i--){

            var character = input1.value.charAt(i);

            if(isNaN(character) == true && isLetter(character) == false){

                result = "true";
                
            }

        }

        if(result == "false"){

            campo5.innerHTML="Não possui um caractere especial";
            campo5.style.backgroundColor="var(--warningColor)";

        }else{

            campo5.innerHTML="Possui caracteres especiais";
            campo5.style.backgroundColor="var(--sucessColor)";

        }

    }

    //Function that check if the password is equal to the second one
    function checkPassSimilarity(){

        if(checkPass2Size() == 0){

            campo6.innerHTML="Digite novamente no segundo campo";
            campo6.style.backgroundColor="var(--warningColor)";

        }else{

            if(input1.value != input2.value){

                campo6.innerHTML="As senhas não são iguais";
                campo6.style.backgroundColor="var(--warningColor)";

            }else{

                campo6.innerHTML="Senhas são iguais";
                campo6.style.backgroundColor="var(--sucessColor)";

            }

        }
        
    }

}
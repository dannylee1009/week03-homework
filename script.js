var button = document.getElementById ('start-new-password');
var textArea = document.getElementById ( 'password-result');





function startNewPassword(){

    var password = "";
    
    
    

   
    var input = prompt ("Provide a password length between 8 and 128");
    var passwordLength = parseInt(input);
   
    while (!( passwordLength >=8 && passwordLength<=128)){
      input = prompt ("Provide a password length between 8 and 128");
      passwordLength = parseInt(input);
    
    
    }    
       //user choice
    var choice =[];
    var lowercaseCharcters = ['a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var uppercaseCharcters = ['A', 'B', 'C', 'D', 'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var specialCharcters = [ '!', '.', '#', '@', '$', '%'];  
        
    var lowercase = confirm ( 'Would you like lowercase letters in your password?');
            if (lowercase){
                choice.push(lowercaseCharcters);
            }
    var uppercase = confirm ( 'Would you like uppercase letters in your password?');
            if (uppercase){
                choice.push(uppercaseCharcters);
            }
    var numbersask = confirm( 'would you like numbers in your password?' );
            if (numbersask){
                choice.push(numbers);
            }
    var specialCharctersask = confirm ( 'would you like special charcters letters in your password?' );
            if (specialCharctersask){
                choice.push(specialCharcters);
            }
    
    
    

    

    
    
    for ( var i = 0; i < passwordLength; i++ ) {
        var randomset = Math.floor(Math.random() * choice.length);
        var possibleCharcters = choice [randomset]; 
        var num = Math.floor(Math.random() * possibleCharcters.length);
        
        password = password + possibleCharcters[num];
        
    }

    //show password
    textArea.value = password;



}
button.addEventListener( "click", startNewPassword );

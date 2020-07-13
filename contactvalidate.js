function validatefirstname(){
    var fname=document.getElementById("FirstName").value;
    var input=/[a-zA-z]{2,15}/;
    
    if(input.test(fname)){
        document.getElementById("FirstNamePrompt").style.color="green";
        document.getElementById("FirstNamePrompt").innerHTML="valid";
        return true;

    }
    else{
        document.getElementById("FirstNamePrompt").style.color="red";
        document.getElementById("FirstNamePrompt").innerHTML="invalid";
        return false;
    }
}
function validatelastname(){
    var lname=document.getElementById("LastName").value;
    var input=/[a-zA-z]{2,15}/;
    
    if(input.test(lname)){
        document.getElementById("LastNamePrompt").style.color="green";
        document.getElementById("LastNamePrompt").innerHTML="valid";
        return true;

    }
    else{
        document.getElementById("LastNamePrompt").style.color="red";
        document.getElementById("LastNamePrompt").innerHTML="invalid";
        return false;
    }
}
function validateemail(){
var mail=document.getElementById("Email").value;
    var input=/[a-zA-z]{2,15}/;
    
    if(input.test(mail)){
        document.getElementById("EmailPrompt").style.color="green";
        document.getElementById("EmailPrompt").innerHTML="valid";
        return true;

    }
    else{
        document.getElementById("EmailPrompt").style.color="red";
        document.getElementById("EmailPrompt").innerHTML="invalid";
        return false;
    }
}
function validatenumber(){
var numbers=document.getElementById("MobileNumber").value;
    var input=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
    if(input.test(numbers)){
        document.getElementById("NumberPrompt").style.color="green";
        document.getElementById("NumberPrompt").innerHTML="valid";
        return true;

    }
    else{
        document.getElementById("NumberPrompt").style.color="red";
        document.getElementById("NumberPrompt").innerHTML="invalid";
        return false;
    }
}
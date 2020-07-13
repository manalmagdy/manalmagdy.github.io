function validatepatientname(){
    var pname=document.getElementById("PatientName").value;
    var input=/[a-zA-z]{2,15}/;
    
    if(input.test(pname)){
        document.getElementById("PatientNamePrompt").style.color="green";
        document.getElementById("PatientNamePrompt").innerHTML="valid";
        return true;

    }
    else{
        document.getElementById("PatientNamePrompt").style.color="red";
        document.getElementById("PatientNamePrompt").innerHTML="invalid";
        return false;
    }
}
function validateemail(){
    var email=document.getElementById("Email").value;
    var input=/[a-zA-z]{2,15}/;
    
    if(input.test(email)){
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
function validatecontactno(){
var contactno=document.getElementById("ContactNo").value;
    var input=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    
    if(input.test(contactno)){
        document.getElementById("ContactNoPrompt").style.color="green";
        document.getElementById("ContactNoPrompt").innerHTML="valid";
        return true;

    }
    else{
        document.getElementById("ContactNoPrompt").style.color="red";
        document.getElementById("ContactNoPrompt").innerHTML="invalid";
        return false;
    }
}
function validatedateofbirth(){
    var dateofbirth=document.getElementById("DateOfBirth").value;
        var input=/[a-zA-z]{2,15}/;
        
        if(input.test(dateofbirth)){
            document.getElementById("DateOfBirthPrompt").style.color="green";
            document.getElementById("DateOfBirthPrompt").innerHTML="valid";
            return true;
    
        }
        else{
            document.getElementById("DateOfBirthPrompt").style.color="red";
            document.getElementById("DateOfBirthPrompt").innerHTML="invalid";
            return false;
        }
    }
function validatepassportno(){
var passportno=document.getElementById("PassportNo").value;
    var input=/[a-zA-z]{2,15}/;
    
    if(input.test(passportno)){
        document.getElementById("PassportNoPrompt").style.color="green";
        document.getElementById("PassportNoPrompt").innerHTML="valid";
        return true;

    }
    else{
        document.getElementById("PassportNoPrompt").style.color="red";
        document.getElementById("PassportNoPrompt").innerHTML="invalid";
        return false;
    }
}
function validatelocation(){
var location=document.getElementById("Location").value;
    var input=/[a-zA-z]{2,15}/;
    
    if(input.test(location)){
        document.getElementById("LocationPrompt").style.color="green";
        document.getElementById("LocationPrompt").innerHTML="valid";
        return true;

    }
    else{
        document.getElementById("LocationPrompt").style.color="red";
        document.getElementById("LocationPrompt").innerHTML="invalid";
        return false;
    }
}

function validatepreferredtime(){
    var ptime=document.getElementById("PreferredTime").value;
    var input=/[a-zA-z]{2,15}/;
    
    if(input.test(ptime)){
        document.getElementById("PreferredTimePrompt").style.color="green";
        document.getElementById("PreferredTimePrompt").innerHTML="valid";
        return true;

    }
    else{
        document.getElementById("PreferredTimePrompt").style.color="red";
        document.getElementById("PreferredTimePrompt").innerHTML="invalid";
        return false;
    }

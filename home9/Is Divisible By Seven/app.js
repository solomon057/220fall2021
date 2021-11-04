function checkDivisiblity(){
    let x = document.getElementById("inputvalue").value;
    if( x%7==0){
    document.getElementById("Answer").innerHTML="The number you entered is divisible by 7";
    return true;
    }
    else{ 
    document.getElementById("Answer").innerHTML="The number you entered is not divisible by 7";
    return false;
    }
    }
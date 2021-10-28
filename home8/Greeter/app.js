 //function greet

 function greet()

 {

     //taking name entered by user

     var name=document.getElementById("textboxName").value;

     //call a function and display name

     console.log(displayName(name));

 }

 //function displayName()

 function displayName(name)

 {

     return "Hello "+name;//concate the name and returm

 }
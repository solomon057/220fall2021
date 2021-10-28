var y = Math.floor(Math.random() * 10 + 1); //here random number from 1 to 10 is generated
var guess = 1; //initilize value start with guess 1 with start
document.getElementById("submitguess").onclick = function(){
var x = document.getElementById("guessField").value;
if(x == y)
{     
alert("Suceessfully Guess!!! YOU GUESSED IT RIGHT IN "+ guess + " GUESS ");
}
else if(x > y) /* if guessed number is greater
            than actual number*/
{     
guess++;
alert("Entered Number is smaller then You Entered");
}
else
{
guess++;
alert("Enter Number is Greater then You entered")
}
}
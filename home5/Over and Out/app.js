var myDiv= document.createElement("DIV");
document.body.appendChild(myDiv);

myDiv.style.width="100px"
myDiv.style.height='100px'
myDiv.style.backgroundColor='blue'

myDiv.onmouseover = function(){
    myDiv.style.backgroundColor='black'

}
myDiv.onmouseout = function(){
    myDiv.style.backgroundColor='blue'
 
    
}
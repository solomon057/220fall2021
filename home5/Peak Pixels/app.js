
var myDiv= document.createElement("DIV");
document.body.appendChild(myDiv);

myDiv.style.width="100px"
myDiv.style.height='100px'
myDiv.style.backgroundColor='green'

myDiv.onclick = function () {
    myDiv.style.width *= 1.1 + "px";
    myDiv.style.height *= 1.1 + "px";

}

    

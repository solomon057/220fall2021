
//looping for 100 times
for(var i=0; i<100; i++) {
    //creating a "div" element
    var elem=document.createElement("div");
    //setting 20px as height and width
    elem.style.height="20px";
    elem.style.width="20px";
    //setting float to left
    elem.style.float="left";
    //generating three random values between 0 and 255 for random color
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    //using this to create a background color for the element
    elem.style.background="rgb(" + r + "," + g + "," + b + ")";
    //appending element to the body of the page.
    document.body.appendChild(elem);
}
// function fun() created here
 function fun() {
    //accessing the div using id square
    var x = document.getElementById('square');
    //getting the width from the div and increasing 10% , adding px to it. 
    var div_width = x.offsetWidth + (0.1 * x.offsetWidth)+"px";
    //getting the height from the div and increasing 10% , adding px to it.
    var div_height = x.offsetHeight + (0.1 * x.offsetHeight)+"px";
    //Setting the width of div to new div_width
    x.style.width = div_width;
    //Setting the height of the div to new div_height
    x.style.height = div_height;
}


    

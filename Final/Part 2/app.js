var i = 0;
var original = document.getElementById('O');

function O() {
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "O" + ++i;
    // or clone.id = ""; if the divs don't need an ID
    original.parentNode.appendChild(clone);
}
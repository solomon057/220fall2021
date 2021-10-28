
function onsubmitclick() {
    if (document.getElementById("username").value == "Username" && document.getElementById("password").value == "Password") {
        document.getElementById("result").innerHTML = "Success";
    } else {
        document.getElementById("result").innerHTML = "Wrong Information";
    }

}
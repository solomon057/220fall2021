function myQuestion(clicked) {
    if (clicked=="Thanos")//here it check if value is correct
    document.getElementById("answer").innerHTML = "Correct! The work is done. I won. What I'm about to do, I'm gonna enjoy it. Very, very much! "+clicked; //message to div for user
    else
    document.getElementById("answer").innerHTML = " Wrong ! You could not live with your own failure. Where did that bring you? Back to me. It is  Thanos"; //message to div for user
    }     
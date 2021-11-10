function myFunction() {
    var text=document.getElementById("numbers").value;
    var arr=text.split(",");
    var sum=0;
    var avg=0;
    for(i=0;i<arr.length;i++){
          sum += parseInt(arr[i]);
    }
    avg=sum/arr.length;
    document.getElementById("sum").innerHTML = "Sum: "+sum;
    document.getElementById("avg").innerHTML = "Average: "+avg;
    var text=document.getElementById("numbers").value="";
  }
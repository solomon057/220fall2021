  // Storing the Bad words
  let Badwords = ["clear","water","tires"];

  // Declaring the bad words count

  let count;

  function myevaluate(){

      // Initializing the empty variables

      count = 0;

      let text = "";

      // Getting the sentence from the input field

      text = document.getElementById("sent").value;

      let words = [];

      // Splitting the sentence on blank spaces and storing words

      words = text.split(" ");



      // Looping through the badwords array

      for(let i = 0; i < Badwords.length; i++) {

          // Looping through the words array

          for(let S = 0; S < words.length; S++){

              // Checking if there is any bad word present

              if(words[S] == Badwords[i]) {

                  // Incrementing the count

                  count++;

              }

          }

      }

      // If no bad word then print the message inside the 'p' element

      if (count == 0) {

          document.querySelector(".message").innerHTML = "No bad word found";

      }

      // If bad word is present print the message inside the 'p' element and the count

      else {

          document.querySelector(".message").innerHTML = "Bad word found<br>Total bad words : " + count;

      }

      // Resetting the input field to empty

      document.getElementById("sent").value = "";

  };
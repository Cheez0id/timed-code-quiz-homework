// //creating a coupe variables in js to get input from the form in html
//  var freeResponse = document.querySelector("#randomResponse");
// var nameInput = document.querySelector("#nameResponse");
// var submitButton = document.querySelector("#submit");


// // TODO: make function to log the text input from user upon button click

// function logEntries(freeResponse, nameInput) {
//     // Prevent default action
//     // event.preventDefault();
//     console.log(freeResponse + nameInput);
//     // var response = "Thank you for your submission " + nameInput.value + "! You wrote this weird stuff in the first field: " + freeResponse.value + ".";
//       // submissionResponseEl.textContent = response;
// logEntries (freeResponse, nameInput) 
//   }

// //   console.log (freeResponse + nameInput + " <-- these were put into the form");
// // var showResponse = console.log (freeResponse + nameInput);

// // // Add listener to submit element
// // submitButton.addEventListener("click", showResponse);










//BEGINNING OF THE CODE

var questionBank = ["question1", "question2", "question3", "question4", "question5"]
console.log (questionBank.length)

var form1 = document.querySelector (".form1") 
var form2 = document.querySelector (".form2")
var question1 = document.querySelector ("#question1")
var question2 = document.querySelector ("#question2")
var question3 = document.querySelector ("#question3")
var question4 = document.querySelector ("#question4")
var question5 = document.querySelector ("#question5")


function hidequestion1 () {
  question1.style.visibility = "hidden";
}

function hidequestion2 () {
  question2.style.visibility = "hidden";
}

for(var i = 0; i < questionBank.length; i++) {
  var question = questionBank[i].question
}





// TODO: create a function that removes time from the timer when the wrong answer is given
// function incorrectanswer () {
//   form1.style.visibility = "hidden";
//   return;
// }




// //form1
// var button1, etc.
// function formoneChange(){ form1.getElementsByTagName("button").onclick(function(e) {
//  form1.style.display = "none"
//  console.log ("click?")
// })}

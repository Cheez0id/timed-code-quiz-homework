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

var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("time").innerHTML = "Finished";
  } else {
    document.getElementById("time").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

var questionBank = ["question1", "question2", "question3", "question4", "question5"]
console.log (questionBank.length)

var quizbox = document.querySelector (".quizbox")

console.log (document.getElementById("quizbox"));


// I want to make a quizbox that will display each of the questions when interacted with
quizbox.addEventListener("click", function() {
(console.log ("oh happy day, the quizbox was clicked.")); 
quizbox.appendChild(question1)
})

// // get reference to the section tag.
// // make a new paragraph tag.
// var paragraph = document.createElement("p");
// // add some text inside paragraph tag.
// paragraph.textContent = "This is another paragraph";
// // add paragrapgh inside div tag.
// div.appendChild(paragraph);




var form1 = document.querySelector (".form1") 
var form2 = document.querySelector (".form2")
var question1 = document.querySelector ("#question1")
var question2 = document.querySelector ("#question2")
var question3 = document.querySelector ("#question3")
var question4 = document.querySelector ("#question4")
var question5 = document.querySelector ("#question5")

//TODO: MAKE A LOOP THAT SHOWS EACH QUESTION IN THE BANK AS QUESTIONS



function hidequestion1 () {
  question1.style.visibility = "hidden";
  quizbox.appendChild(question2)

}
function hidequestion2 () {
  question2.style.visibility = "hidden";
}
function hidequestion3 () {
  question3.style.visibility = "hidden";
}
function hidequestion4 () {
  question4.style.visibility = "hidden";
}
function hidequestion5 () {
  question5.style.visibility = "hidden";
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


//BEGINNING OF THE CODE


var questionBank = ["question1", "question2", "question3", "question4", "question5"]
console.log (questionBank.length)

var quizbox = document.querySelector (".quizbox")

console.log (document.getElementById("quizbox"));


// I want to make a quizbox that will display each of the questions when interacted with
var timeleft = 60;
startquiz=document.getElementById("startquiz");
startquiz.addEventListener("click", function() {
(console.log ("oh happy day, the quizbox was clicked.")); 

var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("time").innerHTML = "Finished";
  } else {
    document.getElementById("time").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
quizbox.appendChild(question1);
// if class
})

//adding question variables individually to call to IDs created in quiz.html; this should have been done with arrays/split or something more efficient.
var question1 = document.querySelector ("#question1")
var question2 = document.querySelector ("#question2")
var question3 = document.querySelector ("#question3")
var question4 = document.querySelector ("#question4")
var question5 = document.querySelector ("#question5")

//The below functions make it so that when a botton is clicked, the next question shows; if the answer is incorrect, time is removed. <and needs work>

function hidequestion1 () {
  question1.style.display = "none";
  quizbox.appendChild(question2)
  var cl=event.target.innerHTML;
  if (cl != "it is an identifier"){
    timeleft -= 10
  }
  console.log (cl)
}
function hidequestion2 () {
  question2.style.display = "none";
  quizbox.appendChild(question3)
  var cl=event.target.innerHTML;
  if (cl != "it is a class"){
    timeleft -= 10
  }
  console.log (cl)
}
function hidequestion3 () {
  question3.style.display = "none";
  quizbox.appendChild(question4)
  var cl=event.target.innerHTML;
  if (cl != "it is an identifier"){
    timeleft -= 10
  }
  console.log (cl)
}
function hidequestion4 () {
  question4.style.display = "none";
  quizbox.appendChild(question5)
  var cl=event.target.innerHTML;
  if (cl != "it is an identifier"){
    timeleft -= 10
  }
  console.log (cl)
}
function hidequestion5 () {
  question5.style.display = "none";
  quizbox.appendChild(END)
}





//END OF CODE, DISREGARD THE BELOW NOTES



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


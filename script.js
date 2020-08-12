//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var DarkAcademiaScore = 0;
var LightAcademiaScore = 0;
var RomanticAcademiaScore = 0;
var ArtAcademiaScore = 0;




//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var result = document.getElementById("result");



//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", DarkAcademia);
q1a2.addEventListener("click", LightAcademia);
q1a3.addEventListener("click", RomanticAcademia);
q1a4.addEventListener("click", ArtAcademia);

q2a1.addEventListener("click", DarkAcademia);
q2a2.addEventListener("click", LightAcademia);
q2a3.addEventListener("click", RomanticAcademia);
q2a4.addEventListener("click", ArtAcademia);

q3a1.addEventListener("click", DarkAcademia);
q3a2.addEventListener("click", LightAcademia);
q3a3.addEventListener("click", RomanticAcademia);
q3a4.addEventListener("click", ArtAcademia);

q4a1.addEventListener("click", DarkAcademia);
q4a2.addEventListener("click", LightAcademia);
q4a3.addEventListener("click", RomanticAcademia);
q4a4.addEventListener("click", ArtAcademia);



//#TODO: Define quiz functions here
function DarkAcademia(){
 DarkAcademiaScore+=1 
 questionCount+=1 
 alert("You have great taste!")
  
  if (questionCount >= 4){
      updateResult();
  }
}
function LightAcademia(){
  LightAcademiaScore+=1
  questionCount+=1
  alert("That looks awesome!")
  
  if (questionCount >= 4){
      updateResult();
  }
}
function RomanticAcademia(){
  RomanticAcademiaScore+=1
  questionCount+=1
  alert("That's so pretty!")
  
  if (questionCount >= 4){
      updateResult();
  }
}
function ArtAcademia(){
  ArtAcademiaScore+=1
  questionCount+=1
  alert("Love your style!")
  
  if (questionCount >= 4){
      updateResult();
  }
}
function updateResult(){
  
}
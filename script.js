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
var retake = document.getElementById("retake");



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

retake.addEventListener("click", retakeQuiz);



//#TODO: Define quiz functions here
function DarkAcademia(){
 DarkAcademiaScore+=1 
 questionCount+=1 
  
  if (questionCount == 4){
      updateResult();
  }
}
function LightAcademia(){
  LightAcademiaScore+=1
  questionCount+=1
  
  if (questionCount == 4){
      updateResult();
  }
}
function RomanticAcademia(){
  RomanticAcademiaScore+=1
  questionCount+=1
  
  if (questionCount == 4){
      updateResult();
  }
}
function ArtAcademia(){
  ArtAcademiaScore+=1
  questionCount+=1
  
  if (questionCount == 4){
      updateResult();
  }
}
function updateResult(){
  if (DarkAcademiaScore>LightAcademiaScore&&DarkAcademiaScore>RomanticAcademiaScore&&DarkAcademiaScore>ArtAcademiaScore)
  {result.innerHTML = "Dark Academia!";}
  else if (LightAcademiaScore>DarkAcademiaScore&&LightAcademiaScore>RomanticAcademiaScore&&LightAcademiaScore>ArtAcademiaScore)
  {result.innerHTML = "Light Academia!"}
  else if (RomanticAcademiaScore>DarkAcademiaScore&&RomanticAcademiaScore>LightAcademiaScore&&RomanticAcademiaScore>ArtAcademiaScore)
  {result.innerHTML = "Romantic Academia!"}
  else if (ArtAcademiaScore>DarkAcademiaScore&&ArtAcademiaScore>RomanticAcademiaScore&&ArtAcademiaScore>LightAcademiaScore)
  {result.innerHTML = "Art Academia!"}
  else if (DarkAcademiaScore==2&&LightAcademiaScore==2)
  {result.innerHTML = "A Mix Of Dark And Light Academia!"}
  else if (DarkAcademiaScore==2&&RomanticAcademiaScore==2)
  {result.innerHTML = "A Mix Of Dark And Romantic Academia!"}
  else if (DarkAcademiaScore==2&&ArtAcademiaScore==2)
  {result.innerHTML = "A Mix Of Dark And Art Academia!"}
  else if (RomanticAcademiaScore==2&&LightAcademiaScore==2)
  {result.innerHTML = "A Mix Of Light And Romantic Academia!"}
  else if (ArtAcademiaScore==2&&LightAcademiaScore==2)
  {result.innerHTML = "A Mix Of Light And Art Academia!"}
  else if (RomanticAcademiaScore==2&&ArtAcademiaScore==2)
  {result.innerHTML = "A Mix Of Romantic And Art Academia!"}
  else
  {result.innerHTML = "A Mix Of Dark, Light, Romantic And Art Academia!"}
}

function retakeQuiz() {
  result.innerHTML = ""; 
  questionCount = 0; 
  DarkAcademiaScore = 0;
  LightAcademiaScore = 0;
  RomanticAcademiaScore = 0;
  ArtAcademiaScore = 0;
  enableQuestions();
}

function disableQ1() {
  q1a1.disabled = true;
  q1a2.disabled = true;
  q1a3.disabled = true;
  q1a4.disabled = true;
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

function disableQ2() {
  q2a1.disabled = true;
  q2a2.disabled = true;
  q2a3.disabled = true;
  q2a4.disabled = true;
}

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

function disableQ3() {
  q3a1.disabled = true;
  q3a2.disabled = true;
  q3a3.disabled = true;
  q3a4.disabled = true;
}

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

function enableQuestions() {
  q1a1.disabled = false;
  q1a2.disabled = false;
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
}
var htmlButton=document.getElementsByClassName("this");
var sectionIntro=document.querySelector("#intro")
var startButton=document.getElementById("begin")
var Line20=document.querySelector("#questions")
var startQuestions=document.querySelector("#questions")
var title=document.querySelector("#questionTitle")
var buttonContainer=document.querySelector("#buttonContainer")
var timerSection=document.querySelector("#timer")

var mockQuestion={
    a:"Mark Down Language",
    b:"Styling Language",
    c:"Scripting Language",
    d:"Templating language",
    answer:"a",
    question:"What is html?",
}
function displayQuestion(question){
    console.log(question)
    buttonContainer.innerHTML=""
    startQuestions.classList.remove("hide")
    title.innerHTML=question.question
   
    var a=document.createElement("button")
    a.setAttribute("value","a")
    a.textContent(question.a)
    a.onclick=handleQuestionAnswer
    var b=document.createElement("button")
    b.setAttribute("value","b")
    b.textContent(question.b)
    b.onclick=handleQuestionAnswer

    var c=document.createElement("button")
    c.setAttribute("value","c")
    c.textContent(question.c)
    c.onclick=handleQuestionAnswer
    var d=document.createElement("button")
    d.setAttribute("value","d")
    d.textContent(question.d)
    d.onclick=handleQuestionAnswer
    

    






buttonContainer.append(a)




}
function endQuiz(){

}

function startQuiz(){
    var time=30
    var timerId=setInterval(
        function(){
            time--
            timerSection.textContent=time
            if (time <= 0 ){
                endQuiz()
            }
        },
        1000
    )
    displayQuestion(mockQuestion)
    
   
    sectionIntro.classList.add("hide")
}
function handleQuestionAnswer(){
    //take in a question
   /// determine whether or not the answer is the correct answer
   //display correct or incorrect
}
startButton.addEventListener("click",function(){
 startQuiz()

})

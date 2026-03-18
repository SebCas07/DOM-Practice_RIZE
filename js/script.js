console.log("script.js loaded");

let title = document.getElementById("page-title"); 
let intructions = document.getElementById("mood-instructions"); 

console.log(title); 
console.log(intructions); 

title.textContent = "How Are You Feeling Today?"; 
intructions.textContent = "Click a mood below to begin."; 

let buttons = document.querySelectorAll("#mood-buttons button"); 
console.log(buttons); 

buttons.forEach(function(button){
    button.addEventListener("click", function(){

        buttons.forEach(function(btn){ 
            btn.classList.remove("selected"); 
        }); 

        button.classList.add("selected"); 
        
        let emoji = button.textContent; 
        let output = document.getElementById("output-message"); 
        output.textContent = `You are feeling ${emoji} today!`; 
    })
})


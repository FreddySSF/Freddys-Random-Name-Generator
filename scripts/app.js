let firstName = document.getElementById("firstName");
let injectHere = document.getElementById("injectHere");
let lastFive = document.getElementById("lastFive");

let randomBtn = document.getElementById("randomBtn");

let num;

let studentNames = [];
let lastNames = [];


randomBtn.addEventListener("click", function (){
    getData();
})

function getData(){
   num = Math.floor(Math.random() * 43);
   fetch("../data/data.json").then(
    response => response.json()
   ).then(
    data => {
        
        studentNames = data.studentNames[num].firstName
        firstName.textContent = studentNames
        console.log(studentNames.textContent)

        if(lastNames.length < 5){
            lastNames.push(firstName.textContent)
        }else{
            lastNames.shift();
            lastNames.push(firstName.textContent)
        }
        lastFive.textContent = lastNames.join(", ");

    }
   )
   
}

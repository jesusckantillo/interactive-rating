let numbers = document.querySelectorAll("li");
let ratingState = document.querySelector(".rating_state");
let sumbitButton = document.getElementById("main_button");
let userRate = document.getElementById("user_rate");
let thankState = document.querySelector(".thanks_state");
let saveNumber;


sumbitButton.addEventListener("click",changeDiv);


for(let i=0; i<numbers.length;i++){
    numbers[i].addEventListener("click",changeColor);
}

function changeColor(event){
    saveNumber = event.target.textContent;
    event.target.style.backgroundColor = "hsl(25, 97%, 53%)"; 
}

function changeDiv(){
    ratingState.style.display = "none";
    userRate.textContent = saveNumber;
    thankState.style.display="flex";
}
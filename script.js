let numberList = document.getElementsByClassName("numbers");
let submitButton = document.getElementById("main_button");
let ratingState = document.getElementsByClassName("rating_state");
let thankState = document.getElementsByClassName("thanks_state");
const numberValue = document.getElementById("number_value");
let number;


submitButton.addEventListener("click",changeDiv);

function changeDiv(){
    ratingState.style.display ="none";
}
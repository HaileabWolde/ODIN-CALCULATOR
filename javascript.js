let numbers = document.querySelector(".numbers");
let operations = document.querySelector(".operations");
let onscreen = document.querySelector(".onscreen");
let isSecondNumber = false;
let firstNumber = "";
let operator = ""; 

function AddNumbers(a, b){
   console.log("hello motherfuckers");
}
function SubNumbers(a, b){
    console.log(a - b);
}
function MultipleNumbers(a, b){
    console.log(a * b)
}
function DivNumbers(a, b){
    console.log(a / b);
}
function ButtonClick(e){
     if (isSecondNumber == true || onscreen.textContent == ""){
        onscreen.textContent = "";
    }
    onscreen.textContent = `${onscreen.textContent}${e.target.id}` ;
}
function StartOperations(e){
    isSecondNumber = true;
    firstNumber = onscreen.textContent;
    if(e.target.id = "+"){
        operator = "+"
    }
    else if(e.target.id = "-"){
        operator = "-"
    }
    else if(e.target.id = "/"){
        operator = "/"
    }
    else if(e.target.id = "*"){
        operator = "*"
    }
    else {
        if(operator = "*"){
            MultipleNumbers(firstNumber, onscreen.textContent)
        }
        else if(operator = "/"){
            DivNumbers(firstNumber, onscreen.textContent)
        }
        else if(operator = "+"){
            AddNumbers(firstNumber, onscreen.textContent)
        }
        else {
            SubNumbers(firstNumber, onscreen.textContent)
        }
    }
}

numbers.addEventListener("click", ButtonClick)
operations.addEventListener("click", StartOperations)
let numbers = document.querySelector(".numbers");
let operations = document.querySelector(".operations");
let onscreen = document.querySelector(".onscreen");
let isSecondNumber = false;
let firstNumber = "";
let secondNumber = "";
let result = "";
function AddNumbers(a, b){
     result = a + b;
    onscreen.textContent = result;
    firstNumber = result;
    secondNumber = "";
}
function SubNumbers(a, b){
     result = a - b;
    onscreen.textContent = result;
    firstNumber = result;
    secondNumber = "";
}
function MultipleNumbers(a, b){
     result = a * b;
    onscreen.textContent = result;
    firstNumber = result;
    secondNumber = "";
}
function DivNumbers(a, b){
    result = a / b;
    onscreen.textContent = result;
    firstNumber = result;
    secondNumber = "";
}
function ButtonClick(e){
    if(onscreen.textContent == ""){
        onscreen.textContent = e.target.id;
    }
    else if (isSecondNumber){
        onscreen.textContent = "";
        secondNumber += e.target.id;
        onscreen.textContent = secondNumber;
    }
    else{
        onscreen.textContent = `${onscreen.textContent}${e.target.id}`;
    }  
}
function StartOperations(e){
    isSecondNumber = true;
    if(!firstNumber){
        firstNumber = onscreen.textContent;
    }
    let operator = e.target.id;
    if(secondNumber){
        switch (operator){
            case "*":
                MultipleNumbers(parseInt(firstNumber), parseInt(secondNumber));
                break;
            case "/":
                DivNumbers(parseInt(firstNumber), parseInt(secondNumber));
                break;
            case "+":
                AddNumbers(parseInt(firstNumber), parseInt(secondNumber));
                break;
            default:
                SubNumbers(parseInt(firstNumber), parseInt(secondNumber));
        }
    }
}

numbers.addEventListener("click", ButtonClick)
operations.addEventListener("click", StartOperations)
let numbers = document.querySelector(".numbers");
let operations = document.querySelector(".operations");
let onscreen = document.querySelector(".onscreen");
let clear = document.querySelector(".clear");
let toggle = document.querySelector(".toggle");
let percentile = document.querySelector(".percentile");
let isSecondNumber = false;
let firstNumber = "";
let secondNumber = "";
let result = "";
let operationsvalue = false;
let currentOperations = null;
function isInt(n){
    return n % 1 == 0;
}
function AddNumbers(a, b){
     result = a + b;
     if(!isInt(result)){
        onscreen.textContent = parseFloat(result).toFixed(2);
     }
     else{
        onscreen.textContent = result;
     }
    firstNumber = result;
    secondNumber = "";
    currentOperations = null;
    isSecondNumber = false;
}
function SubNumbers(a, b){
     result = a - b;
     if(!isInt(result)){
        onscreen.textContent = parseFloat(result).toFixed(2);
     }
     else{
        onscreen.textContent = result;
     }
    firstNumber = result;
    secondNumber = "";
    currentOperations = null;
    isSecondNumber = false;
}
function MultipleNumbers(a, b){
     result = a * b;
     if(!isInt(result)){
        onscreen.textContent = parseFloat(result).toFixed(2);
     }
     else{
        onscreen.textContent = result;
     }
    firstNumber = result;
    secondNumber = "";
    currentOperations = null;
    isSecondNumber = false;
}
function DivNumbers(a, b){
    if(b == 0){
        onscreen.textContent = `👀`;
        firstNumber = "";
        secondNumber = "";
        result = "";
        isSecondNumber = false;
    }
    else{
        result = a / b;
        if(!isInt(result)){
            onscreen.textContent = parseFloat(result).toFixed(2);
         }
         else{
            onscreen.textContent = result;
         }    
        firstNumber = result;
        secondNumber = "";
        currentOperations = null;
        isSecondNumber = false;
    }
    
}
function EqualNumbers(a, b){
    if(firstNumber && secondNumber && currentOperations){
        switch(currentOperations){
            case '*':
                MultipleNumbers(a, b);
                break;
            case '/':
                DivNumbers(a, b);
                break;
            case '+':
                AddNumbers(a, b);
                break;
            case '-':
                SubNumbers(a, b);
                break;
            default:
                break;
        }
    }
}
function ButtonClick(e){
    const input = e.target.id;
    // Prevent adding more than one decimal point
    if (input === '.' && onscreen.textContent.includes('.')) {
        return; // Do nothing if a decimal point is already present
    }
    // Handle new input based on the state
    if (onscreen.textContent === "" || onscreen.textContent === "👀") {
        onscreen.textContent = input;
    }
    else if(firstNumber && input === "."){
        firstNumber += input;
        onscreen.textContent = firstNumber;
    }
     else if (isSecondNumber) {
        secondNumber += input;
        onscreen.textContent = secondNumber;
    } else {
        onscreen.textContent += input;
    }
}
function StartOperations(e){
    isSecondNumber = true;
    let operator = e.target.id;
  // Select all divs inside the operations container
    let divs = operations.querySelectorAll("div");
    for(let i = 0; i < divs.length; i++){
    let h1 = divs[i].querySelector("h1");
    if(h1.id == e.target.id){
        operationsvalue = !operationsvalue;
        divs[i].style.backgroundColor = operationsvalue ? '#e87a1f': '#FF8F1F';
    }   
    }
     if(e.target.id == "*" || e.target.id == "/" || e.target.id == "-" || e.target.id == "+"){
            currentOperations = e.target.id;
        }  
    if(!firstNumber){
        firstNumber = onscreen.textContent;
    }
    if(secondNumber){
        if(e.target.id == "="){
            EqualNumbers(parseFloat(firstNumber), parseFloat(secondNumber));
        }
        else{
            switch (operator){
                case "*":
                    MultipleNumbers(parseFloat(firstNumber), parseFloat(secondNumber));
                    break;
                case "/":
                    DivNumbers(parseFloat(firstNumber), parseFloat(secondNumber));
                    break;
                case "+":
                    AddNumbers(parseFloat(firstNumber), parseFloat(secondNumber));
                    break;
                case "-":
                    SubNumbers(parseFloat(firstNumber),parseFloat(secondNumber));
                    break;
                default:
                    return;
            }
        }     
    }
}
function clearScreen(){
    firstNumber = "";
    secondNumber = "";
    result = "";
    onscreen.textContent = "";
    isSecondNumber = false;
}
function toggleValue(){
    if(onscreen.textContent != 0){
        onscreen.textContent = -(onscreen.textContent);
        firstNumber = onscreen.textContent;
    }
   
}
function calcPercentile(){
    if(onscreen.textContent != 0){
        onscreen.textContent = onscreen.textContent / 100;
    }
}
numbers.addEventListener("click", ButtonClick)
operations.addEventListener("click", StartOperations);
clear.addEventListener("click", clearScreen);
toggle.addEventListener("click", toggleValue);
percentile.addEventListener("click", calcPercentile);
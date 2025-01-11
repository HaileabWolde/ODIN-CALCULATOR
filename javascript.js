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
let isPoint = false;
let currentOperations = null;
function AddNumbers(a, b){
     result = a + b;
    onscreen.textContent = parseFloat(result).toFixed(2);
    firstNumber = result;
    secondNumber = "";
    currentOperations = null;
}
function SubNumbers(a, b){
     result = a - b;
    onscreen.textContent = parseFloat(result).toFixed(2);
    firstNumber = result;
    secondNumber = "";
    currentOperations = null;
}
function MultipleNumbers(a, b){
     result = a * b;
    onscreen.textContent = parseFloat(result).toFixed(2);
    firstNumber = result;
    secondNumber = "";
    currentOperations = null;
}
function DivNumbers(a, b){
    if(b == 0){
        onscreen.textContent = `👀`;
        firstNumber = "";
        secondNumber = "";
        result = "";
    }
    else{
        result = a / b;
        onscreen.textContent = parseFloat(result).toFixed(2);
        firstNumber = result;
        secondNumber = "";
        currentOperations = null;
    }
    
}
function EqualNumbers(a, b){
    if(firstNumber && secondNumber && currentOperations){
        switch(currentOperations){
            case '*':
                MultipleNumbers(a, b);
            case '/':
                DivNumbers(a, b);
            case '+':
                SubNumbers(a, b);
            default:
                AddNumbers(a, b);
        }
    }
}
function ButtonClick(e){
    if(onscreen.textContent == ""){
        onscreen.textContent = e.target.id;
    }
    else if(isPoint == true && e.target.id == "."){
        onscreen.textContent = `${onscreen.textContent}`;
    }
    else if(e.target.id == "."){
        isPoint = true;
        onscreen.textContent = `${onscreen.textContent}${e.target.id}`;
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
    currentOperations = e.target.id;
  // Select all divs inside the operations container
let divs = operations.querySelectorAll("div");
for(let i = 0; i < divs.length; i++){
    let h1 = divs[i].querySelector("h1");
    if(h1.id == e.target.id){
        operationsvalue = !operationsvalue;
        divs[i].style.backgroundColor = operationsvalue ? '#e87a1f': '#FF8F1F';
    }   
}
    if(!firstNumber){
        firstNumber = onscreen.textContent;
    }
    let operator = e.target.id;
    if(secondNumber){
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
                EqualNumbers(parseFloat(firstNumber), parseFloat(secondNumber));
        }
    }
}
function clearScreen(){
    firstNumber = "";
    secondNumber = "";
    result = "";
    onscreen.textContent = "";
}
function toggleValue(){
    if(onscreen.textContent != 0){
        onscreen.textContent = -(onscreen.textContent);
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
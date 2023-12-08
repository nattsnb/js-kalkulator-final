const calcInput = document.querySelector("#calc-input");
const lineOne = document.querySelector("#line-one");
const lineTwo = document.querySelector("#line-two");
const lineThree = document.querySelector("#line-three");
const lineFour = document.querySelector("#line-four");
const plusButton = document.querySelector("#plus-button");
const minusButton = document.querySelector("#minus-button");
const multiplyButton = document.querySelector("#multiply-button");
const divideButton = document.querySelector("#divide-button");
const resultButton = document.querySelector("#result-button");
const clearButton = document.querySelector("#clear-button");

let inputType = typeof Number(calcInput.value);

if (inputType === "number" && lineOne.innerHTML === "") {
    plusButton.addEventListener("click", function (){
        lineOne.innerHTML = calcInput.value;
        lineTwo.innerHTML = "+";
        calcInput.value = "";
    })
    minusButton.addEventListener("click", function (){
        lineOne.innerHTML = calcInput.value;
        lineTwo.innerHTML = "-";
        calcInput.value = "";
    })
    multiplyButton.addEventListener("click", function (){
        lineOne.innerHTML = calcInput.value;
        lineTwo.innerHTML = "*";
        calcInput.value = "";
    })
    divideButton.addEventListener("click", function (){
        lineOne.innerHTML = calcInput.value;
        lineTwo.innerHTML = "/";
        calcInput.value = "";
    })
}

if (inputType === "number") {
    resultButton.addEventListener("click", function (){
        lineThree.innerHTML = calcInput.value;
        lineFour.innerHTML = "=";
        if (lineTwo.innerHTML === "+") {
            calcInput.value = Number(lineOne.innerHTML) + Number(lineThree.innerHTML);
        }
        if (lineTwo.innerHTML === "-") {
            calcInput.value = Number(lineOne.innerHTML) - Number(lineThree.innerHTML);
        }
        if (lineTwo.innerHTML === "*") {
            calcInput.value = Number(lineOne.innerHTML) * Number(lineThree.innerHTML);
        }
        if (lineTwo.innerHTML === "/") {
            calcInput.value = Number(lineOne.innerHTML) / Number(lineThree.innerHTML);
        }

    })
}

function clearTheCalc() {
    clearButton.addEventListener("click", function (){
        lineOne.innerHTML = "";
        lineTwo.innerHTML = "";
        lineThree.innerHTML = "";
        lineFour.innerHTML = "";
        calcInput.value = "";
    })}


clearTheCalc();
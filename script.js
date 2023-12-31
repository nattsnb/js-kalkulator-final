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

if (calcInput) {
    plusButton.addEventListener("click", function (){
        if (lineTwo.innerHTML !== "") {
            return;
        }
        lineOne.innerHTML = calcInput.value;
        lineTwo.innerHTML = "+";
        calcInput.value = "";
    })
    minusButton.addEventListener("click", function (){
        if (lineTwo.innerHTML !== "") {
            return;
        }
        lineOne.innerHTML = calcInput.value;
        lineTwo.innerHTML = "-";
        calcInput.value = "";
    })
    multiplyButton.addEventListener("click", function (){
        if (lineTwo.innerHTML !== "") {
            return;
        }
        lineOne.innerHTML = calcInput.value;
        lineTwo.innerHTML = "*";
        calcInput.value = "";
    })
    divideButton.addEventListener("click", function (){
        if (lineTwo.innerHTML !== "") {
            return;
        }
        lineOne.innerHTML = calcInput.value;
        lineTwo.innerHTML = "/";
        calcInput.value = "";
    })
    resultButton.addEventListener("click", function (){
        if (lineFour.innerHTML !== "" || lineTwo.innerHTML === "") {
            return;
        }
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
            if (lineThree.innerHTML === "0" || lineThree.innerHTML === "") {
                lineOne.innerHTML = "";
                lineTwo.innerHTML = "";
                lineThree.innerHTML = "ERROR";
                lineFour.innerHTML = "";
                calcInput.value = "";
                return;
            }
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
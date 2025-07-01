const buttonValues = [
    "AC","+/-","%","÷",
    "7","8","9","x",
    "4","5","6","-",
    "1","2","3","+",
    "0",".","="
];
const rightSymbols = ["÷","x","-","+","="]
const topSymbols = ["AC","+/-","%"]

document.getElementById('display')
let A = 0;
let operator = null;
let B = null;

function clearAll(){
    A = 0;
    operator = null;
    B = null;
}

for (let i = 0; i < buttonValues.length; i++) {
    let value = buttonValues[i]; 
    let button = document.createElement("button"); //creating the button tag <button></button>
    button.innerText = value;
    // stylling the buttons
    if(value === "0"){
        button.style.width = "200px"
        button.style.gridColumn = "span 2"
    }
    if (rightSymbols.includes(value)){
        button.style.backgroundColor = "#ff9500";
    }
    else if (topSymbols.includes(value)){
        button.style.backgroundColor = "#d4d4d2";
        button.style.color = "#1c1c1c"
    }

    button.addEventListener('click', function(){
        if (rightSymbols.includes(value)) {
            if (value === "="){
                if (A !== null) {
                    B = display.value;
                    let numA = Number(A);
                    let numB = Number(B);

                    if (operator === "÷"){
                        if (numB === 0){
                            display.value = "Error!!"
                        }
                        else{
                        display.value = numA/numB;
                        }
                    }
                    else if (operator === "x") {
                        display.value = numA*numB;
                    }
                    else if (operator === "-") {
                        display.value = numA-numB;
                    }
                    else if (operator === "+") {
                        display.value = numA + numB;
                    }
                    clearAll();
                }
            }
            else{
                operator = value;
                A = display.value;
                display.value = "";
            }
        }
        else if (topSymbols.includes(value)){
            if (value === "AC"){
                clearAll();
                display.value = "";
            }
            else if (value === "+/-"){
                if (display.value !== "" && display.value !== "0"){
                    if (display.value[0] === "-") {
                        display.value = display.value.slice(1);
                    }
                    else {
                        display.value = "-" + display.value;
                    }
                }
            }
            else if (value === "%"){
                display.value = Number(display.value)/100;
            }
        }
        else {
            if(value === "."){
                if(display.value !== "" && !display.value.includes(value)){
                    display.value += value;
                }
            }
            else if (display.value === "0"){
                display.value = value;
            }
            else{
                display.value += value;
            }
        }
    })
    // Add buttons to the calculator
    document.getElementById('buttons').appendChild(button);
    
}
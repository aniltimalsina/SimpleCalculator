let runningTotal = 0;
let buffer = "0";
let previousOperator = null;

const screen = document.querySelector(".screen");

function buttonClick(value) {
    if (isNaN(value)){
        //this is not a number
        handleSymbol(value);
    } else {
        //this is a number
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    if(symbol === 'C'){
        buffer = '0';
        runningTotal = 0;
    } else if(symbol === '+') {
        handleMath(symbol);
    } else if (symbol === '−') {
        handleMath(symbol);
    } else if (symbol === '×') {
        handleMath(symbol);
    } else if (symbol === '÷') {
        handleMath(symbol);
    } else if (symbol === '=') {
        if (previousOperator === null) {
            //need two numbers to do the math
            return;   
        }
        mathOperation(parseInt(buffer));
        previousOperator = null;
        buffer = runningTotal;
        runningTotal = 0;
    }
    else if (symbol === '←') {
        if(buffer.length === 1) {
            buffer = '0';
        } else {
            buffer = buffer.substring(0, buffer.length -1);
        }
    }
    else {
        return;
    }
}

function handleMath(symbol){
    if (buffer === '0'){
        return; //do nothing
    }

    const intBuffer = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        mathOperation(intBuffer);
    }

    previousOperator = symbol;

    buffer = '0';
}

function mathOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '−') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
}

function handleNumber(numberString){
    if (buffer === "0"){
        buffer = numberString;
    } else {
        buffer += numberString;
    }  
}

function init() {
    document.querySelector('.calc-buttons')
        .addEventListener('click', function(event) {
            buttonClick(event.target.innerText);

    } );
}
init();





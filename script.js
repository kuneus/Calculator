const input = document.getElementById('input');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const addBtn = document.getElementById('add');
const subtractBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');
const allClearbtn = document.getElementById('allClear');
const deleteBtn = document.getElementById('delete');
const decimal = document.getElementById('decimal');
const operations = document.getElementsByClassName('operators');
const equal = document.getElementById('equal');
const posNeg = document.getElementById('posNeg');
const allBtns = document.getElementsByClassName('numbers');


//function to update input with button click and limit length of numb
const updateDisplay = (click) => {
    let valOutput = click.target.innerText;
    input.textContent += valOutput;
    if (input.textContent.length > 6 && input.textContent.length < 8) {
        input.style.fontSize = "80px";
    } else if (input.textContent.length > 7 && input.textContent.length < 9) {
        input.style.fontSize = "70px";
    } else if (input.textContent.length > 8 && input.textContent.length < 10) {
        input.style.fontSize = "60px";
    } else if (input.textContent.length > 9) {
        input.textContent = input.textContent.slice(0,-1);
    } else {
        input.style.fontSize = "90px";
    }
};

//loop for all number display inputs
for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener('click', updateDisplay)
};


//event listeners for misc buttons
allClearbtn.addEventListener('click', function (){
    input.textContent = '';
    currentArray.length = 0;
    }
);
decimal.addEventListener('click', function(){
    if (!input.textContent.includes('.')) {
    input.textContent += '.'
    };
    }
);
equal.addEventListener('click', function(){
    operate();
    }
);
deleteBtn.addEventListener('click', function(){
    input.textContent = '';
    }
);
posNeg.addEventListener('click', function(){
    let currentInput = parseFloat(input.textContent);
    if (currentInput > 0) {
    input.textContent = '-' + currentInput;
    } else if (currentInput < 0) {
        input.textContent = currentInput * -1;
    } else {
        input.textContent = '-';
    }
});


let currentArray = [];
let currentInput = '';
let currentOperation = '';
let newInput = '';
let calculation = '';


//event listeners for operators
addBtn.addEventListener('click', function(){
    if (input.textContent != '') {
        let currentInput = parseFloat(input.textContent);
        currentArray.push(currentInput);
        let currentOperation = "add";
        currentArray.push(currentOperation);
        input.textContent = '';
    } else {
        currentArray.pop();
        let currentOperation = "add";
        currentArray.push(currentOperation);
        input.textContent = '';
    }
});
subtractBtn.addEventListener('click', function(){
    if (input.textContent != '') {
        let currentInput = parseFloat(input.textContent);
        currentArray.push(currentInput);
        let currentOperation = "subtract";
        currentArray.push(currentOperation);
        input.textContent = '';
    } else {
        currentArray.pop();
        let currentOperation = "subtract";
        currentArray.push(currentOperation);
        input.textContent = '';
    }
});
multiplyBtn.addEventListener('click', function(){
    if (input.textContent != '') {
        let currentInput = parseFloat(input.textContent);
        currentArray.push(currentInput);
        let currentOperation = "multiply";
        currentArray.push(currentOperation);
        input.textContent = '';
    } else {
        currentArray.pop();
        let currentOperation = "multiply";
        currentArray.push(currentOperation);
        input.textContent = '';
    }
});
divideBtn.addEventListener('click', function(){
    if (input.textContent != '') {
        let currentInput = parseFloat(input.textContent);
        currentArray.push(currentInput);
        let currentOperation = "divide";
        currentArray.push(currentOperation);
        input.textContent = '';
    } else {
        currentArray.pop();
        let currentOperation = "divide";
        currentArray.push(currentOperation);
        input.textContent = '';
    }
});


const add = function(a,b){
    return a + b;
}

const subtract = function(a,b){
    return a - b;
}

const multiply = function(a,b){
    return a * b;
}

const divide = function(a,b){
    return a / b;
}

  
//operate function for calculating multiple operations
// function operate() {
//     let newInput = parseFloat(input.textContent);
//     currentArray.push(newInput);
//     let calculate = currentArray.reduce(function(previousValue, currentValue) {
//         if (currentValue === "multiply") {
//             return previousValue;
//         } return previousValue * currentValue;
//     });

//     input.textContent = calculate;
// }

//operate function which can only calculate a single operation
function operate() {
    let newInput = parseFloat(input.textContent);
    currentArray.push(newInput);
    if (currentArray[1] === "add") {
        let calculation = add(currentArray[0],currentArray[2]);
        input.textContent = calculation;
    } else if (currentArray[1] === "subtract") {
        let calculation = subtract(currentArray[0],currentArray[2]);
        input.textContent = calculation;
    } else if (currentArray[1] === "multiply") {
        let calculation = multiply(currentArray[0],currentArray[2]);
        input.textContent = calculation;
    } else if (currentArray[1] === "divide") {
        let calculation = divide(currentArray[0],currentArray[2]);
        input.textContent = calculation;
    } else {
        alert("haven't fixed that bug yet :-/")
    };
    currentArray =  [];

    //
    let finalInput = parseFloat(input.textContent);

    if (input.textContent.length > 6 && input.textContent.length < 8) {
        input.style.fontSize = "80px";
    } else if (input.textContent.length > 7 && input.textContent.length < 9) {
        input.style.fontSize = "70px";
    } else if (input.textContent.length > 8 && input.textContent.length < 10) {
        input.style.fontSize = "60px";
    } else if (input.textContent.length > 9) {
        input.textContent = finalInput.toExponential(4);
        input.style.fontSize = "60px";
    } else {
        input.style.fontSize = "90px";
    }

    //if calculation exceeds absurdly large or small numbers (1x10^100)
    
    let maxNumber = parseFloat(1e+100);
    let minNumber = parseFloat(1e-100);
    if (finalInput > maxNumber || finalInput < minNumber){
        input.textContent = 'SRSLY?';
    } 

}


//Math.round((num + Number.EPSILON ) * 100 ) / 100
//num = parseFloat(input.textContent);
//can either round decimal to 2 places to give scientific notation, but if latter,
    //need to figure out how to give SciNo while limiting the decimal value within it
    

// pseudocode
// create button functionality
//     number click is displayed on input screen
// create math functions
//     add executes add function
//     subtract executes subtract function
//     multiply executes multiply function
//     divide executes divide function
//     equal executes equal function
// create other functions
//     allClear executes allClear function
//     delete executes delete function
//each operator function must store first set of numbers,
//  clear the input, and store the operation
//operate function must apply the operator functions to
//  the stored numbers 
//  any time a button is clicked, it should highlight the button until a new 
//      button is clicked.
//  once a new button is clicked, it should clear the current input and 
//      allow a new number to be input
//to store numbers, may need to store them in arrays and 
//  use array methods such as map or reduce
//  
//sequence is as follows:
//  1. click numbers into input - DONE
//  2. click an operator - DONE
//  3. store current input and store the operator - DONE
//  4. clear current input and add new input with the next button press - DONE
//  5. repeat steps 2-4 for operations that involve >2 sets of numbers
//  6. store all inputs and operations into an array
//  7. when equal is clicked, all inputs in the array and their operations are 
//      calculated into a final value
//      7a. calculations must follow order of operations
//      7b. must define conditionals within a function for the order of operations
//  8. final value is returned in the input.
//  9. Allow new operations to operate on final value for continuity - DONE
// 10. allClear removes current input and resets array storage - DONE
// 11. clear function clears current input but does not reset array storage - DONE

//Misc:
//  1. Add rule that decimal point can only be used once - DONE
//  2. Add rule that numbers cannot exceed 6 figures, OR
//      decrease font size with additional figures beyond 6, with max input of 9 figures - DONE
//  3. +/- button turns current input into a positive or negative - DONE
//  4. Limit number of characters in calculations

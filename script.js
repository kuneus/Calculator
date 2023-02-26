console.log("hello world");
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

zero.addEventListener('click', function(){
    input.textContent += 0;
});
one.addEventListener('click', function(){
    input.textContent += 1;
});
two.addEventListener('click', function(){
    input.textContent += 2;
});
three.addEventListener('click', function(){
    input.textContent += 3;
});
four.addEventListener('click', function(){
    input.textContent += 4;
});
five.addEventListener('click', function(){
    input.textContent += 5;
});
six.addEventListener('click', function(){
    input.textContent += 6;
});
seven.addEventListener('click', function(){
    input.textContent += 7;
});
eight.addEventListener('click', function(){
    input.textContent += 8;
});
nine.addEventListener('click', function(){
    input.textContent += 9;
});

allClearbtn.addEventListener('click', function (){
    input.textContent = '';
    currentArray.length = 0;
});

decimal.addEventListener('click', function(){
    input.textContent += '.';
});

equal.addEventListener('click', function(){
    operate();
});

deleteBtn.addEventListener('click', function(){
    input.textContent = '';
})

posNeg.addEventListener('click', function(){
    let currentInput = parseInt(input.textContent);
    if (currentInput > 0) {
    input.textContent = '-' + currentInput;
    } else if (currentInput < 0) {
        input.textContent = currentInput * -1;
    }
    //input negative sign in front of positive number,
    //or remove negative sign from negative number
})



let currentArray = [];
let currentInput = '';
let currentOperation = '';
let newInput = '';
let calculation = '';


addBtn.addEventListener('click', function(){
    let currentInput = parseInt(input.textContent);
    currentArray.push(currentInput);
    let currentOperation = "add";
    currentArray.push(currentOperation);
    input.textContent = '';
});

subtractBtn.addEventListener('click', function(){
    let currentInput = parseInt(input.textContent);
    currentArray.push(currentInput);
    let currentOperation = "subtract";
    currentArray.push(currentOperation);
    input.textContent = '';
});

multiplyBtn.addEventListener('click', function(){
    let currentInput = parseInt(input.textContent);
    currentArray.push(currentInput);
    let currentOperation = "multiply";
    currentArray.push(currentOperation);
    input.textContent = '';
});

divideBtn.addEventListener('click', function(){
    let currentInput = parseInt(input.textContent);
    currentArray.push(currentInput);
    let currentOperation = "divide";
    currentArray.push(currentOperation);
    input.textContent = '';
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

    // takes an operator and 2 numbers and then calls one of 
    // the above functions on the numbers.
function operate() {
    let newInput = parseInt(input.textContent);
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
        alert("testing 1 2 3!")
    };
}




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
//  1. click numbers into input
//  2. click an operator
//  3. store current input and store the operator
//  4. clear current input and add new input with the next button press
//  5. repeat steps 2-4 for operations that involve >2 sets of numbers
//  6. store all inputs and operations into an array
//  7. when equal is clicked, all inputs in the array and their operations are 
//      calculated into a final value
//      7a. calculations must follow order of operations
//      7b. must define conditionals within a function for the order of operations
//  8. final value is returned in the input.
//  9. Allow new operations to operate on final value for continuity
// 10. allClear removes current input and resets array storage
// 11. clear function clears current input but does not reset array storage

//Misc:
//  1. Add rule that decimal point can only be used once
//  2. Add rule that numbers cannot exceed 6 figures, OR
//      decrease font size with additional figures beyond 6, with max input of 9 figures
//  3. +/- button turns current input into a positive or negative

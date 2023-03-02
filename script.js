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
    let currentInput = parseFloat(input.textContent);
    currentArray.push(currentInput)
    multiOperate(currentArray);
    currentArray = [];

    }
);
deleteBtn.addEventListener('click', function(){
    input.textContent = '';
    }
);
posNeg.addEventListener('click', function(){
    let currentInput = input.textContent;
    if (currentInput > 0) {
    input.textContent = '-' + currentInput;
    } else if (currentInput < 0) {
        input.textContent = currentInput * -1;
    } else {
        input.textContent = '-';
    }
});


let currentArray = [];
let secondaryArray = [];
let currentInput = '';
let currentOperation = '';
let newInput = '';
let calculation = '';


//event listeners for operators
addBtn.addEventListener('click', function(){
    if (input.textContent != '') {
        let currentInput = parseFloat(input.textContent);
        currentArray.push(currentInput);
        let currentOperation = "+";
        currentArray.push(currentOperation);
        input.textContent = '';
    } else {
        currentArray.pop();
        let currentOperation = "+";
        currentArray.push(currentOperation);
        input.textContent = '';
    }
});
subtractBtn.addEventListener('click', function(){
    if (input.textContent != '') {
        let currentInput = parseFloat(input.textContent);
        currentArray.push(currentInput);
        let currentOperation = "-";
        currentArray.push(currentOperation);
        input.textContent = '';
    } else {
        currentArray.pop();
        let currentOperation = "-";
        currentArray.push(currentOperation);
        input.textContent = '';
    }
});
multiplyBtn.addEventListener('click', function(){
    if (input.textContent != '') {
        let currentInput = parseFloat(input.textContent);
        currentArray.push(currentInput);
        let currentOperation = "*";
        currentArray.push(currentOperation);
        input.textContent = '';
    } else {
        currentArray.pop();
        let currentOperation = "*";
        currentArray.push(currentOperation);
        input.textContent = '';
    }
});
divideBtn.addEventListener('click', function(){
    if (input.textContent != '') {
        let currentInput = parseFloat(input.textContent);
        currentArray.push(currentInput);
        let currentOperation = "/";
        currentArray.push(currentOperation);
        input.textContent = '';
    } else {
        currentArray.pop();
        let currentOperation = "/";
        currentArray.push(currentOperation);
        input.textContent = '';
    }
});


function calculate(a, operator, b) {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}

//operate function for calculating multiple operations
function multiOperate(array) {
    let result = array[0];
    let currentOperator = null;
    let currentOperand = null;
    let secondaryOperator = null;
    let previousOperand = null;
    let secondaryArray = [];
    if (array[1] === '-' || array[1] === '+'){
        if (array[3] === '*' || array[3] === '/') {
        secondaryArray.push(array[0]);
        } 
    }
  
    for (let i = 1; i < array.length; i++) {
        const item = array[i];
        const nextItem = array[i+1];

        if (typeof item === 'number') {
            if (currentOperator === null) { //if no operator established, sets the first item as result
                result = item; //result acts as the first operand
            } else if (currentOperator === '*' || currentOperator === '/') { //if operator is multiply or divide, continue with calculate
                currentOperand = item;
                if (previousOperand === null) { //if previous operand isn't stored
                    result = calculate(result, currentOperator, currentOperand); 
                } else { //if previous operand is stored, then start new accumulator with previous operand
                    previousOperand = calculate(previousOperand, currentOperator, currentOperand); 
                    if (array[i+1] === '+' || array[i+1] === '-') {
                        secondaryArray.push(previousOperand); //push new accumulation to secondary array
                        previousOperand = 0; //reset accumulation to let it accumulate again
                    }
                }
            } else if (secondaryOperator === '+' || secondaryOperator === '-') {
                if (nextItem === '*' || nextItem === '/') { //if current operator is add/subtract but following operator is mult/div
                    previousOperand = item;
                    secondaryArray.push(secondaryOperator); //store lower precedence operators in second array
                } else { //if current operator is add/subject and is not competing with mult/div for following operator
                    currentOperand = item;
                    result = calculate(result, secondaryOperator, currentOperand);
                }
            }
        } else if (typeof item === 'string') { //if current item is a string, establish current item as current operator
            if (item === '*' || item === '/'){
                currentOperator = item;
            } else {
                currentOperator = "hold";
                secondaryOperator = item;
            }
        }
    }

    if (previousOperand === null) { //if simple calculation with no competing operators
        input.textContent = result;
        //secondaryArray.push(result);
    } else { //if calculation involves competing operators
        secondaryArray.push(previousOperand); //append mult/div accumulator from above loop
        console.log(secondaryArray);

        let result = secondaryArray[0];
        let currentOperator = null;
        let currentOperand = null;
        
        for (let i = 1; i < secondaryArray.length; i++) {
            const item = secondaryArray[i];

            if (typeof item === 'number') {
                if (currentOperator === null) {
                    result = item;
                } else {
                    currentOperand = item;
                    result = calculate(result, currentOperator, currentOperand);
                }
            } else if (typeof item === 'string') {
                currentOperator = item;
            }
        }
        input.textContent = result;
        
        /*
        for (let i = 1; i < secondaryArray.length; i++) {
            const item = secondaryArray[i];
            result = secondaryArray[0];
            currentOperator = null;
            currentOperand = null;

            if (typeof item === 'number') {
                if (currentOperator === null) {
                    result = item;
                } else {
                    currentOperand = item;
                    result = calculate(result, currentOperator, currentOperand);
                }
            } else if (typeof item === 'string') {
                currentOperator = item;
            }
        }
        input.textContent = result; */
    }
}


//maybe turn array into one string, and then calculate on single string?

//operate function which can only calculate a single operation
// function operate() {
//     let newInput = parseFloat(input.textContent);
//     currentArray.push(newInput);
//     if (currentArray[1] === "+") {
//         let calculation = add(currentArray[0],currentArray[2]);
//         input.textContent = calculation;
//     } else if (currentArray[1] === "-") {
//         let calculation = subtract(currentArray[0],currentArray[2]);
//         input.textContent = calculation;
//     } else if (currentArray[1] === "*") {
//         let calculation = multiply(currentArray[0],currentArray[2]);
//         input.textContent = calculation;
//     } else if (currentArray[1] === "/") {
//         let calculation = divide(currentArray[0],currentArray[2]);
//         input.textContent = calculation;
//     } else {
//         alert("haven't fixed that bug yet :-/")
//     };
//     currentArray =  [];

//     //if calculation exceeds >6 digits
//     let finalInput = parseFloat(input.textContent);
//     if (input.textContent.length > 6 && input.textContent.length < 8) {
//         input.style.fontSize = "80px";
//     } else if (input.textContent.length > 7 && input.textContent.length < 9) {
//         input.style.fontSize = "70px";
//     } else if (input.textContent.length > 8 && input.textContent.length < 10) {
//         input.style.fontSize = "60px";
//     } else if (input.textContent.length > 9) {
//         input.textContent = finalInput.toExponential(4);
//         input.style.fontSize = "60px";
//     } else {
//         input.style.fontSize = "90px";
//     }

//     //if calculation exceeds absurdly long lengths (>100)
//     let maxNumber = parseFloat(1e+100); //max positive number
//     let minNeg = parseFloat(-1e+100); //max negative number
//     let minDec = parseFloat(1e-100); //max length between 0 and 1
//     let minNegDec = parseFloat(-1e-100); //max length between 0 and -1
//     if (finalInput > maxNumber 
//         || finalInput < minNeg 
//         || finalInput < minDec && finalInput > 0 
//         || finalInput > minNegDec && finalInput < 0){
//         input.textContent = 'SRSLY?';
//     }; 
// }

/*
pseudocode
create button functionality
    number click is displayed on input screen
create math functions
    add executes add function
    subtract executes subtract function
    multiply executes multiply function
    divide executes divide function
    equal executes equal function
create other functions
    allClear executes allClear function
    delete executes delete function
each operator function must store first set of numbers,
 clear the input, and store the operation
operate function must apply the operator functions to
 the stored numbers 
 any time a button is clicked, it should highlight the button until a new 
     button is clicked.
 once a new button is clicked, it should clear the current input and 
     allow a new number to be input
to store numbers, may need to store them in arrays and 
 use array methods such as map or reduce
 
sequence is as follows:
 1. click numbers into input - DONE
 2. click an operator - DONE
 3. store current input and store the operator - DONE
 4. clear current input and add new input with the next button press - DONE
 5. repeat steps 2-4 for operations that involve >2 sets of numbers - DONE
 6. store all inputs and operations into an array - DONE
 7. when equal is clicked, all inputs in the array and their operations are 
     calculated into a final value - DONE
     7a. calculations must follow order of operations - DONE
     7b. must define conditionals within a function for the order of operations - DONE
 8. final value is returned in the input.  - DONE
 9. Allow new operations to operate on final value for continuity - DONE
10. allClear removes current input and resets array storage - DONE
11. clear function clears current input but does not reset array storage - DONE

Misc:
 1. Add rule that decimal point can only be used once - DONE
 2. Add rule that numbers cannot exceed 6 figures, OR
     decrease font size with additional figures beyond 6, with max input of 9 figures - DONE
 3. +/- button turns current input into a positive or negative - DONE
 4. Limit number of characters in calculations - DONE

 CURRENT BUGS/TO-DO:
 - multiple decimal input
 - add character length limit to new multiOperate function
 - divide by zero error
*/

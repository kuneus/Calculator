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

//loop to update input with number key clicked on keyboard and limit length of numb. **turns input into string**
for (let i = 0; i <= 9; i++) {
    document.addEventListener('keydown', function(event) {
      if (event.key === i.toString()) {
        input.textContent += i;
      }
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
    });
  }

//event listeners for misc buttons and keyboard presses
allClearbtn.addEventListener('click', function (){
    input.textContent = '';
    currentArray.length = 0;
    secondaryArray.length = 0;
    }
);
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        input.textContent = '';
        currentArray.length = 0;
        secondaryArray.length = 0;
    }
});

decimal.addEventListener('click', function(){
    if (!input.textContent.includes('.')) {
    input.textContent += '.'
    };
    }
);
document.addEventListener('keydown', function(event) {
    if (!input.textContent.includes('.')) {
        if (event.key === '.') {
            input.textContent += '.';
        }
    }
});

equal.addEventListener('click', function(){
    let currentInput = parseFloat(input.textContent);
    currentArray.push(currentInput)
    multiOperate(currentArray);
    currentArray = [];
    secondaryArray = [];
    }
);
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let currentInput = parseFloat(input.textContent);
        currentArray.push(currentInput)
        multiOperate(currentArray);
        currentArray = [];
        secondaryArray = [];
    }
});

deleteBtn.addEventListener('click', function(){
    input.textContent = '';
    }
);
document.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace') {
        input.textContent = '';
    }
});

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
document.addEventListener('keydown', function(event) {
    if (event.key === '+') {
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
document.addEventListener('keydown', function(event) {
    if (event.key === '-') {
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
document.addEventListener('keydown', function(event) {
    if (event.key === '*') {
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
document.addEventListener('keydown', function(event) {
    if (event.key === '/') {
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
    }
});

//calculate function for calculating operations within multiOperate function
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

let currentArray = [];
let secondaryArray = [];
let currentInput = '';

/*
operate function for calculating multiple operations
In order to operate between mult/div and add/subtract and account for operation precedence (mult/div > add/sub),
I created two arrays and looped through both. All numbers inputted in the calculator are initially pushed to the first array (currentArray).
In the first loop, currentArray calculates all mult/div operations while pushing all add/sub operators and their involved operands to 
the second array--arraySecondary. All products/quotients calculated from currentArray are pushed to arraySecondary.
Then the second loop calculates all add/sub. The final result from the second loop is pushed to the input display. 
*/
function multiOperate(array) {
    let result = array[0];
    let currentOperator = null;
    let currentOperand = null;
    let secondaryOperator = null;
    let previousOperand = null;
  
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const nextItem = array[i+1];

        if (typeof item === 'number') {
            if (currentOperator === null) { //if no operator established, sets the first item as result
                result = item; 
                if (nextItem === '+' || nextItem === '-') { //if next operator is +/-, then append current item to 2nd array
                    secondaryArray.push(item); 
                    secondaryArray.push(nextItem);
                    result = 0; 
                }
            } else if (currentOperator === '*' || currentOperator === '/') { //if operator is multiply or divide, continue with calculate
                currentOperand = item;
                if (previousOperand === null) { 
                    result = calculate(result, currentOperator, currentOperand); 
                    if (nextItem === '+' || nextItem === '-') { //if next operator is +/-, then append current item to 2nd array
                        secondaryArray.push(result); 
                        secondaryArray.push(nextItem);
                        result = 0; 
                    }
                } else { //if previous operand is stored, then start new accumulator with previous operand
                    previousOperand = calculate(previousOperand, currentOperator, currentOperand); 
                    if (nextItem === '+' || nextItem === '-') { //if next operator is +/-, then append current accumulation to 2nd array
                        secondaryArray.push(previousOperand);
                        previousOperand = 0;
                        secondaryArray.push(nextItem);

                    }
                }
            } else if (secondaryOperator === '+' || secondaryOperator === '-') {
                if (nextItem === '*' || nextItem === '/') { //if current operator is add/subtract but following operator is mult/div
                    previousOperand = item;
                    secondaryArray.push(secondaryOperator);
                    result = 0;
                } else { //if current operator is add/subjtract and next operator is not mult/div 
                    secondaryArray.push(item);
                    secondaryArray.push(nextItem);
                    result = 0;
                }
            }
        } else if (typeof item === 'string') { //if current item is a string, establish current item as current operator for mult/div or 2nd operator for add/sub
            if (item === '*' || item === '/'){
                currentOperator = item;
            } else {
                currentOperator = "hold";
                secondaryOperator = item;
            }
        }
    }
    secondaryArray.push(result); 

    console.log(currentArray);
    console.log(secondaryArray);

    //second loop for calculating secondaryArray
    if (previousOperand !== null) {
        secondaryArray.push(previousOperand);
    };

    result = secondaryArray[0];
    currentOperator = null;
    currentOperand = null;
        
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



    //if calculation exceeds >6 digits
    let finalInput = parseFloat(input.textContent);
    if (input.textContent.length > 6 && input.textContent.length < 8) {
        input.style.fontSize = "80px";
    } else if (input.textContent.length > 7 && input.textContent.length < 9) {
        input.style.fontSize = "70px";
    } else if (input.textContent.length > 8 && input.textContent.length < 10) {
        input.style.fontSize = "60px";
    } else if (input.textContent.length > 9) { //if calculation exceeds 9 digits, turn it into scientific notation
        input.textContent = finalInput.toExponential(4);
        input.style.fontSize = "60px";
    } else {
        input.style.fontSize = "90px";
    }

    //if calculation exceeds absurdly long lengths (>100)
    let maxNumber = parseFloat(1e+100); //max positive number
    let minNeg = parseFloat(-1e+100); //max negative number
    let minDec = parseFloat(1e-100); //max length for decimals between 0 and 1
    let minNegDec = parseFloat(-1e-100); //max length for decimals between 0 and -1
    if (finalInput > maxNumber 
        || finalInput < minNeg 
        || finalInput < minDec && finalInput > 0 
        || finalInput > minNegDec && finalInput < 0){
        input.textContent = 'SRSLY?';
    };
}


/*
pseudocode
 
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
 - multiple decimal input - DONE
 - add character length limit to new multiOperate function - DONE
 - divide by zero error
 - add keyboard presses for all number and misc keys - DONE
 - does not perform all equations correctly. Need to fix multiOperate function - DONE
 Must be able to perform following calculations correctly:

 12 + 7 - 5 * 3 = 4
    PASSED - 
12 + 7 - 5 - 4 * 3 = 2
    PASSED - 
 10 - 2 * 5 + 20 / 5 * 3 - 6 * 3 = -6 
    PASSED - 
 1 + 2 + 3 - 4 = 2
    PASSED - 
 10 * 2 - 3 + 5 = 22 
    PASSED
10 - 2 * 5 = 0
    PASSED - 
10 - 2 * 5 + 3 = 3
    PASSED - 
10 - 2 * 5 + 3 + 6 = 9
    PASSED - 
10 - 2 * 5 + 3 * 2 = 6
    PASSED -
2 * 3 - 3 * 2 = 0;
    PASSED - 



 OPTIONAL TO-DO
 - display entire calculation on input, including operators
 - maintain highlight of operator until number button press
*/

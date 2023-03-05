const input = document.getElementById('input');
const inputTwo = document.getElementById('secondInput');
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

let inputTwoArray = [];
const joinedInput = inputTwoArray.join('');


//function to update input with button click and limit length of numb
const updateDisplay = (click) => {
    let valOutput = click.target.innerText;

    if (inputTwoArray.includes(' =')){
        inputTwoArray = [];
        inputTwoArray.push(input.textContent);
        inputTwo.textContent = inputTwoArray.join('');
    };

    input.textContent += valOutput;
    inputTwoArray.push(valOutput);
    inputTwo.textContent = inputTwoArray.join('');
    if (input.textContent.length > 6 && input.textContent.length < 8) {
        input.style.fontSize = "80px";
    } else if (input.textContent.length > 7 && input.textContent.length < 9) {
        input.style.fontSize = "70px";
    } else if (input.textContent.length > 8 && input.textContent.length < 10) {
        input.style.fontSize = "60px";
    } else if (input.textContent.length > 9) {
        input.textContent = input.textContent.slice(0,-1);
        inputTwoArray.pop();
        inputTwo.textContent = inputTwoArray.join('');
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
        if (inputTwoArray.includes(' =')){
            inputTwoArray = [];
            inputTwoArray.push(input.textContent);
            inputTwo.textContent = inputTwoArray.join('');
        };
      
        if (event.key === i.toString()) {
        input.textContent += i;
        inputTwoArray.push(i)
        inputTwo.textContent = inputTwoArray.join('');
      }
      
      if (input.textContent.length > 6 && input.textContent.length < 8) {
        input.style.fontSize = "80px";
    } else if (input.textContent.length > 7 && input.textContent.length < 9) {
        input.style.fontSize = "70px";
    } else if (input.textContent.length > 8 && input.textContent.length < 10) {
        input.style.fontSize = "60px";
    } else if (input.textContent.length > 9 && !input.textContent.includes('e')) {
            input.textContent = input.textContent.slice(0,-1); 
            inputTwoArray.pop();
            inputTwo.textContent = inputTwoArray.join('');  
    } else if (input.textContent.includes('e')){ 
            if (input.textContent.length > 10) {
               input.textContent = input.textContent.slice(0,-1); 
                inputTwoArray.pop();
                inputTwo.textContent = inputTwoArray.join(''); 
            }
    } else {
        input.style.fontSize = "90px";
    }
    });
  }


//event listeners for misc buttons and keyboard presses
allClearbtn.addEventListener('click', function (){
    input.textContent = '';
    inputTwo.textContent = '';
    inputTwoArray.length = 0;
    currentArray.length = 0;
    secondaryArray.length = 0;
    }
);
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        input.textContent = '';
        inputTwo.textContent = '';
        inputTwoArray.length = 0;
        currentArray.length = 0;
        secondaryArray.length = 0;
    }
});

decimal.addEventListener('click', function(){
    if (!input.textContent.includes('.')) {
    input.textContent += '.';
    inputTwoArray.push('.');
    };
    }
);
document.addEventListener('keydown', function(event) {
    if (!input.textContent.includes('.')) {
        if (event.key === '.') {
            input.textContent += '.';
            inputTwoArray.push('.');
        }
    }
});

equal.addEventListener('click', function(){
    let currentInput = parseFloat(input.textContent);
    currentArray.push(currentInput)
    multiOperate(currentArray);
    currentArray = [];
    secondaryArray = [];
    if (!inputTwoArray.includes(' =')){
        inputTwoArray.push(' =');
        inputTwo.textContent = inputTwoArray.join('');
    }; 
    }
);
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        let currentInput = parseFloat(input.textContent);
        currentArray.push(currentInput)
        multiOperate(currentArray);
        currentArray = [];
        secondaryArray = [];
        if (!inputTwoArray.includes(' =')){
            inputTwoArray.push(' =');
            inputTwo.textContent = inputTwoArray.join('');
        };  

    }
});

deleteBtn.addEventListener('click', function(){
    let deleteLength = input.textContent.length;
    input.textContent = '';
    for (let i = 0; i < deleteLength; i++) {
        inputTwoArray.pop();
    } 
    let joinedInput = inputTwoArray.join('');
    inputTwo.textContent = joinedInput;   
    }
);
document.addEventListener('keydown', function(event) {
    let deleteLength = input.textContent.length;
    if (event.key === 'Backspace') {
        input.textContent = '';
        for (let i = 0; i < deleteLength; i++) {
            inputTwoArray.pop();
        } 
        let joinedInput = inputTwoArray.join('');
        inputTwo.textContent = joinedInput;   
    }
});

posNeg.addEventListener('click', function(){
    let currentInput = input.textContent;
    let inputLength = input.textContent.length;
    if (currentInput > 0) {
        input.textContent = '-' + currentInput;
        inputTwoArray.splice(-inputLength, 0, "-");
        inputTwo.textContent = inputTwoArray.join('');
    } else if (currentInput < 0) {
        input.textContent = currentInput * -1;
        inputTwoArray.splice(-inputLength, 1);
        inputTwo.textContent = inputTwoArray.join('');
    } else {
        if (input.textContent === '-') {
            input.textContent = '';
            inputTwo.textContent = '';
            inputTwoArray = [];
        } else {
        inputTwoArray.push('-');
        inputTwo.textContent = inputTwoArray.join('');
        input.textContent = '-';
        }
    };

    if (inputTwoArray.includes(' =')){
        inputTwoArray = [];
        inputTwoArray.push(input.textContent)
        inputTwo.textContent = inputTwoArray.join('');
    }; 
});


//event listeners for appending operators after calculation has been performed
for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener('click', function(){
        console.log("test");
        if (inputTwoArray.includes(' =')){
            inputTwoArray = [];
            inputTwoArray.push(input.textContent);
            inputTwo.textContent = inputTwoArray.join('');
        };
    })
};

//event listeners for operators
addBtn.addEventListener('click', function(){
    
    if (input.textContent != '') {
        let currentInput = parseFloat(input.textContent);
        currentArray.push(currentInput);
        let currentOperation = "+";
        currentArray.push(currentOperation);
        input.textContent = '';
        inputTwoArray.push(' + ');
        inputTwo.textContent = inputTwoArray.join('');
    } else {
        currentArray.pop();
        let currentOperation = "+";
        currentArray.push(currentOperation);
        input.textContent = '';
        inputTwoArray.pop();
        inputTwoArray.push(' + ');
        inputTwo.textContent = inputTwoArray.join('');
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === '+') {
        if (inputTwoArray.includes(' =')){
            inputTwoArray = [];
            inputTwoArray.push(input.textContent);
            inputTwo.textContent = inputTwoArray.join('');
        };
        
        if (input.textContent != '') {
            let currentInput = parseFloat(input.textContent);
            currentArray.push(currentInput);
            let currentOperation = "+";
            currentArray.push(currentOperation);
            input.textContent = '';
            inputTwoArray.push(' + ');
            inputTwo.textContent = inputTwoArray.join('');
        } else {
            currentArray.pop();
            let currentOperation = "+";
            currentArray.push(currentOperation);
            input.textContent = '';
            inputTwoArray.pop();
            inputTwoArray.push(' + ');
            inputTwo.textContent = inputTwoArray.join('');
        };   
    }
});


subtractBtn.addEventListener('click', function(){    
    if (input.textContent != '') {
        let currentInput = parseFloat(input.textContent);
        currentArray.push(currentInput);
        let currentOperation = "-";
        currentArray.push(currentOperation);
        input.textContent = '';
        inputTwoArray.push(' - ');
        inputTwo.textContent = inputTwoArray.join('');
    } else {
        currentArray.pop();
        let currentOperation = "-";
        currentArray.push(currentOperation);
        input.textContent = '';
        inputTwoArray.pop();
        inputTwoArray.push(' - ');
        inputTwo.textContent = inputTwoArray.join('');
    }
});
document.addEventListener('keydown', function(event) {
    if (event.key === '-') {
        if (inputTwoArray.includes(' =')){
            inputTwoArray = [];
            inputTwoArray.push(input.textContent);
            inputTwo.textContent = inputTwoArray.join('');
        };
        
        if (input.textContent != '') {
            let currentInput = parseFloat(input.textContent);
            currentArray.push(currentInput);
            let currentOperation = "-";
            currentArray.push(currentOperation);
            input.textContent = '';
            inputTwoArray.push(' - ');
            inputTwo.textContent = inputTwoArray.join('');
        } else {
            currentArray.pop();
            let currentOperation = "-";
            currentArray.push(currentOperation);
            input.textContent = '';
            inputTwoArray.pop();
            inputTwoArray.push(' - ');
            inputTwo.textContent = inputTwoArray.join('');
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
        inputTwoArray.push(' * ');
        inputTwo.textContent = inputTwoArray.join('');
    } else {
        currentArray.pop();
        let currentOperation = "*";
        currentArray.push(currentOperation);
        input.textContent = '';
        inputTwoArray.pop();
        inputTwoArray.push(' * ');
        inputTwo.textContent = inputTwoArray.join('');
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
            inputTwoArray.push(' * ');
            inputTwo.textContent = inputTwoArray.join('');
        } else {
            currentArray.pop();
            let currentOperation = "*";
            currentArray.push(currentOperation);
            input.textContent = '';
            inputTwoArray.pop();
            inputTwoArray.push(' * ');
            inputTwo.textContent = inputTwoArray.join('');
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
        inputTwoArray.push(' / ');
        inputTwo.textContent = inputTwoArray.join('');
    } else {
        currentArray.pop();
        let currentOperation = "/";
        currentArray.push(currentOperation);
        input.textContent = '';
        inputTwoArray.pop();
        inputTwoArray.push(' / ');
        inputTwo.textContent = inputTwoArray.join('');
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
            inputTwoArray.push(' / ');
            inputTwo.textContent = inputTwoArray.join('');
        } else {
            currentArray.pop();
            let currentOperation = "/";
            currentArray.push(currentOperation);
            input.textContent = '';
            inputTwoArray.pop();
            inputTwoArray.push(' / ');
            inputTwo.textContent = inputTwoArray.join('');
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
            if (currentOperator === null) { 
                result = item; 
                if (nextItem === '+' || nextItem === '-') { 
                    secondaryArray.push(item); 
                    secondaryArray.push(nextItem);
                    result = 0; 
                }
            } else if (currentOperator === '*' || currentOperator === '/') { 
                currentOperand = item;
                if (previousOperand === null) { 
                    result = calculate(result, currentOperator, currentOperand); 
                    if (nextItem === '+' || nextItem === '-') { 
                        secondaryArray.push(result); 
                        secondaryArray.push(nextItem);
                        result = 0; 
                    }
                } else { 
                    previousOperand = calculate(previousOperand, currentOperator, currentOperand); 
                    if (nextItem === '+' || nextItem === '-') { 
                        secondaryArray.push(previousOperand);
                        previousOperand = 0;
                        secondaryArray.push(nextItem);

                    }
                }
            } else if (secondaryOperator === '+' || secondaryOperator === '-') {
                if (nextItem === '*' || nextItem === '/') { 
                    previousOperand = item;
                    secondaryArray.push(secondaryOperator);
                    result = 0;
                } else { 
                    secondaryArray.push(item);
                    secondaryArray.push(nextItem);
                    result = 0;
                }
            }
        } else if (typeof item === 'string') { 
            if (item === '*' || item === '/'){
                currentOperator = item;
            } else {
                currentOperator = "hold";
                secondaryOperator = item;
            }
        }
    }
    secondaryArray.push(result); 

    //second loop for calculating secondaryArray
    if (previousOperand !== null) { //if any remaining accumulation from above loop, append to 2nd array
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
    } else if (input.textContent.length > 9) { 
        input.textContent = finalInput.toExponential(4);
        input.style.fontSize = "60px";
    } else {
        input.style.fontSize = "90px";
    }

    //if calculation exceeds absurdly long lengths (>100)
    let maxNumber = parseFloat(1e+100); 
    let minNeg = parseFloat(-1e+100); 
    let minDec = parseFloat(1e-100); 
    let minNegDec = parseFloat(-1e-100); 
    if (finalInput > maxNumber 
        || finalInput < minNeg 
        || finalInput < minDec && finalInput > 0 
        || finalInput > minNegDec && finalInput < 0){
        input.textContent = 'SRSLY?';
    };
}

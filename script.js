console.log("hello world");
const input = document.getElementById('input');
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
});

decimal.addEventListener('click', function(){
    input.textContent += '.';
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

function operate(a,b) {

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


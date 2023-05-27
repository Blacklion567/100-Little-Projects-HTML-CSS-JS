// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
//  Minus number to result
function deletedNumber() {
    document.getElementById("result").value = document
        .getElementById("result")
        .value.slice(0, -1);
}
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
// This function evaluates the expression and returns result
function calculate() {
    let result = document.getElementById("result").value;
    resultAnswer = eval(result);
    document.getElementById("result").value = resultAnswer;
}
// Get A Random Colors By Clicking The Button
// Get the button element
let button = document.getElementById("colorChosen");
button.addEventListener('click', () => {
    document.querySelector('.calculator').style.background = '#000'
})
let button1 = document.getElementById("colorChosen1");
button1.addEventListener('click', () => {
    document.querySelector('.calculator').style.background = '#478559'
})
let button2 = document.getElementById("colorChosen2");
button2.addEventListener('click', () => {
    document.querySelector('.calculator').style.background = '#F7882F'
})
let button3 = document.getElementById("colorChosen3");
button3.addEventListener('click', () => {
    document.querySelector('.calculator').style.background = '#a4893d'
})

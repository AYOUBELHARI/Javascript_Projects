const add = (array) => {
    array.reduce((a, b) => a + b)
};

const subtract = (array) => {
    array.reduce((a, b) => a - b)
};

const multiply = (array) => {
    array.reduce((a, b) => a * b)
};

const divide = (array) => {
    array.reduce((a, b) => a / b)
};

const operators = ['+', '-', 'x', '/'];
const operate = (str) => {
    let strOperators = [];
    let operatorsIndexes = [];

    for (let i = 0; i < str.length; i++) {
        if (operators.includes(str[i])) {
            strOperators.push(str[i]);
            operatorsIndexes.push(i);
        }
    }
};

const screen = document.querySelector('.screen')
const buttons = document.querySelectorAll('button');

let screenValue = '';
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === '=') {

        } else {
            screenValue += button.textContent;
            screen.textContent = screenValue;
        }
    })
});

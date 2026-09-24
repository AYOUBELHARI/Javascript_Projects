const operators = ['+', '-', 'x', '/'];
const operate = (str) => {
    const tokens = str.split(/([+\-x/])/).filter(t => t !== '');

    if (tokens.length === 1) return tokens[0];

    let result = parseFloat(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
        let op = tokens[i];
        let num = parseFloat(tokens[i + 1]);
        
        switch(op) {
            case '+': result += num; break;
            case '-': result -= num; break;
            case 'x': result *= num; break;
            case '/':
                if (num2 === 0) return 'Error';
                result /= num; break;
        }
    }
    return result;
};

const screen = document.querySelector('.screen')
const buttons = document.querySelectorAll('button');

let screenValue = '';
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let content = screen.textContent;
        if (button.textContent === '=') {
            screen.textContent = operate(content);
            screenValue = screen.textContent;
        } else {
            if (screenValue.length >= 13) return;
            screenValue += button.textContent;
            screen.textContent = screenValue;
        }
    })
});

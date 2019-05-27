import './lesson_10.css';

const btn = document.querySelector('#calculatorBtn');

btn.onclick = calculate;

function calculate() {
    const a = prompt('operand A');
    const b = prompt('operand B');
    const operator = prompt('Enter +, -, *  or /');
    
    if (Boolean(a) === false
        || Boolean(b) === false
        || isNaN(Number(a))
        || isNaN(Number(b))
    ) {
        alert('Please enter valid operands');
    } else {
        if (operator === '+') {
            add();
        } else if (operator === '-') {
    
        } else if (operator === '*') {
    
        } else if (operator === '/') {
    
        } else {
            alert('Operator invalid!');
        }
    }

    function add() {
        console.log(Number(a) + Number(b));
    }
}
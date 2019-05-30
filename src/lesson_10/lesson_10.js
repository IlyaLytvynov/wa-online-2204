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
            print(add(a, b));
        } else if (operator === '-') {
            print(sub(a, b))
        } else if (operator === '*') {
            print(mul(a, b));
        } else if (operator === '/') {
            print(divide(a, b));
        } else {
            alert('Operator invalid!');
        }
    }

    // declaration
    function add(operandA, operandB) {
        return Number(operandA) + Number(operandB);
    }

    function sub(operandA, operandB) {
        return Number(operandA) - Number(operandB);
    }   

    function mul(operandA, operandB) {
        return Number(operandA) * Number(operandB);
    }  

    function divide(operandA, operandB) {
        return Number(operandA) / Number(operandB);
    }  

    function print(dataToPrint) {
        alert(dataToPrint);
    }
}
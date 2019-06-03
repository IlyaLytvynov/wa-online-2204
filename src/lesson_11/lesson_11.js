import './lesson_11.scss';

function genRandomInteger() {
    return Math.floor(Math.random() * 256);
}

function getRandomColor() {
    const randomRed = genRandomInteger();
    const randomGreen = genRandomInteger();
    const randomBlue = genRandomInteger();

    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

function switcher(btn) {
    function changeColor() {
        btn.classList.toggle('btn_active');
        btn.textContent = 'Hello WORLD!';

        btn.style.backgroundColor = getRandomColor();
    }

    btn.onclick = changeColor;
}

function textCreator(textBlock) {
    const btn = textBlock.querySelector('.btn');
    const span = textBlock.querySelector('.output');

    function openPrompt() {
       const text = prompt('Enter message');
        span.textContent = text;
    }
    
    btn.onclick = openPrompt;
}

textCreator(document.querySelector('#textBlock1'));
textCreator(document.querySelector('#textBlock2'));
switcher(document.querySelector('#testBtn3'));
switcher(document.querySelector('#testBtn4'));
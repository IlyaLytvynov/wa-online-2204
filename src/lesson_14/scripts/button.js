import '../styles/btn.scss';

class Button {
    constructor(target = document.querySelector('body'), title = 'Empty', whatToDoWhenUserClick) {
        this.target = target;
        this.title = title;
        this.whatToDoWhenUserClick = whatToDoWhenUserClick;
        this.render();
    }

    render() {
        this.btnDomElement = document.createElement('button');
        this.btnDomElement.classList.add('btn');
        this.btnDomElement.textContent = this.title;
        this.btnDomElement.addEventListener('click', () => this.whatToDoWhenUserClick());
        this.target.appendChild(this.btnDomElement);
    }
}
// НАСЛЕДОВАНИЕ
class RoundButton extends Button {
    constructor(target, title, whatToDoWhenUserClick) {
        super(target, title, whatToDoWhenUserClick);
    }
    // ПОЛИМОРФИЗМ 
    render() {
        super.render();
        this.btnDomElement.classList.add('btn_round');
       console.log('adsasd');
    }
}

export { Button, RoundButton };
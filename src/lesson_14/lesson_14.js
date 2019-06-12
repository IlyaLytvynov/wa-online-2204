import './lesson_14.scss';
import { Button, RoundButton } from './scripts/button';
import { LampToggler } from './scripts/lampToggler';

class Persone {
    constructor(a, b, c) {
        this.name = a;
        this.firstName = b;
        this.age = c;
    }

    say(phrase) {
        console.log(this.name +':', phrase)
    }

    move() {
        console.log(this.name +':', 'MOVE');
    }
}

class Developer extends Persone {
    constructor(a, b, c, lang) {
        super(a, b, c);
        this.lang = lang;
    }

    code() {
        console.log('I\'ve written some code on ' + this.lang);
    }
}

class BEDeveloper extends Developer {
    constructor(a, b, c, lang, DBtype) {
        super(a, b, c, lang);
        this.DBtype = DBtype;
    }

    developDataBase() {
        console.log('Created DB' + this.DBtype);
    }
}

const someUser = new Persone('John', 'Snow', 10);
const userJack = new Persone('Jack', 'Johns', 40);
const jackJsDev = new Developer('Jack', 'Johns', 40, 'JS');
const johnGoBEDev = new BEDeveloper('John', 'Johns', 40, 'GO', 'MYSQL');

window.userJack = userJack;
window.jackJsDev = jackJsDev;
window.johnGoBEDev = johnGoBEDev;

someUser.say('What\s up dudes!!');
userJack.say('HELLO!');
const togler = new LampToggler(document.querySelector('.lamps'));
const greetBtn = new Button(undefined, 'greet', () => alert('Hello USER!!!'));
const logInBtn = new RoundButton(undefined, 'Log In', () => prompt('Enter your username'));

window.logInBtn = logInBtn;
window.greetBtn = greetBtn;



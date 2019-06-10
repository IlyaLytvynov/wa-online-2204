import './lesson_14.scss';
import { Lamp } from './scripts/lamp';
import { LampToggler } from './scripts/lampToggler';

function greeting() {
    console.log('THIS>>>', this);
    console.log(this.name + ' ' + this.age);
}

function User(a, b, c) {
    this.name = a;
    this.firstName = b;
    this.age = c;
    this.greet = greeting;
}

const someUser = new User('Hello world', 'First test name', 10);
const userJack = new User('Jack', 'Johns', 40);
const userJohn = new User('John', 'Snow', 35);

const toggler = new LampToggler(document.querySelector('.lamps'));
toggler.render();

const otherSimpleLamp = new Lamp(document.querySelector('.placeForOtherLamp'));
otherSimpleLamp.render();

window.otherSimpleLamp = otherSimpleLamp;


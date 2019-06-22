import './practice_8.css';
import { ApiRequest } from '../lesson_17/utils/apiRequest';
const btn = document.querySelector('#btn');

const t = '10';
let i = 0;
const domain = 'https://evening-dawn-11092.herokuapp.com';

function promisifiedGet(resourceUrl) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', domain + resourceUrl);
        xhr.send();

        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === 4) {
                console.log(xhr);
                if (xhr.status >= 500 || xhr.status >= 400) {
                    console.log(typeof xhr.response);
                    reject(xhr.error);
                } else if (xhr.status >= 300 || xhr.status === 200) {
                    console.log(typeof xhr.response);
                    console.log(resolve)
                    resolve(xhr.response);
                }
            }
        });
    });
}

class Dog {
    bark = () => {
        console.log('bark');
        return this
    }
}

const myDog = new Dog();

myDog.bark().bark().bark().bark().bark();

function fetchList() {
    fetch('https://evening-dawn-11092.herokuapp.com/list')
        .then((resp) => {
            console.log(resp);
            return resp.json()
        })
        .then((json) => {
            console.log(json);
        }) 
        .catch(() => {
            
        });
}

btn.addEventListener('click', delay(fetchList));

function delay(fn, time = 2000) {
    let timeOutId;
    const delaiedFn = () => {
        if (!timeOutId) {
            timeOutId = setTimeout(() => {
                timeOutId = undefined;
                fn();
            }, time);
        }
    }
    return delaiedFn;
}

console.log('asdasd');
console.log('TEST');
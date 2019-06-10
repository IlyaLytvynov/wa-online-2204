import { Lamp } from './lamp';


function LampToggler(rootElement = document.querySelector('body')) {
    this.t = 'asdasd';
    this.lamps = [];
    this.rootElement = rootElement;
    this.render = render;
    console.log(this.t);
}

function render() {
    console.log(this.t);
    this.lampAdder = document.createElement('button');
    this.lampAdder.textContent = 'Add';
    this.lampsToggleOff = document.createElement('button');
    this.lampsToggleOff.textContent = 'Reverse light!';
    this.rootElement.appendChild(this.lampsToggleOff);
    this.rootElement.appendChild(this.lampAdder);

    this.lampAdder.addEventListener('click', () => {
        const lamp = new Lamp(this.rootElement);
        lamp.render();
        this.lamps.push(lamp);
    });

    this.lampsToggleOff.addEventListener('click', () => {
        for (let i = 0; i < this.lamps.length; i++) {
            if (this.lamps[i].isActive) {
                this.lamps[i].switchOff()
            } else {
                this.lamps[i].switchOn();
            }
        }
    });
}

export { LampToggler }


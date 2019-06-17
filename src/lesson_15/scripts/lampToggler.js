import { Lamp } from './lamp';
import { Button } from './button';

class LampToggler {
    constructor(rootElement = document.querySelector('body')) {
        this.lamps = [];
        this.rootElement = rootElement;
        console.log(this.t);
        window.lamps = this.lamps;
        this.render();
    }


    render() {
        console.log(this.t);
        this.lampAdder = new Button(this.rootElement, 'Add', () => {
            const lamp = new Lamp(this.rootElement);
            lamp.render();
            this.lamps.push(lamp);
        });

        this.lampsToggleOff = new Button(this.rootElement, 'Reverse light!', () => {
            for (let i = 0; i < this.lamps.length; i++) {
                if (this.lamps[i].isActive) {
                    this.lamps[i].switchOff()
                } else {
                    this.lamps[i].switchOn();
                }
            }
        });
    }
    
}

export { LampToggler }


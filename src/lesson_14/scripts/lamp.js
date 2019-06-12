class Lamp {
    constructor(rootElement = document.querySelector('body')) {
        this.isActive = false;
        this.rootElement = rootElement;
    }

    switchOff() {
        this.btn.style.backgroundColor = '';
        this.isActive = false;
    }

    switchOn() {
        this.btn.style.backgroundColor = 'red';
        this.isActive = true;
    }

    render() {
        this.btn = document.createElement('button');
        this.btn.style.width = '100px';
        this.btn.style.height = '100px';
        this.btn.addEventListener('click', () => {
            if (this.isActive) {
                this.switchOff();
            } else {
                this.switchOn();
            }
        });

        this.rootElement.appendChild(this.btn);
    }
}

export { Lamp };
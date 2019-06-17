const ACTIVE_CLASS_NAME = 'active';

function trafficLight(target = document.querySelector('body'), colors = ['red', 'yellow', 'green']) {
    const trafficLights = [];
    const trafficLighterRootElement = document.createElement('div');

    render();

    function render() {
        for (let i = 0; i < colors.length; i++) {
            const light = document.createElement('button');
            light.classList.add('traffic-lighter__light', 'traffic-lighter__light_'  + colors[i]);
            trafficLights.push(light);
            trafficLighterRootElement.appendChild(light);
        }

        trafficLighterRootElement.classList.add('traffic-lighter');
        target.appendChild(trafficLighterRootElement);
    }

    function switchOff() {
        for (let i = 0; i < trafficLights.length; i++) {
            const light = trafficLights[i];
            light.classList.remove(ACTIVE_CLASS_NAME);
        }
    }

    for (let i = 0; i < trafficLights.length; i++) {
        trafficLights[i].onclick = function () {
            switchOff()
            trafficLights[i].classList.toggle(ACTIVE_CLASS_NAME);
        };
    }
}

export { trafficLight };

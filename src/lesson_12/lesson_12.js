import './lesson_12.scss';
import './styles/traffic-lighter.scss';

function trafficLight(trafficLighter) {
    const trafficLights = trafficLighter.querySelectorAll('.traffic-lighter__light');

    console.log(trafficLights.length);

    function switchOff() {
        for (let i = 0; i < trafficLights.length; i++) {
            const light = trafficLights[i];
            light.classList.remove('active');
        }
    }

    for (let i = 0; i < trafficLights.length; i++) {
        trafficLights[i].onclick = function () {
            switchOff()
            trafficLights[i].classList.toggle('active');
        };
    }
}

const trafficLights = document.querySelectorAll('.traffic-lighter');

for (let i = 0; i < trafficLights.length; i++) {
    const rootelement = trafficLights[i];
    trafficLight(rootelement);
}

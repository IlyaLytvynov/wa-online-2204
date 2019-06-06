import { trafficLight } from './scripts/traffic-lighter';
import { dropDown } from './scripts/drop-down';

import './lesson_13.scss';
import './styles/traffic-lighter.scss';

trafficLight();
dropDown(undefined, ['USD', 'CAD', 'UHR', 'EUR', 'FRF', 'Other']);
dropDown(undefined, ['Amsterdam', 'London', 'Glasgo', 'Rome']);
dropDown();
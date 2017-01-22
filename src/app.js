import $ from 'jquery';
import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {Button} from './ui/button.js ';
import {Image} from './ui/image.js';
import {TitleBar} from './ui/title-bar.js';
import {DataTable} from './ui/data-table.js';

let headers = "License Make Model Miles".split(' ');
let dataService = new FleetDataService(fleet);
dataService.loadData(fleet);
let dt = new DataTable(headers, dataService.cars);

dt.appendToElement($('body'));

// let tb = new TitleBar('My App');
// tb.addLink('Home', '');
// tb.addLink('Cars', '');
// tb.addLink('Drones', '');
// tb.addLink('Map', '');
// tb.appendToElement($('body'));

// let b = new Button('Click me');
// b.appendToElement($('body'));
//
// let i = new Image('../images/tesla.jpg');
// i.appendToElement($('body'));

// ////////// Code below this line for testing purposes

// let dataService = new FleetDataService();
// dataService.loadData(fleet);

// let car = dataService.getCarByLicense('AT9900');
// console.log(car);

// let cars = dataService.getCarsSortedByLicense();
// for (let car of cars) {
//     console.log(car.license);
// }

// for (let car of dataService.cars) {
//     console.log(car.license);
// }

// let cars = dataService.filterCarsByMake('e');
//
// for (let car of cars) {
//     console.log(car.make);
// }
//
// for (let e of dataService.errors) {
//     console.log(e.message);
// }
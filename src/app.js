import $ from 'jquery';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {ApplicationBase} from './framework/application-base.js';
import {HomePage} from './home-page.js';
import {CarsPage} from './cars-page.js';

export class App extends ApplicationBase {
    constructor() {
        super('Telsa Manager');
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);

        this.addRoute('Home', new HomePage(), true);
        this.addRoute('Cars', new CarsPage());
        this.addRoute('Drones', null);
        this.addRoute('Map', null);
    }
}

// Global object to allow access to other parts of the application
export let application = new App();
application.show($('body'));
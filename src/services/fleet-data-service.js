import {Car} from '../classes/car.js';
import {Drone} from '../classes/drone.js';
import {DataError} from './data-error.js';

export class FleetDataService {
    constructor() {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    loadData(fleet) {
        for (let data of fleet) {
            switch (data.type) {
                case 'car':
                    if (this.validateCarData(data)) {
                        let car = this.loadCar(data);
                        if (car) {
                            this.cars.push(car);
                        }
                    }
                    else {
                        let e = new DataError('Invalid car data');
                        this.errors.push(car);
                    }
                    break;
                case 'drone':
                    this.drones.push(data);
                    break;
                default:
                    let e = new DataError('Invalid vehicle type', data);
                    this.errors.push(e);
                    break;
            }
        }
    }

    loadCar(car) {
        try {
            let c = new Car(car.license, car.model, car.latLong);
            c.miles = car.miles;
            c.make = car.make;
            return c;
        } catch (e) {
            this.errors.push(new DataError('Error loading car', car));
        }
        return null;
    }

    validateCarData(car) {
        let hasErrors = false;
        let requireProps = 'license model latLong miles make'.split(' ');

        for (let field of requireProps) {
            if (!car[field]) {
                this.errors.push(new DataError(`invalid field ${field}`, car));
                hasErrors = true;
            }
        }
        if (Number.isNaN(Number.parseFloat(car.miles))) {
            this.errors.push(new DataError('Invalid mileage', car));
            hasErrors = true;
        }
        // If no errors, return true. If errors, return false
        return !hasErrors;
    }

}
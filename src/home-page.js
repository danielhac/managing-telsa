import {BaseElement} from './ui/base-element.js';
import {Image} from './ui/image.js';
import {Button} from './ui/button.js';
import {application} from './app.js';

export class HomePage extends BaseElement {

    constructor() {
        super();
    }

    createElement() {
        super.createElement();

        let i = new Image('../images/tesla.jpg');
        i.appendToElement(this.element);

        // Buttons
        let styleString = 'width: 300px; height: 80px; font-size: 26px; margin: 10px;';
        let b = new Button('Self Driving Cars');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        //b.element.click(() => application.activateRoute('Cars'));

        b = new Button('Drones');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        //b.element.click(() => application.activateRoute('Drones'));
    }

    getElementString() {
        return '<div style="text-align: center;"></div>';
    }
}
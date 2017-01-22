// All UI components will derive from this

import $ from 'jquery';

export class BaseElement {
    constructor() {
        this.element = null; // jQuery object
    }

    // Append this element to some other element
    appendToElement(el) {
        this.createElement();
        el.append(this.element);
        this.enableJS();
    }

    // jQuery wrapped object
    createElement() {
        let s = this.getElementString();
        this.element = $(s);
    }

    // Each component will have its own string that has the tag, classes, attributes, etc
    // A way to enforce this is to throw a message at this base class
    getElementString() {
        throw 'Please override getElementString() in BaseElement';
    }

    // Enable JS on an object
    // This case its to allow the ripple effect that was suppose to be by default from MDL
    enableJS() {
        componentHandler.upgradeElement(this.element[0]); // Part of MDL
    }
}
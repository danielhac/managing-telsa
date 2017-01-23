// Add any reusable code that will be consumed by other applications here

import {TitleBar} from '../ui/title-bar.js';

export class ApplicationBase {
    constructor(title) {
        this.title = title;
        this.titleBar = new TitleBar(this.title);
        this.routeMap = {};
        this.defaultRoute = null;
    }

    activateRoute(route) {
        let content = this.titleBar.element.find('.page-content'); // page-content found in 'title-bar.js' set from MDL
        content.empty(); // jQuery - empty out all children (clear routes)

        this.routeMap[route].appendToElement(content);
    }

    addRoute(id, pageObject, defaultRoute = false) {
        this.titleBar.addLink(id, '');

        this.routeMap[id] = pageObject;

        if (defaultRoute) {
            this.defaultRoute = id;
        }
    }

    show(element) {
        // Title bar - Navigation
        this.titleBar.appendToElement(element);

        // Assign click handler to links within Title bar
        // Finding 'mdl-navigation__link' within 'title-bar.js' from MDL
        // Use => instead of function to ensure that 'this.activateRoute...' is set to instance of this class
        this.titleBar.element.find('.mdl-navigation__link').click((event) => {
            let route = event.target.innerHTML;
            this.activateRoute(route.trim()); // trim to ensure preceding and following spaces aren't included from 'title-bar.js'
        });

        if (this.defaultRoute) {
            this.activateRoute(this.defaultRoute);
        }
    }
}
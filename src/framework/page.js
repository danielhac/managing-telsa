// A base class for related 'pages'
// Can be useful to add common components such as a footer, breadcrumbs, sidebar, etc.

import {BaseElement} from '../ui/base-element.js';

export class Page extends BaseElement {

    constructor(pageTitle) {
        super();
        this.pageTitle = pageTitle;
    }

}
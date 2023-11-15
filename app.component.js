import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.name = 'luis';
        this.imgURL = 'https://picsum.photos/id/237/500/500';
    }
    getName() {
        return this.name;
    }
    changeImage(e) {
        this.imgURL = e.target.value;
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        // template: `<p>Hello world!</p>`,
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        // styles: ['']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map
//# sourceMappingURL=app.component.js.map
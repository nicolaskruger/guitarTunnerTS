"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class View {
    constructor(element) {
        this.element = element;
    }
    set(models) {
        this.element.innerHTML = this.template(models);
    }
}
exports.View = View;
//# sourceMappingURL=View.js.map
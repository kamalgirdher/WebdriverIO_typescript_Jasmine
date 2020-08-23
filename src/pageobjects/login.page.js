"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = require("./page");
class LoginPage extends page_1.default {
    get inputUsername() { return $('#username'); }
    open() {
        return super.open('login');
    }
}
exports.default = new LoginPage();
//# sourceMappingURL=login.page.js.map
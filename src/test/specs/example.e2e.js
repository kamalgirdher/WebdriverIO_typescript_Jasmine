"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login_page_1 = require("../../pageobjects/login.page");
const secure_page_1 = require("../../pageobjects/secure.page");
describe('My Login application', () => {
    it('should login with valid credentials', () => {
        login_page_1.default.open();
        login_page_1.default.login('tomsmith', 'SuperSecretPassword!');
        expect(secure_page_1.default.flashAlert).toBeExisting();
        expect(secure_page_1.default.flashAlert).toHaveTextContaining('You logged into a secure area!');
    });
});
//# sourceMappingURL=example.e2e.js.map
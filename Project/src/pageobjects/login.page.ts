import Page from './page';

class LoginPage extends Page {

    get inputUsername () { return $('#username') }
    
    open () {
        return super.open('login');
    }
}

export default new LoginPage();

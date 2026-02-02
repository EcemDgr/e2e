import ÖdevLogin from '../../../pages/ÖdevLogin'
import ÖdevHomePage from '../../../pages/ÖdevHomePage'

describe ('Page Object Pattern - Farkli mail ile login Testi',() => {

 it ('TC02_Page Object Pattern- farkli mail ile basarili Login ve Logout',()=> {
 
    loginpage.NavigateUrl();
    loginpage.CheckEmailField();
    loginpage.typeEmail('testowyqa@qa.team');
    loginpage.CheckPasswordField();
    loginpage.typePassword('QA!automation-1');
    loginpage.CheckLoginButton();

    homepage.CheckHamburgerMenu();
    homepage.CheckLogoutButton();
 
homepage.CheckHomePage();

  })
})
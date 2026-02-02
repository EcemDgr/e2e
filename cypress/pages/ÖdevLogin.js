import loginpage from '../../../pages/ÖdevLogin'
import homepage from '../../../pages/ÖdevHomePage'

describe ('Page Object Pattern - LoginPage Test',() => {

 it ('TC01_Page Object Pattern-basarili Login ve Logout',()=> {
 
loginpage.NavigateUrl();
    loginpage.CheckEmailField();
    loginpage.typeEmail('user888@gmail.com');
    loginpage.CheckPasswordField();
    loginpage.typePassword('1234567890');
    loginpage.CheckLoginButton();

    homepage.CheckHamburgerMenu();
    homepage.CheckLogoutButton();
 
homepage.CheckHomePage();

  })
})
import Login from  "../../pages/Login";
import Login_2 from "../../pages/Login"

describe('Page Object Model-POM', () => {

   it ('TC02 Login Page UI Kontrolü with Page Object Pattern', () => {

    Login.navigateUrl();
    Login.checkTitle("Login");
    Login.checkEmailField();
    Login.checkPasswordField();
    Login.checkLoginButton();
    Login.checkPasswordField("I can't remember the password");


   }); 

   it ('TC03 Login Page UI Kontrolü with Page Object Pattern', () => {

    Login_2.navigateUrl();
    Login_2.checkTitle("Login");
    Login_2.checkEmailField();
    Login_2.checkPasswordField();
    Login_2.checkLoginButton();
    Login_2.checkPasswordField("I can't remember the password");

   });

   let data;
   
   it ('TC04 page object pattern fixture kullanimi', () => {

      cy.fixture('login').then((data) => {
   //cy.fixture('login.json').then((expected) => {
    
    
    Login_2.navigateUrl();
    Login_2.checkTitle(data.titleText);
    Login_2.checkEmailField();
    Login_2.checkPasswordField();
    Login_2.checkLoginButton();
    Login_2.checkPasswordField(data.forgetPassword);
      
   });

   

   });

});
 class Login_2{

url="https://www.edu.goit.global/account/login";

title='.next-10stgr7 > .next-c1vj7d';
email='[name="email"]';
password='[name="password"]';
loginButton='.next-1jphuq5';
forgetPassword='.next-1f1fv1i > .next-1qrvie4';




   navigateUrl(){

       cy.visit("https://www.edu.goit.global/account/login");
       cy.visit(this.url)
   }


   //navigateUrl(url){
    
   //cy.visit(url);
   //}
   
   checkTitle(){

    cy.get(this.title).should("be.visible").and("have.text","Login");
      //cy.get('.next-10stgr7 > .next-c1vj7d').should("be.visible").and("have.text","Login");

      //this.checkTitle(title){
      //cy.get('.next-10stgr7 > .next-c1vj7d').should("be.visible").and("have.text",title);
    //}
    
   }

   checkEmailField(){
    
    cy.get(this.email).should("be.visible");
       cy.get('[name="email"]').should("be.visible");

   }
   


    checkPasswordField(){

        cy.get(this.password).should("be.visible");
        cy.get('[name="password"]').should("be.visible");

    }

    checkLoginButton(){

            cy.get(this.loginButton)
            cy.get('.next-1jphuq5').should("be.visible").and("exist");
    }


    forgetPassword(text){

        cy.get(this.forgetPassword)
        cy.get('.next-1f1fv1i > .next-1qrvie4').should("be.visible").and("have.text",text);
    }
 }   
export default new Login_2();
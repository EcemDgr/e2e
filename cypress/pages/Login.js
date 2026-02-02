 class Login{

   navigateUrl(){

       cy.visit("https://www.edu.goit.global/account/login");
   }


   //navigateUrl(url){
    
   //cy.visit(url);
   //}
   
   checkTitle(){

      cy.get('.next-10stgr7 > .next-c1vj7d').should("be.visible").and("have.text","Login");

      //this.checkTitle(title){
      //cy.get('.next-10stgr7 > .next-c1vj7d').should("be.visible").and("have.text",title);
    //}
    
   }

   checkEmailField(){

       cy.get('[name="email"]').should("be.visible");

   }
   


    checkPasswordField(){

        cy.get('[name="password"]').should("be.visible");

    }

    checkLoginButton(){

            cy.get('.next-1jphuq5').should("be.visible").and("exist");
    }


    forgetPassword(text){

        cy.get('.next-1f1fv1i > .next-1qrvie4').should("be.visible").and("have.text",text);
    }
 }   
export default new Login();


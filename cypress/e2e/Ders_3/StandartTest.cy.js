describe('Standart Test Yazma', () => {

   it ('TC01 Standart test', () => {

       cy.visit("https://www.edu.goit.global/account/login");
       cy.get('.next-10stgr7 > .next-c1vj7d').should("be.visible").and("have.text","Login");
       cy.get('[name="email"]').should("be.visible");
       cy.get('[name="password"]').should("be.visible");
       cy.get('.next-1jphuq5').should("be.visible").and("exist");
       cy.get('.next-1f1fv1i > .next-1qrvie4').should("be.visible")
       .and("have.text","I can't remember the password");









   })








})
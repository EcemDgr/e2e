describe('Login olma testi', function(){

    it ('tc_01 manager login olma testi', function(){

     cy.login("user888@gmail.com","1234567890")

      // cy.visit('https://www.edu.goit.global/account/login')
      // cy.get('[name="email"]').type("user888@gmail.com")
      // cy.get('[name="password"]').type("1234567890")
      // cy.get('.next-1jphuq5').click();

        })


    it ('tc_02 administration login olma testi', function (){
 
      cy.login("nadia.tsomko.98@gmail.com","Nadia_Tsomko78")

      // cy.visit('https://www.edu.goit.global/account/login')
      // cy.get('[name="email"]').type("nadia.tsomko.98@gmail.com")
      // cy.get('[name="password"]').type("Nadia_Tsomko78")
      // cy.get('.next-1jphuq5').click();

    
     })


    it('tc_03 user login olma testi', function(){
        
    cy.login("mrdusty@duniakeliling.com","mrdusty@duniakeliling.com")

       // cy.visit('https://www.edu.goit.global/account/login')
       // cy.get('[name="email"]').type("mrdusty@duniakeliling.com")
       // cy.get('[name="password"]').type("mrdusty@duniakeliling.com")
       // cy.get('.next-1jphuq5').click();

     

    })




})
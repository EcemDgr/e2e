describe('ilk dersimiz', function (){
    
    it ("TC01 İlk test senaryomuz", function(){

       cy.visit('https://www.edu.goit.global/account/login')
       cy.get('#user_email').type("deneme");
       cy.get('#user_email').as('email');
       cy.get('@email').clear();
    
       cy.get('[name="password"]').type('1234567890');
       cy.get('.eckniwg2').click();

       cy.url().should('include','www.edu.goit.global');
       cy.title().should('include','Log in');

       cy.wait(4001);

       cy.get('.next-1jphuq5').should('have.text','Log in').and('be.visible');

    

    })

it ('TC02 Log in butonunun dogrulanmasi', function (){
       cy.visit('https://www.edu.goit.global/account/login')
       cy.get('.eckniwg2').should('have.text', 'Log in')
       .and('have.css','background-color','rgb(255, 107, 10)')
       cy.get('[name="email"]').type("user888@gmail.com")
       cy.get('[name="password"]').type("1234567890")
       cy.get('.next-1jphuq5').click();

     cy.get('#go-to-the-course-homepage-widget > .next-1jphuq5').scrollIntoView();

       cy.scrollTo('bottom');
       cy.wait(5000);
       cy.scrollTo('center');




    })


})
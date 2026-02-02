describe('login olma testi', function () {

  it('LOG_01 login olma testi', function () {

    cy.visit('https://www.edu.goit.global/account/login')

    cy.get('[name="email"]').type('user888@gmail.com')
    cy.get('[name="password"]').type('1234567890')
    cy.get('.eckniwg2').click()

    cy.get('#open-navigation-menu-mobile').should('be.visible').click()

    cy.contains('Log out').click()

    cy.url().should('include', '/account/login')

  })

})





describe('farkli mail ile login olma', function () {

  it('LOG_02 login olma testi', function () {

    cy.visit('https://www.edu.goit.global/account/login')

    cy.get('[name="email"]').type('testowyqa@qa.team')
    cy.get('[name="password"]').type('QA!automation-1')
    cy.get('.eckniwg2').click()

    cy.get('#open-navigation-menu-mobile').click()

    cy.contains('Log out').click()
    cy.wait(4000)
    cy.url().should('include', '/account/login')

  })

})
describe ('ürün listesi API testi',() => {

  it ('fixture verisiyle ürünleri gösterir',() => {

    Cy.intercept('GET', '/api/products', {fixture: 'products.json'}).as('getProducts');

    cy.visit('https://localhost:3000/products');
    cy.wait('@getProducts');
    cy.contains('Handmade Bags').should('be.visible');
    cy.contains('baby blanket').should('be.visible');


  })


})
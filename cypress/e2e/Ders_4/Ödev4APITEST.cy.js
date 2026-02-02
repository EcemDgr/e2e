 describe('API Testing', () => {
      

    it('GET isteği', () => {
      cy.request ('https://www.arbeitnow.com/api/job-board-api').then((response)=> {

      assert.equal(response.status,200);
      expect(response.status).to.eq(200);

      })

    })

      })
   it('TC_02 GET isteği', () => {
      const request = {
      method : 'GET',
      url : '<https://www.arbeitnow.com/api/job-board-api>',
      failOnStatusCode: false
      };

    cy.request ('https://www.arbeitnow.com/api/job-board-api').then((response)=> {

      assert.equal(response.status,200);
      expect(response.status).to.eq(200);
      console.log("response ::::::::, response")
      cy.log("response ::::::::",JSON.stringify(response))
      cy.log("response ::::::::",JSON.stringify(response.body))
      cy.log("response ::::::::",JSON.stringify(response.headers))
      cy.log("response ::::::::",JSON.stringify(response.time))
    
    
    })


    })

    it('TC_03 rastgele parametre ekleme', () => {
      const request = {
      method : 'GET',
      url : 'https://www.arbeitnow.com/api/job-board-api',
      qs: {
       search: 'QA',
       location: 'Europe',
       
     
    },

      failOnStatusCode: false
      };

    cy.request ('https://www.arbeitnow.com/api/job-board-api').then((response)=> {

      assert.equal(response.status,200);
      expect(response.status).to.eq(200);
     
    
    
    })


    })

it('TC_04 - Response time 2000 ms altinda olmali', () => {

     })
    const request = {
    method: 'GET',
    url: 'https://www.arbeitnow.com/api/job-board-api'
    };
    cy.request(request).then((response) => {
    
    expect(response.status).to.eq(200);
    expect(response.duration).to.be.lessThan(2000);

    
  });



it ('TC_06 - Response body dogru formatta dönmeli', () => {

  cy.request({
    method: 'GET',
    url: 'https://www.arbeitnow.com/api/job-board-api'
  }).then((response) => {

  });
  it('Response body format kontrolü', () => {

  cy.request('https://www.arbeitnow.com/api/job-board-api')
    .then((response) => {

      const job = response.body.data[0];

      expect(job.company_name).to.be.a('string');
      expect(job.title).to.be.a('string');
      expect(job.description).to.be.a('string');

    });

  });

});

it('TC_07 headers gonderme ve dogrulama', () => {

  const request = {
    method: 'GET',
    url: 'https://www.arbeitnow.com/api/job-board-api',
    qs: {
      search: 'QA',
      location: 'Europe'
    },
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  };

  cy.request(request).then((response) => {

      assert.equal(response.status,200);
      expect(response.status).to.eq(200);
      expect(response.headers.server).to.eq('cloudflare');
      expect(response.headers['content-type']).to.include('application/json');
    
    })
    
 })

  

  
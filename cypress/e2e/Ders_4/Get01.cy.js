describe ('API testing', () => {
   
    it ('TC_01 Get istegi', () => {
  
        cy.request("https:/httpbin.org/get").then((response)=> {
            assert.equal(response.status,200);
            expect(response.status).to.eq(200);         

        })
    })

   
     it ('TC_02 Get istegi', () => {
  
        const request = {
        method : 'GET',
        url: "https://httpbin.org/get"
        }

        cy.request("https:/httpbin.org/get").then((response)=> {
            assert.equal(response.status,200);
            expect(response.status).to.eq(200);         
            console.log("response:::::::", response);
            cy.log('response body:::::::', JSON.stringify(response.body))
            cy.log('response headers:::::::', JSON.stringify(response.headers))
            cy.log('response status:::::::', JSON.stringify(response.status))
            cy.log('response statusText:::::::', JSON.stringify(response.statusText))
            cy.log('response duration:::::::', JSON.stringify(response.duration))
           

        })
  
    })
    
     it ('TC_03 Get istegi', () => {
  
        const request = {
        method : 'GET',
        url: "https://httpbin.org/get",
        qs:{
            id:"1",
            name: "Mr.Dunk"
        },

        failOnStatusCode: false

        }

        cy.request("https:/httpbin.org/get").then((response)=> {
            assert.equal(response.status,200);
            expect(response.status).to.eq(200);         
            cy.log('response body:::::::', JSON.stringify(response.body))
           

        })
  
    })

 //cy.request({
 //method: 'GET',
 //url: 'https://httpbin.org/get?id=1&name=Mr.Dunk'
//}).then((response) => {
  //cy.log('response body:', JSON.stringify(response.body))
  //expect(response.body.args.id).to.eq('1')
  //expect(response.body.args.name).to.eq('Mr.Dunk')
//})

 it ('TC_04 POST istegi BODY', () => {
  
        const request = {
        method : 'POST',
        url: "https://httpbin.org/post",
        body:{
            name:"Mr.Dunk",
            role:"QA",
            age:30
        },

        failOnStatusCode: false

        }

        cy.request("https:/httpbin.org/get").then((response)=> {
            assert.equal(response.status,200);
            expect(response.status).to.eq(200);         
            cy.log('response body:::::::', JSON.stringify(response.body))
           

        })
  
    })

it('TC_04 POST istegi BODY', () => {

  const requestOptions = {
    method: 'POST',
    url: 'https://httpbin.org/post',
    body: {
      name: 'Mr.Dunk',
      role: 'QA',
      age: 30
    },
    failOnStatusCode: false
  }

  cy.request(requestOptions).then((response) => {
    expect(response.status).to.eq(200)
    cy.log('response body:', JSON.stringify(response.body))

    expect(response.body.json.name).to.eq('Mr.Dunk')
    expect(response.body.json.role).to.eq('QA')
    expect(response.body.json.age).to.eq(30)
  })

})

it('TC_05 POST istegi assertions', () => {

  const requestOptions = {
    method: 'POST',
    url: 'https://httpbin.org/post',
    body: {
      name: 'Mr.Dunk',
      role: 'QA',
      age: 30
    },
    failOnStatusCode: false
  }

  cy.request(requestOptions).then((response) => {
    expect(response.status).to.eq(200)
    cy.log('response body:', JSON.stringify(response.body))

    expect(response.body.json.name).to.eq('Mr.Dunk')
    expect(response.body.json.role).to.eq('QA')
    expect(response.body.json.age).to.eq(30)
    assert.equal(response.body.url,"https://httpbin.org/post")
expect(response.body.jason).to.deep.eq({
      name: 'Mr.Dunk',
      role: 'QA',
      age: 30
    })

expect(response.headers['content-type']).to.eq('application.json');
expect(response.headers['content-type']).to.includenp('application.json');
expect(response.duration).to.be.lessThan(5000)
assert.equal('https://httpbin.org/get',response.body['url']);
assert.equal('application/json',response.headers['content-type'])
  })

})
})
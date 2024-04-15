import 'cypress-if'

describe('', function () {   
   xit('er is altijd een body', function () {
      cy.get('body')
      .then(() => {
         cy.get('body').click()
         debugger
      })

      for (let i = 0; i < 2; i++) {
      cy.get('#grid table tbody tr td', { timeout: 2000 }).contains('NAK')
      .if()
      .then(() => {
         cy.log('NAK')  
         })
         .else()
         .then(() => {
         //i = 5
         cy.log(i)
         console.log(i)
         })
      }

      for (let i = 0; i < 5; i++){
         cy.log(i)
         if (i === 100){
            cy.log('mij zul je niet gauw zien hier')
         } else {
            i = 10
            cy.log('deze mededeling mag maar 1 keer verschijnen')
         }
      }
   }) 

   it('Log intercepted body naar console', function () {
      cy.intercept('GET', '/cypress/fixtures/simple.html', (req) => {
         // Continue with the request and create a static response object
         req.continue((res) => {
           // Access the body property of the response object and log it to the console
           console.log('Response Header:', res.header)
           console.log('Response Body:', res.body)
         });
       });
      cy.visit('/cypress/fixtures/simple.html')

      /// dit gaat wel om de body op deze manier vast te leggen:
      cy.request("https://jsonplaceholder.cypress.io/users").then(
         (response) => {
           cy.writeFile("cypress/fixtures/users.txt", response.body)
         }
      )
   })
})

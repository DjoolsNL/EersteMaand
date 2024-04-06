import 'cypress-if'

describe('', function () {   
   it('er is altijd een body', function () {
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
})

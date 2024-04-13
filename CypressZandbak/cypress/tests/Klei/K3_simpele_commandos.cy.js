//// <reference types="cypress" />
describe('Run a local html file', function () {
  // Cypress.on('command:end', (command) => {
  //   console.log(`Command ${command.name} yielded:`, command.attributes);
  //   if (command.error) {
  //     console.error(`Error: ${command.error.message}`);
  //   }
  // })

  it.only('LES 1 cypress commandos', function () {
    // 1
    cy.visit("/cypress/fixtures/simple.html")

    // 2
    cy.wait(283)

    // 3
    cy.get('table')

    // 4 5 6
    cy.get('td').contains('groen').click()

    // 7 8 9
    cy.get('td').contains('rood').click({ multiple: true }) // pakt de eerste 'rood' die hij tegenkomt en pakt ook substring 'rood' als hij die het eerst tegenkomt 

    // 10
    cy.contains('rood') // pakt ook rood maar ook kijkt niet of die in een td staat of elders 

    // 11 
    cy.findByText('rood') // pakt geen substring 'rood', alleen het volledige woord 'rood' 

    // 12
    cy.get('td:contains("rood")') // pakt alle td's met 'rood' en substring 'rood'
    
    // 13 14 15 16 
    cy.get('tr').contains('paard').click().log(' Ness is een meer in Schotland')
    
    // 17
    cy.get('.dieren') // .dieren staat voor class="dieren"
    
    // 18
    cy.get('.kleuren') // .kleuren staat voor class="kleuren"
    
    //  19 20 
    cy.get('#blauw').click() // #blauw staat voor id="blauw"
    
    // 21 
    cy.contains('tbody tr', 'groen')
    
    // 22 23 
    cy.get('p').contains('is de hoofdstad')
    
    // 24 25 
    cy.get('body').click()
    
    // 26
    cy.get('div')

    // 27 28 
    cy.get('button').click()
    
    // 29 30 
    cy.get('input').type('London')
    
    // 31
    cy.wait(423)

    // 32 33 
    cy.get('h1').click()

    // 34 35 36  
    cy.get('p').contains('et scrip').click()

    // 37
    cy.get('[name="zwartwit"]')

    // 38
    cy.get('span')

    // 39 40
    cy.get('a').contains('een link')
  })
})
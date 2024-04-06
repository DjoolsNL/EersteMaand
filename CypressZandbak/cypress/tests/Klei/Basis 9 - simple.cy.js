describe('Run a local html file', function () {
  // Cypress.on('command:end', (command) => {
  //   console.log(`Command ${command.name} yielded:`, command.attributes);
  //   if (command.error) {
  //     console.error(`Error: ${command.error.message}`);
  //   }
  // })

  it('LES 1', function () {
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

    // 11 12
    cy.findByText('rood') // pakt geen substring 'rood', alleen het volledige woord 'rood' 

    // 13
    cy.get('td:contains("rood")') // pakt alle td's met 'rood' en substring 'rood'
    
    // 14 15 16 17
    cy.get('tr').contains('paard').click().log(' Ness is een meer in Schotland')
    
    // 18
    cy.get('.dieren') // .dieren staat voor class="dieren"
    
    // 19
    cy.get('.kleuren') // .kleuren staat voor class="kleuren"
    
    //  20 21
    cy.get('#blauw').click() // #blauw staat voor id="blauw"
    
    // 22
    cy.contains('tbody tr', 'groen')
    
    // 23 24
    cy.get('p').contains('is de hoofdstad')
    
    // 25 26
    cy.get('body').click()
    
    // 27
    cy.get('div')

    // 28 29
    cy.get('button').click()
    
    // 30 31
    cy.get('input').type('London')
    
    // 32
    cy.wait(823)

    // 33 34
    cy.get('h1').click({ multiple: true })

    // 35 36 37 
    cy.get('p').contains('et scrip').click()

    // 38
    cy.get('[name="simpel"]')

    // 39
    cy.get('span')

    // 40 41
    cy.get('a').contains('een link')
  })

  it('LES 2', function () {
  
  
  
  
  
  
  
  
  })
})
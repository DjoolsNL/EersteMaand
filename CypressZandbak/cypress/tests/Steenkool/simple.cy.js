import 'cypress-if'

describe('0. local html file', function () {
  beforeEach(() => {
    /*
    cypress is ook een tool die we zelf naar eigen gebruik kunnen inrichten!
    */
    
    //  experimenteren met custom commands
    //  experimenteren met custom commands
     // nederlandse versie van cy.wait()
    Cypress.Commands.add("wacht", (ms) => {
      cy.wait(ms); 
    })
   
    // nederlandse versie van cy.get()
    Cypress.Commands.add("pak", (input) => {
      cy.get(input) 
    })

    // nederlandse versie van cy.contains()
    Cypress.Commands.add("bevat", (input) => {
      cy.contains(input)
    })

    Cypress.Commands.add('vindInRijTd', { prevSubject: 'element' }, (subject, index) => {
      return cy.wrap(subject).find('td').eq(index);
    })

})
  it('0. local html file', function () {
    // we laden een lokale html file in het cy.visit() commando
    cy.visit("/cypress/fixtures/simple.html")

    cy.wacht(1291)
    cy.pak('td').bevat('groen').click()
    cy.pak('td').bevat('rood').click()
    cy.pak('tr').bevat('paard').click()
    cy.pak('.paard').click()
    cy.pak('#blauw').click()
    cy.contains('tbody tr', 'groen').vindInRijTd(3).click()
    cy.pak('p').bevat('is de hoofdstad')

    // ****enable cypress-if in terminal: npm i -D cypress-if
    // ****zet bovenin de code van dit script: import 'cypress-if' (als nodig) 
    cy.get('table')
    .if()
      .then(() => {
        cy.get('table tr')
        .if()
          .its('length').as('rijen')
            .then((rijen) => {
              cy.log('getelde rijen: ' + this.rijen)
              cy.readFile('cypress/fixtures/simple.json')
                .then((content) => { 
                  cy.log('aantal in file :' +  content.rijen)                     
                  content.rijen = this.rijen
                  cy.writeFile('cypress/fixtures/simple.json', content)
                  for (let i = 0; i < content.rijen; i++) {
                    cy.log('i in de for loop: ' + i)    
                  }
                })
            })
        .else()
          .then(() => {
            cy.readFile('cypress/fixtures/simple.json')
            .then((content) => {                      
              content.rijen = 0
              cy.writeFile('cypress/fixtures/simple.json', content)
            })
          })
      })
      
      Cypress.Commands.add("filedata", (input) => {
        cy.readFile('cypress/fixtures/simple.json')
        .then((content) => { 
        cy.log('aantal in file :' +  input)                     
          content.rijen = input
          cy.writeFile('cypress/fixtures/simple.json', content)
        })

        return cy.wrap(subject).find('td').eq(index);
      })


      // loggen: eerst de structuur en dan de objecten env.var.user, datetime, from spec, 
      // daarna object defineren dat onze gegevens draagt

      const generateDateNumber = () => {
        let actualDate = new Date()
        let year = actualDate.getFullYear()
        let month = actualDate.getMonth() + 1
        let day = actualDate.getDate()
        let hour = actualDate.getHours()
        let minutes = actualDate.getMinutes()
        let seconds = actualDate.getSeconds()
        return `${year}${month}${day}${hour}${minutes}${seconds}`
      }
      
    cy.wacht(800)
  })
})
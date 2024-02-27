/* eslint-disable prettier/prettier */
/// <reference types="cypress" />
/* eslint-disable cypress/unsafe-to-chain-command */

// ---------------------------------------------------------------------
//    Heerlen.nl getest op het onderwerp bijzondere bijstand 
// ---------------------------------------------------------------------

describe("Kunnen we het onderwerp bijzondere bijstand via de zoekfunctie vinden?", () => {
    // dit commando zorgt ervoor dat een uncaught error geen gevolgen heeft voor de test
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    it('We typen bijzonder bijstand in het zoekveld', () => {
        cy.visit("https://www.heerlen.nl/")
        cy.wait(2000)
        cy.get('#searchbox').type('bijzondere bijstand{enter}') // {enter} voert het commando enter uit
        
        // vanaf hier ga je verder met je eigen testscript
    })
})

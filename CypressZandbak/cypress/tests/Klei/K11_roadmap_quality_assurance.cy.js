/* eslint-disable prettier/prettier */
/// <reference types="cypress" />
/* eslint-disable cypress/unsafe-to-chain-command */

describe("Bezoek de website die je een plattegrond toont van testen in de IT", () => {
    beforeEach(() => {
        cy.visit("https://roadmap.sh/qa")
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it("Ontdek meer over het vak van testen", () => {
        cy.wait(2000)
    })
})
